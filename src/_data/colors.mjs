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
  "color-background": oklch(99, 10, 152),
  "color-text": oklch(45, 100, 152),

  "color-syntax-background": oklch(25, 0, 340),
  "color-syntax-text": oklch(90, 0, 340),
  "color-syntax-comment": oklch(70, 15, 290),
  "color-syntax-keyword": oklch(80, 70, 340),
  "color-syntax-property": oklch(80, 70, 250),
  "color-syntax-string": oklch(80, 50, 152),
  "color-syntax-punctuation": oklch(70, 15, 340),
};

export let dark = {
  "color-text": oklch(90, 15, 152),
  "color-background": oklch(40, 15, 152),
};
