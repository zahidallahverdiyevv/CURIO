# Quiz expansion — 17 November 2026

All 42 previously unavailable topics now have a 15-question quiz and an active category card. Six original quizzes remain unchanged: the site has 48 topic quizzes containing 720 questions, plus six Daily Six questions. An additional interactive country-finding game is available at `world-map.html` and through Geography.

## Content and review

The 630 new questions follow five Easy, five Medium and five Hard slots. Each has four distinct options, one marked answer and a rationale. The source is in six `content/quizzes/*.txt` files. A line stores the question, correct option, three distractors and explanation, separated by `|`. The section heading is the quiz slug. The source format is an editing format, not the displayed option ordering.

History and Geography were substantially revised after the user's supplied review. All their Medium/Hard slots were rewritten, and the specific Curie, UN, Haiti, chronometer, Roanoke, tidal force, maritime baseline, population-density and cartography issues were addressed. Historical Mysteries now emphasizes named historical cases. Geography includes more flag content and geographical-knowledge history. Some interpretation and evidence questions remain, alongside concrete factual, conceptual and numerical questions.

Additional distractor passes replaced unrelated or needlessly long options, especially in Philosophy and Technology. This is an editorial improvement, not a guarantee that no question can be improved. Difficulty is an author-assigned instructional level, not a calibrated result from learner trials. Independent content review is still appropriate.

The latest answer keys are the **v2** files listed in [the review index](quiz-review/README.md); they are generated from the same preparation function as the local pages. Earlier unversioned files are retained as review history. The combined file contains all 630 new questions. [Targeted source checks](quiz-review/sources.md) distinguish consulted references from comprehensive verification.

## Answer-cue checks

- Each quiz has an answer-position distribution of 4/4/4/3, with the minority position varying across quizzes.
- No quiz has three consecutive questions with the same correct letter.
- The current new-content totals are A 157, B 161, C 154, D 158.
- The machine-readable [length audit](quiz-review/answer-cues-audit.json) reports strict longest/shortest positions and pronounced long-correct outliers. The outlier rule flags a correct option more than 1.65 times the median wrong-option length and more than 14 characters longer.
- These measurements do **not** prove the absence of answer clues. They do not assess grammatical cues, implausible claims or every superficial pattern. The correct option is strictly shortest in a substantial subset, which remains visible in the report for independent review rather than being hidden by filler text. Human review should assess meaningful length differences and semantic plausibility, not character count alone.

## Validation

- All 48 category cards opened in a real browser. The title matched the card, selecting an answer locked all four options, and the next action advanced to question 2. No captured browser errors were reported.
- Automated DOM tests run correct, incorrect and mixed answers through all 49 question sets: **147 full runs**, including Daily Six. They check scores, sequential progression, repeated/stale clicks, disabled choices and read-only answer review.
- Source/build tests check all **630 unique new stems**, 42 authored topics, option uniqueness, rationale presence, answer balance, no triple-letter runs and exact agreement between the source data and generated pages.
- Site checks cover 62 HTML pages, their local links and anchors; server checks cover every public HTML/asset route and denial of internal files.
- The map game's separate regression and browser checks cover scoring, hints, answer reveal, new rounds, zoom/reset and a mobile layout. Details are in [WORLD-MAP](WORLD-MAP.md).

## Editing workflow

```powershell
npm run build:quizzes
npm run review:quizzes
npm test
```

Edit source content first, then rebuild pages and review files. The generator preserves the existing category artwork and uses the existing quiz page design. It checks all new content before writing the generated pages. Category cards are enabled after page generation. The local server reads files immediately; refresh a browser page to load changes.

New source/editing helpers and review documents are denied by the static server's public-file rules. The quizzes themselves remain public frontend content; answers are not protected examination material. No Supabase data or Auth settings were changed during this work. Quiz and map scores remain in page memory.

Pre-change checkpoint: `.curio-backups/quiz-expansion-2026-11-17/`. Existing artwork and unrelated `tehvil/` files were retained.
