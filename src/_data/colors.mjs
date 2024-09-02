import Color from "colorjs.io";

/**
 * @param lightness {number}
 * @param chroma {number}
 * @param hue {number}
 * @param alpha {number}
 * @returns {string}
 */
function oklch(lightness, chroma, hue, alpha = 100) {
  const l = lightness / 100;
  const c = (chroma / 100) * 0.4;
  const h = hue;
  const a = alpha / 100;
  const color = new Color("oklch", [l, c, h]);
  color.alpha = a;
  return color.to("srgb").toString({ format: "hex" });
}

const colors = {
  "color-header-text": oklch(40, 40, 170),
  "color-header-background": oklch(95, 30, 170),
  "color-header-border": oklch(96, 30, 170),

  "color-nav-text": oklch(40, 40, 170),
  "color-nav-background": oklch(98, 30, 170),
  "color-nav-border": oklch(97, 30, 170),
  "color-nav-shadow": oklch(88, 10, 40),

  "color-main-accent": oklch(50, 50, 250),
  "color-main-background1": oklch(99.5, 20, 40),
  "color-main-background2": oklch(97, 20, 40),
  "color-main-background3": oklch(96, 20, 40),
  "color-main-text": oklch(40, 60, 40),
  "color-main-text-bright": oklch(35, 60, 40),
  "color-main-code": oklch(50, 100, 340),
  "color-main-shadow": oklch(88, 10, 40),

  "color-syntax-default": oklch(20, 30, 40),
  "color-syntax-comment": oklch(52, 0, 170),
  "color-syntax-keyword": oklch(52, 100, 170),
  "color-syntax-property": oklch(52, 60, 340),
  "color-syntax-string": oklch(52, 100, 250),
  "color-syntax-punctuation": oklch(52, 30, 40),

  "color-easter-egg-shadow": oklch(88, 10, 40),
  "color-easter-egg-highlight": oklch(100, 0, 0, 50),
};

export default colors;
