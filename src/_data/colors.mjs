import Color from "colorjs.io";

/**
 * @param {number} lightness
 * @param {number} chroma
 * @param {number} hue
 * @param {number} alpha
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

export const light = {
  "color-selection": oklch(74, 44, 149, 25),

  "color-header-text": oklch(100, 0, 0),
  "color-header-background": oklch(64, 44, 149),
  "color-header-button": oklch(54, 44, 149),

  "color-footer-text": oklch(30, 0, 0),
  "color-footer-background": oklch(94, 10, 149),

  "color-card-border": oklch(84, 24, 149),
  "color-card-hover": oklch(98, 5, 149),

  "color-main-link": oklch(50, 50, 290),
  "color-main-background": oklch(100, 0, 0),
  "color-main-text": oklch(30, 0, 0),
  "color-main-heading": oklch(44, 24, 149),
  "color-main-code": oklch(52, 100, 340),
  "color-main-decoration": oklch(64, 44, 149),

  "color-syntax-background": oklch(96, 5, 83),
  "color-syntax-text": oklch(20, 0, 30),
  "color-syntax-comment": oklch(55, 50, 290),
  "color-syntax-keyword": oklch(47, 100, 170),
  "color-syntax-property": oklch(52, 100, 340),
  "color-syntax-string": oklch(52, 100, 250),
  "color-syntax-punctuation": oklch(55, 30, 30),

  "color-easter-egg-shadow": oklch(90, 5, 83),
  "color-easter-egg-highlight": oklch(100, 0, 0, 100),
};

export const dark = {
  "color-selection": oklch(69, 44, 149, 25),

  "color-header-text": oklch(100, 0, 0),
  "color-header-background": oklch(59, 44, 149),
  "color-header-button": oklch(49, 44, 149),

  "color-footer-text": oklch(100, 0, 0),
  "color-footer-background": oklch(40, 14, 149),

  "color-card-border": oklch(50, 24, 149),
  "color-card-hover": oklch(34, 14, 149),

  "color-main-link": oklch(80, 100, 290),
  "color-main-background": oklch(30, 7, 149),
  "color-main-text": oklch(90, 7, 149),
  "color-main-heading": oklch(100, 0, 0),
  "color-main-code": oklch(80, 40, 340),
  "color-main-decoration": oklch(59, 44, 149),

  "color-syntax-background": oklch(25, 0, 0),
  "color-syntax-text": oklch(90, 0, 0),
  "color-syntax-comment": oklch(70, 10, 300),
  "color-syntax-keyword": oklch(80, 70, 170),
  "color-syntax-property": oklch(80, 70, 250),
  "color-syntax-string": oklch(80, 50, 340),
  "color-syntax-punctuation": oklch(70, 15, 30),

  "color-easter-egg-shadow": oklch(25, 5, 290),
  "color-easter-egg-highlight": oklch(100, 0, 0, 30),
};
