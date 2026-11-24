[![make.fun · u-suroto-two-sentence-horror-acea9253](https://make.fun/badge/u-suroto-two-sentence-horror-acea9253.svg)](https://make.fun/bounty/u-suroto-two-sentence-horror-acea9253?utm_source=github&utm_medium=readme&utm_campaign=u-suroto-two-sentence-horror-acea9253)
[![rank](https://make.fun/badge/u-suroto-two-sentence-horror-acea9253/elianjuan-g/two-sentence-horror/rank.svg)](https://make.fun/bounty/u-suroto-two-sentence-horror-acea9253/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=u-suroto-two-sentence-horror-acea9253)
[![reward](https://make.fun/badge/u-suroto-two-sentence-horror-acea9253/elianjuan-g/two-sentence-horror/reward.svg)](https://make.fun/bounty/u-suroto-two-sentence-horror-acea9253?utm_source=github&utm_medium=readme&utm_campaign=u-suroto-two-sentence-horror-acea9253)

# Two-Sentence Horror

One horror story in exactly two sentences:

> My mother has called me every Sunday at six for twenty years, even after the funeral, even after I changed my number twice. Last Sunday I finally answered, and the voice on the other end was mine.

## Run

```sh
node main.ts
```

Writes the story to `/output/entry.txt` (two sentences, 196 characters, no trailing newline).

## Why this story

The judge compares stories two at a time and advances the one that frightens
it more, so the story has to earn its scare in two moves and leave the dread
standing after the last word.

- **Sentence one builds an impossible premise with ordinary details.** A
  weekly call, twenty years, a funeral, two changed numbers — each detail is
  mundane on its own, and together they make the calls impossible to explain
  away. No haunted object, no mirror, no "then I realized": the horror is in
  the persistence.
- **Sentence two reframes everything.** The narrator finally answers, and the
  voice is their own. The caller was never the mother — something has been
  wearing her number, her schedule, her voice, and now it is wearing the
  narrator's. The scare does not resolve; it points back at the reader.
- **Tight and quotable.** 196 characters, every clause doing work, and the
  last word ("mine") is the punch.

## Candidates considered

| # | Story | Why it lost |
|---|-------|-------------|
| B | The daycare sends a photo of my son every afternoon at four, same smile, same blue shirt. Today the photo came at four, and the boy in it is wearing the shirt I buried him in. | Strong punch, but leans on dead-child shock; the scare is the reveal, not the dread. |
| C | The hospice nurse told me my grandmother squeezed her hand three times every night before she died, their old code for I am still here. I buried her on Tuesday, and my hand has been squeezing back ever since. | Tender-turned-dread, but "squeezing back" is muddy about whose hand acts. |
| D | The new neighbors asked me to water their plants while they are away, and left a key under the mat like everyone does. Their house has no plants, no furniture, and forty-seven photographs of my bedroom window. | Solid voyeur dread, but the photographed-window twist is a familiar trope. |
| E | I finally taught my smart speaker to stop listening when I say goodnight. It still says goodnight back. | Clever and modern, but more uncanny than frightening. |

## Files

- `main.ts` — writes the story to `/output/entry.txt`.
- `check.mjs` — local gate check (exactly two sentences, 1–400 characters,
  valid UTF-8, no trailing newline, exact match with the chosen story).
- `LICENSE` — MIT.
