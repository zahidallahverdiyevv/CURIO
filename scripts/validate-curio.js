// Run with: npm run validate. No dependencies required.
const fs = require('fs');
const path = require('path');
const vm = require('vm');
const assert = require('assert/strict');
const root = path.resolve(__dirname, '..');
const read = name => fs.readFileSync(path.join(root, name), 'utf8');
const categories = ['history', 'geography', 'science', 'philosophy', 'art-culture', 'technology'];
const catalog = JSON.parse(read('content/quizzes/catalog.json'));
const quizzes = catalog.map(quiz => quiz.slug);
assert.equal(quizzes.length,48);
function dataset(source, variable = 'questions') {
  const start = source.indexOf('const ' + variable + ' = [');
  assert(start >= 0);
  const begin = source.indexOf('[', start);
  const end = source.indexOf('\n    ];', begin);
  // New datasets are serialized JSON; existing datasets are JavaScript literals.
  if (end >= 0) return vm.runInNewContext('(' + source.slice(begin, end + 6).trim().replace(/;$/, '') + ')');
  let depth = 0, quote = '', escaped = false;
  for (let i = begin; i < source.length; i++) {
    const c = source[i];
    if (quote) { if (escaped) escaped = false; else if (c === '\\') escaped = true; else if (c === quote) quote = ''; continue; }
    if (c === '"' || c === "'") { quote = c; continue; }
    if (c === '[') depth++;
    if (c === ']' && --depth === 0) return vm.runInNewContext('(' + source.slice(begin, i + 1) + ')');
  }
  throw Error('Dataset not closed');
}
const home = read('index.html');
const collection = home.slice(home.indexOf('id="categories"'), home.indexOf('<!-- How It Works'));
assert.equal((collection.match(/class="category-card /g) || []).length, 6);
for (let i = 0; i < categories.length; i++) {
  const slug = categories[i], html = read(slug + '.html');
  assert(home.includes('href="' + slug + '.html"'));
  assert.equal((html.match(/<h3\b/g) || []).length, 8, slug + ' card count');
  assert.equal((html.match(/Coming Soon/g) || []).length, 0, slug + ' availability');
  const links = [...html.matchAll(/href="([^"#]*\.html)"/g)].map(m => m[1]);
  const expected=catalog.filter(quiz=>quiz.category===slug);
  assert.equal(links.filter(l => quizzes.some(q => l === q + '.html')).length, 8);
  for(const quiz of expected)assert(links.includes(quiz.slug + '.html'),quiz.slug+' card link');
}
let questionCount = 0;
for (const slug of quizzes) {
  const qs = dataset(read(slug + '.html'));
  assert.equal(qs.length, 15, slug);
  qs.forEach((q, i) => {
    assert.equal(q.options.length, 4); assert.equal(new Set(q.options).size, 4);
    assert(Number.isInteger(q.correctIndex) && q.correctIndex >= 0 && q.correctIndex < 4);
    assert(q.question && q.explanation);
    assert.equal(q.difficulty, i < 5 ? 'Easy' : i < 10 ? 'Medium' : 'Hard');
  });
  assert.equal(new Set(qs.map(q => q.question)).size, 15);
  const positions=[0,0,0,0];qs.forEach(q=>positions[q.correctIndex]++);assert(Math.max(...positions)<=7,slug+' excessive answer concentration');
  questionCount += qs.length;
}
for (const file of ['index', ...categories, ...quizzes]) {
  const html = read(file + '.html');
  for (const m of html.matchAll(/<script\b[^>]*>([\s\S]*?)<\/script>/g)) new vm.Script(m[1], { filename: file });
  for (const m of html.matchAll(/(?:href|src)="([^"#]+)"/g)) {
    const url = m[1]; if (/^(https?:|mailto:|tel:|javascript:)/.test(url)) continue;
    assert(!url.startsWith('/'), file + ': use relative paths: ' + url);
    assert(fs.existsSync(path.join(root, url.split('#')[0])), file + ': missing ' + url);
  }
}
assert.equal(dataset(home, 'dailySixQuestions').length, 6);

assert.equal(questionCount,720);
console.log("PASS: six categories, 48 linked quizzes, 720 quiz questions plus Daily Six; 5/5/5 levels, unique options, valid answers, relative links and script syntax.");
