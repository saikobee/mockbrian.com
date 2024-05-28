const Color = require("colorjs.io").default;

function oklch(lightness, chroma, hue, alpha = 100) {
  const l = lightness / 100;
  const c = (chroma / 100) * 0.4;
  const h = hue;
  const a = alpha / 100;
  const color = new Color("oklch", [l, c, h]);
  color.alpha = a;
  return color.to("srgb").toString({ format: "hex" });
}

module.exports = {
  light: {
    "color-root-fg": oklch(100, 0, 0),
    "color-root-bg1": oklch(44, 30, 160),
    "color-root-bg2": oklch(40, 30, 160),
    "color-root-bg2x": oklch(74, 30, 160, 20),
    "color-root-bg3": oklch(36, 30, 160),

    "color-main-accent-background1": oklch(54, 50, 290),
    "color-main-accent-background2": oklch(48, 50, 290),
    "color-main-accent-border1": oklch(40, 50, 290),
    "color-main-accent-text1": oklch(100, 0, 0),
    "color-main-background1": oklch(100, 0, 0),
    "color-main-background2": oklch(98, 0, 0),
    "color-main-background3": oklch(96, 0, 0),
    "color-main-background4": oklch(93, 0, 0),
    "color-main-border1": oklch(60, 0, 0),
    "color-main-border2": oklch(80, 0, 0),
    "color-main-border3": oklch(90, 0, 0),
    "color-main-shadow1": oklch(15, 0, 0, 10),
    "color-main-text1": oklch(0, 0, 0),
    "color-main-text2": oklch(30, 0, 0),

    "color-syntax-comment": oklch(53, 80, 140),
    "color-syntax-keyword": oklch(53, 80, 210),
    "color-syntax-property": oklch(53, 80, 310),
    "color-syntax-string": oklch(53, 80, 0),
    "color-syntax-punctuation": oklch(50, 0, 0),
  },
  dark: {
    "color-main-accent-background1": oklch(80, 40, 290),
    "color-main-accent-background2": oklch(76, 40, 290),
    "color-main-accent-border1": oklch(90, 40, 290),
    "color-main-accent-text1": oklch(0, 0, 0),
    "color-main-background1": oklch(29, 0, 0),
    "color-main-background2": oklch(26, 0, 0),
    "color-main-background3": oklch(22, 0, 0),
    "color-main-background4": oklch(20, 0, 0),
    "color-main-border1": oklch(60, 0, 0),
    "color-main-border2": oklch(50, 0, 0),
    "color-main-border3": oklch(40, 0, 0),
    "color-main-shadow1": oklch(10, 0, 0, 10),
    "color-main-text1": oklch(100, 0, 0),
    "color-main-text2": oklch(85, 0, 0),

    "color-syntax-comment": oklch(80, 40, 140),
    "color-syntax-keyword": oklch(80, 40, 210),
    "color-syntax-property": oklch(80, 40, 310),
    "color-syntax-string": oklch(80, 40, 40),
    "color-syntax-punctuation": oklch(70, 0, 0),
  },
};
