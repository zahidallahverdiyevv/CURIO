# CURIO quiz audit and implementation — 3 November 2026

Checkpoint: `.curio-backups/quiz-overhaul-2026-11-03/` contains the seven original HTML pages, original validators, and extracted datasets. No authentication, image, database, or deployment configuration was changed.

## Scope and counts

96 questions reviewed individually: six 15-question quizzes and six Daily Six questions. `QUIZ-QUESTION-AUDIT.json` records before/after data and an assessment for each numbered slot.

- 88 question slots changed, including option reordering; 49 have substantive content, explanation, difficulty, or option-membership changes. Geography reordering/replacements count as changed slots, not entirely new authored questions.
- 44 option sets changed in membership/wording (ordering alone excluded); 88 changed in ordering or membership.
- 22 explanations changed by slot (includes moved/replaced geography questions).
- Two retained geography items reclassified: Wellington Easy → Medium, Astana Hard → Medium. Five surplus geography recall slots replaced with Hard comparison/application items. Seven displayed difficulty labels differ by slot overall. All six quizzes now have five Easy, five Medium, five Hard.
- Three clear factual/terminological corrections: painting described as architectural (Daily Six), Linux kernel versus complete OS, and Cyrus's conquests implying the same date for Lydia and Babylon. Additional qualifications address Bern's federal-city status, writing chronology, the Rosetta Stone, alphabet transmission, and pre-Confederation Ottawa. These are not all counted as wholly false answers.
- Correct positions: 4/4/4/3 in each 15-question quiz, 2/2/1/1 in Daily Six; independently seeded order per quiz, rather than a common repeating pattern.

## Sources and factual corrections

External cross-checking was targeted, not a claim that every fact was independently sourced. Remaining basic textbook claims received editorial review. No citations were invented.

