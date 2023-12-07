/** @type {import('tailwindcss').Config} */
const colors = require("./colors.js");
const animations = require("./animations.js");
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      sans: ["Montserrat", "sans-serif"],
      display: ["Oswald", "sans-serif"],
    },
    extend: {
      colors,

      screens: {
        sx: "510px",
      },
    },

    clipPath: {
      1: "ellipse(62% 80% at 100% 100%)",
    },
    animation: {
      "down-anime": "navbaranim .5s",
      rotateLeft: "rotateLeft 2s infinite",
      rotateRight: "rotateRight 2s infinite",
      addtoBasket: "addToBasket .8s ease",
    },

    keyframes: {
      ...animations,
    },
  },
  plugins: [
    function ({ addVariant, addUtilities, matchUtilities, theme }) {
      addVariant("child", "& > div:first-child");
      addVariant("svgchild", "& > svg");
      addVariant("children", "& > div:nth-child(2)");
      addVariant("parent-hover", "&:hover > *");
      addVariant("parent", "& > *");
      addUtilities({
        ".iter-0": {
          animationIterationCount: "0",
        },
        ".rotate-y": {
          transform: "rotateY(145deg)",
        },
      });

      matchUtilities(
        {
          clip: (value) => ({
            clipPath: value,
          }),
          rotatey: (value) => ({
            transform: value,
          }),
        },

        { values: theme("clipPath") }
      );

      matchUtilities(
        {
          customAnim: (value) => ({
            animation: value,
          }),
        },
        { values: theme("clipPath") }
      );
    },
  ],
};
