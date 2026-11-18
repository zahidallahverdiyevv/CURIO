const fs = require('node:fs');
const path = require('node:path');
const assert = require('node:assert/strict');
const { JSDOM } = require('jsdom');
const root = path.resolve(__dirname, '..');
const pages = fs.readdirSync(root).filter(file => file.endsWith('.html'));
let links = 0;
for (const file of pages) {
  const dom = new JSDOM(fs.readFileSync(path.join(root, file), 'utf8'));
  const document = dom.window.document;
  assert(document.title.trim(), `${file}: missing page title`);
  assert(!document.title.includes('Art Art'), `${file}: incorrect title`);
  for (const link of document.querySelectorAll('a[href]')) {
    const href = link.getAttribute('href');
    assert(href && !/^javascript:/i.test(href), `${file}: inactive link`);
    if (/^(https?:|mailto:|tel:)/i.test(href)) continue;
    const [page, hash] = href.split('#');
    const destination = page || file;
    assert(fs.existsSync(path.join(root, destination)), `${file}: missing ${destination}`);
    if (hash) {
      const target = page ? new JSDOM(fs.readFileSync(path.join(root, destination), 'utf8')) : dom;
      assert(target.window.document.getElementById(decodeURIComponent(hash)), `${file}: missing anchor ${href}`);
      if (target !== dom) target.window.close();
    }
    links++;
  }
  const header = document.querySelector('header');
  if (header?.textContent.includes('person')) {
    assert(header.querySelector('a[aria-label="Account access"]'), `${file}: inactive account icon`);
  }
  for (const heading of document.querySelectorAll('h3')) {
    assert(![...heading.attributes].some(attr => attr.name.includes('#')), `${file}: malformed heading attributes`);
  }
  dom.window.close();
}

// Navigation must work even after an unfinished quiz has an answer.
const dom = new JSDOM('<div id="quiz"></div>', { url: 'http://127.0.0.1:3001/', runScripts: 'outside-only' });
const w = dom.window;
w.eval(fs.readFileSync(path.join(root, 'assets/quiz/quiz.js'), 'utf8'));
const categories = { Geography: 'geography', History: 'history', Science: 'science', Philosophy: 'philosophy', 'Art & Culture': 'art-culture', Technology: 'technology' };
const questions = Object.keys(categories).map(category => ({ category, question: category + '?', options: ['Yes', 'No', 'Maybe', 'Other'], correctIndex: 0, explanation: 'Test explanation', topicLink: 'Explore ' + category }));
w.CurioQuiz.mount(w.document.getElementById('quiz'), questions, true);
for (const category of Object.keys(categories)) {
  w.document.querySelector('.cq-option').click();
  assert.equal(w.document.querySelector('#quiz-topic-link').getAttribute('href'), categories[category] + '.html');
  const leave = new w.Event('beforeunload', { cancelable: true });
  w.dispatchEvent(leave);
  assert.equal(leave.defaultPrevented, false, 'Unfinished quiz must not block navigation');
  w.document.querySelector('.cq-actions button').click();
}
dom.window.close();
console.log(`PASS: ${pages.length} page titles, ${links} local links and fragment targets, active account/explore links, heading markup, six Daily Six topic destinations and navigation after answering.`);