- [Swiss Confederation political system](https://www.aboutswitzerland.eda.admin.ch/en/political-system): Bern is the federal city/de facto capital. Geography prompt now asks precisely for that role.
- [Getty: Mesopotamia](https://www.getty.edu/art/exhibitions/mesopotamia/explore.html): pictographs around 3400 BCE evolved into later wedge-shaped cuneiform. Daily Six no longer collapses these stages or requires an absolute priority claim over Egyptian writing.
- [British Museum hieroglyph exhibition guide](https://www.britishmuseum.org/sites/default/files/2022-10/Hieroglyphs_unlocking_ancient_Egypt_large_print_guide_The_British_Museum.pdf): Rosetta Stone's hieroglyphic, Demotic and Greek scripts; explanation avoids suggesting that Greek comparison alone explains decipherment.
- [Linux Kernel Organization](https://www.kernel.org/linux.html): Linux question now asks for an operating-system kernel.
- [Tate: chiaroscuro](https://www.tate.org.uk/art/art-terms/c/chiaroscuro): light/shade in painting; the old architectural description removed. Search returned Tate content via its indexed mirror; the canonical link is given here for review.
- [Stanford Encyclopedia: Stoicism](https://plato.stanford.edu/archives/spr2023/entries/stoicism/): preferred indifferents have selective value, distinct from moral goodness.
- [Stanford Encyclopedia: innateness](https://plato.stanford.edu/entries/innateness-history/): Meno's paradox concerns inquiry; revised alternatives retain this distinction.
- [OpenStax University Physics III](https://assets.openstax.org/oscms-prodcms/media/documents/UniversityPhysicsVolume3-WEB.pdf): refraction and wave-speed relations support physics content review.
- [Astana city administration](https://www.gov.kz/org/astana/?lang=en): capital transfer in 1997 checked while reviewing the retained Astana item.

## Behavior implemented

Shared, framework-free `assets/quiz/quiz.js` and `quiz.css` replace duplicated quiz controllers. The surrounding headers, page content, imagery, footer, Supabase script tags and homepage sections remain in place. Daily Six stays six questions within its existing homepage card.

Answering: editable choices, Previous/Next, numbered navigator (current/answered/unanswered textual accessibility labels), review flags, answered/unanswered counts. No solutions are displayed until submission. A navigation-away warning protects active answers; no new persistent browser storage or backend records were introduced. This is a warning, not crash recovery; browsers control when unload warnings appear.

Submission: separate review/submit action, visible unanswered count, jump to first unanswered, cancel/edit control, explicit final confirmation, unanswered-score warning, and double-submission guard.

Results: score, accuracy, correct, incorrect answered, unanswered, and per-difficulty correct/total. Review shows all question choices, selected answer, correct answer, explanation, and textual correctness indicators. Review answers are disabled. Users can return to the summary and confirm a restart.

Accessibility: native keyboard-operable buttons, visible focus, managed question-heading focus, selection state via aria-pressed, current step, status announcements, wrapping choices/actions, mobile styles and reduced-motion support. No custom keyboard trap or autoplay animation.

## Files

Modified: `index.html`, `ancient-civilizations.html`, `countries-capitals.html`, `physics-fundamentals.html`, `ancient-philosophy.html`, `art-history.html`, `computer-fundamentals.html`, `validate-curio.js`, `test-quiz-dom.cjs`.

Created: `assets/quiz/quiz.js`, `assets/quiz/quiz.css`, `QUIZ-QUESTION-AUDIT.json`, this report, recoverable checkpoint files.

## Validation and limits

- `node validate-curio.js`: PASS. Includes data integrity, 5/5/5, position balance, links/syntax, and 56 complete JSDOM runs (all seven quizzes, four outcome patterns, both motion settings).
- Tests cover edits, saved selections across navigation, jumps, flags, unload warning, cancelled/confirmed restart, cancelled/confirmed submission, incomplete quizzes, first-unanswered return, duplicate submission, score/accuracy, difficulty breakdowns, locked review, explanations, and results return.
- `test-auth.cjs`: PASS. Existing mocked Supabase handlers and HTML contracts unaffected.
- `test-recovery-sdk.cjs`: PASS with real installed SDK and mocked HTTP. No real accounts/emails/passwords changed.
- `test-server.cjs`: PASS outside sandbox. Initial `npm test` reached this test but localhost connection was denied (EACCES); the isolated rerun passed. Existing package test command also runs the DOM suite twice because the validator now invokes it.
- Browser attempts at local Physics page failed: connection refused, then connection timed out despite local server running. No browser visual, mobile viewport, real keyboard, or screen-reader testing is claimed. JSDOM does not render layout or synthesize native keyboard activation.
- Difficulty remains a subject-relative editorial estimate. Learner trials and item statistics are needed to establish empirical calibration, especially for geography comparisons and specialist terminology.
- Legacy fallback quiz markup remains in HTML and is replaced on shared-engine initialization. Without JavaScript the quizzes are not operational; this matches the existing JS requirement.
- No new progress persistence: reloads discard state after the browser warning is accepted. No existing quiz persistence was found.

## Final interaction correction — supersedes earlier editable-answer behavior

Active quizzes are now sequential: one answer locks immediately, reveals correctness and explanation, and enables Next Question (See results on the last question). No active Previous, navigator, skipping, editing or submission confirmation. Results retain counts, accuracy, difficulty breakdown and read-only review with Previous/Next and jumping. All 96 question datasets remain unchanged by this correction.

Modified in this correction: assets/quiz/quiz.js, test-quiz-dom.cjs, this report. Full npm test passed outside sandbox (initial sandbox localhost EACCES). Tests cover 21 complete runs across all seven quizzes, answer locks, stale clicks, sequential progression, scoring, review and restart; suite invokes these twice.

Browser access now succeeds against the server started outside the sandbox in the preceding server task. Completed Physics in-browser: 5/15, 33%, 5 correct/10 incorrect/0 unanswered; verified immediate disabled choices and explanation, sequential completion, and read-only review navigator. Earlier connection failures are not treated as test passes. No mobile viewport or physical keyboard test performed in this correction. Supabase tests remain mocked; no real user data changed.
