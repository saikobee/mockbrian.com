// @ts-check

// https://github.com/microsoft/fluentui-emoji

/**
 * @typedef MenuItem
 * @prop {string} url
 * @prop {string} title
 * @prop {string} image
 */

/** @type {MenuItem[]} */
const menu = [
  {
    url: "/",
    title: "Home",
    image: "/icons/home.webp", // 🏠
  },
  {
    url: "/projects/",
    title: "Projects",
    image: "/icons/projects.webp", // 💻
  },
  {
    url: "/contact/",
    title: "Contact info",
    image: "/icons/contact.webp", // 📬
  },
  {
    url: "/blog/",
    title: "Blog",
    image: "/icons/blog.webp", // ✍️
  },
  {
    url: "/art/",
    title: "Art gallery",
    image: "/icons/art.webp", // 🎨
  },
  {
    url: "/resume/",
    title: "Resume",
    image: "/icons/resume.webp", // 📋
  },
  {
    url: "/about/",
    title: "About this site",
    image: "/icons/about.webp", // ℹ️
  },
  {
    url: "/uses/",
    title: "Things I use",
    image: "/icons/uses.webp", // 🧰
  },
  {
    url: "/links/",
    title: "Cool links",
    image: "/icons/links.webp", // 🔗
  },
  {
    url: "/toybox/",
    title: "Toybox",
    image: "/icons/toybox.webp", // 🧸
  },
  {
    url: "/shrines/",
    title: "Shrines",
    image: "/icons/shrines.webp", // ⛩️
  },
];

export default menu;
