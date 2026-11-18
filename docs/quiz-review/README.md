# Quiz review workflow

The 42 authored quizzes contain 630 questions. Their editable sources are in `content/quizzes/`; the six original quizzes and Daily Six remain in their HTML pages.

Generate local review copies from the current sources:

```sh
npm run review:quizzes
```

This exports the six category answer keys, an answer-cue audit and a combined review file into this directory. Export scripts currently use the revision label `2026-11-18-v3`; rerunning them updates the contents from the current source rather than proving a new independent review.

Generated answer packages and ZIP files are Git-ignored. Historical copies were preserved locally during repository cleanup; they are not required to build or test the site. [Targeted references](sources.md) remain tracked.

Reviewer feedback was received for all six categories. Revised questions still require independent re-review. Marked answers are not certification of factual correctness. Report findings using **quiz slug + question number**, with a source and correction where relevant; answer letters can change between revisions.
