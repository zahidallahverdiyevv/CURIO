# Quiz editing and review

CURIO has 48 topic quizzes. The editable sources for 42 quizzes are in `content/quizzes/`; the six original quizzes and Daily Six are defined in their HTML pages.

## Edit content

Update the relevant category file, then regenerate the quiz pages and run checks:

```sh
npm run build:quizzes
npm test
```

Each topic contains 15 questions, divided evenly between Easy, Medium and Hard. Review the generated HTML diff before committing.

## Prepare a review copy

```sh
npm run review:quizzes
```

This generates category answer keys, a combined review file and an answer-cue report in this directory. Generated review files and ZIP archives are excluded from Git. The exporter currently uses the filename label `2026-11-18-v3`; the contents come from the current sources.

## Review criteria

- Check facts and explanations against reliable sources.
- Make sure the question has one defensible answer.
- Use plausible distractors with comparable length and grammatical structure.
- Avoid wording that reveals the answer, including repeated phrases and unmatched absolute claims.
- Match the difficulty label to the knowledge or reasoning required.
- Check for repeated questions and clues supplied by other questions.

Automated checks validate structure and behavior; factual accuracy requires editorial review. Report corrections using the quiz slug and question number, with a supporting source. Answer letters may change when options are reordered.

See [quiz references](sources.md) for the sources used in targeted fact checks.
