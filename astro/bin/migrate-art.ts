import { readdir, mkdir, writeFile } from "node:fs/promises";
import { join } from "node:path";

const artTitles = {
  "2019-09-28-king-slime-big.webp": "King Slime",
  "2020-01-23-human-and-cat.webp": "Human & Cat",
  "2020-02-02-slimeagotchi.webp": "Slime-a-Gotchi",
  "2020-04-07-self-portrait-cat-mouth.webp": "Self portrait",
  "2020-04-10-hiyoko.webp": "Hiyoko",
  "2020-06-07-tangy.webp": "Tangy",
  "2020-06-13-creacher.webp": "Creacher",
  "2020-06-13-slime-love.webp": "Slime love",
  "2020-06-14-teeny-sanguini.webp": "Teeny Sanguini",
  "2020-06-16-cruelcumber.webp": "Cruelcumber",
  "2020-09-11-self-portrait-shirt.webp": "Self portrait",
  "2020-09-21-hifumi-new-game.webp": "Hifumi (New Game)",
  "2020-12-22-mint-leaf.webp": "Mint leaf",
  "2021-01-17-scrub-jay-2bit.webp": "Scrub jay (2-bit)",
  "2021-01-29-flamingo-2bit.webp": "Flamingo (2-bit)",
  "2021-01-31-robin-2bit.webp": "Robin (2-bit)",
  "2021-02-09-mad-jigglypuff.webp": "Jigglypuff",
  "2021-02-10-self-portrait-small.webp": "Self portrait",
  "2021-02-15-black-oystercatcher-2bit.webp": "Black oystercatcher (2-bit)",
  "2021-02-21-barn-owl-2bit.webp": "Barn owl (2-bit)",
  "2021-02-26-raichu.webp": "Raichu",
  "2021-03-11-happy-tooth.webp": "Happy tooth",
  "2021-03-15-american-dipper-2bit.webp": "American dipper (2-bit)",
  "2021-03-29-american-goldfinch-2bit.webp": "American goldfinch (2-bit)",
  "2021-03-30-hummingbird-2bit.webp": "Hummingbird (2-bit)",
  "2021-04-08-hunter-smile.webp": "Hunter smile",
  "2021-04-26-self-portrait-refined.webp": "Self portrait",
  "2021-09-04-ghost.webp": "Ghost",
  "2021-12-26-self-portrait.webp": "Self portrait",
  "2022-05-18-purple-sharks.webp": "Purple sharks",
  "2022-09-26-self-portrait.webp": "Self portrait",
  "2023-02-15-sneki-snek.webp": "Sneki snek",
  "2023-02-15-tower-slime.webp": "Tower slime",
  "2023-05-08-cacodemon.webp": "Cacodemon",
  "2023-07-12-quac.webp": "Quac",
  "2024-04-02-orc-awooga.webp": "Orc awooga",
  "2024-05-20-bassman.webp": "Bassman",
  "2024-06-28-elephant.webp": "Elephant",
};

const map = new Map<string, string>(Object.entries(artTitles));

process.chdir("src/content/art");

for (const f of await readdir(".")) {
  for (const [, pubDate = "", name = "", ext = ""] of match(
    f,
    /^(\d+-\d+-\d+)-(.*)(\..+)/,
  )) {
    const title = map.get(f);
    if (!title) {
      throw new Error(`no title for ${f}`);
    }
    console.log(pubDate, name, title);
    await mkdir(name, { recursive: true });
    const data = {
      title,
      pubDate,
      image,
    };
    const json = JSON.stringify(data, null, 2);
    const dataFilename = join(name, "index.json");
    await writeFile(dataFilename, json, "utf-8");
  }
}

function* match(text: string, regexp: RegExp): Generator<RegExpMatchArray> {
  const match = text.match(regexp);
  if (match) {
    yield match;
  }
}
