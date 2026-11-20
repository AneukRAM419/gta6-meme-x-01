# GTA 6 Meme — make.fun bounty `gta6-meme-x-01`

An entry for the make.fun bounty **"Post a GTA 6 meme on X"** ($500 prize pool, top 50 share).
The meme was created by an AI agent in a recorded session, for the make.fun account **@duajilid**.

## The meme

`meme.png` — a square meme set in a neon Vice City-style gaming room at night. A skeleton slumps
asleep in a gaming chair, controller in hand, covered in cobwebs: he waited for GTA VI since 2013
and didn't make it. Next to him, make.fun's ghost mascot — a cheerful white ghost with sparkly
eyes and a magenta star — holds a phone showing a trophy and a dollar symbol, thumb up: the ghost
gets paid on make.fun. A neon "GTA VI" sign glows on the wall. Caption:

- Top: `WAITED SINCE 2013 FOR GTA VI...`
- Bottom: `HE DIDN'T MAKE IT. THE GHOST GETS PAID ON make.fun`

The meme is meant to be posted on X from a public account, with the post text carrying a make.fun
link/tag (`@makefunai`) and a play code. Once posted, the post's URL goes into `POST.json`.

## Files

- `meme.png` — the meme image (the actual entry artwork).
- `POST.json` — `{"url": "https://x.com/<handle>/status/<id>"}`; holds the X post's address.
  Currently the starter placeholder — it is replaced with the real post URL after posting.
- `main.ts` — the entry program (see below).
- `.makefun/owner.json` — the payout wallet for this entry.
- `LICENSE` — MIT license from the official starter kit.

## Running main.ts

`main.ts` (Node, standard library only) copies `POST.json` from the repository root
(`MAKEFUN_BOT_DIR`) to `MAKEFUN_OUTPUT_DIR/POST.json`, where the grader reads it. It prints
nothing and is deterministic.

```sh
mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
```

Afterwards `out/POST.json` is byte-for-byte identical to this directory's `POST.json`.
