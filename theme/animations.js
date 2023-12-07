module.exports = {
  rainanimation: {
    "0%": {
      top: "0%",
      opacity: "1",
    },

    "80%": {
      opacity: "0.4",
    },

    "100%": {
      top: "60%",
      transform: "translateY(70vh); opacity: 0",
    },
  },
  bounceLeft: {
    "0%": {
      transform: "translateX(30px) translateY(-50%)",
      opacity: 1,
    },
    "60%": {
      transform: "translateX(-9px) translateY(-50%)",
      opacity: 1,
    },
    "75%": {
      transform: "translateX(0px) translateY(-50%)",
      opacity: 1,
    },
    "90%": {
      transform: "translateX(0px) translateY(-50%)",
      opacity: 1,
    },
    "91%": {
      transform: "translateX(-4px) translateY(-50%)",
      opacity: 1,
    },
    "100%": {
      opacity: 1,
    },
  },

  navbaranim: {
    "0%": {
      transform: "translateY(-80%)",
    },
    "100%": {
      transform: "translateY(0%)",
    },
  },
  animationUp: {
    "0%": {
      opacity: 0,
      transform: "translateY(15rem)",
    },
    "100%": {
      opacity: 1,
      transform: "translateY(0%)",
    },
  },
  rotateRight: {
    "0%": {
      transform: "rotate(0deg)",
      background: "var(--secondary-color)",
    },

    "100%": {
      transform: "rotate(560deg)",
      background: "var(--primary-color)",
    },
  },
  rotateLeft: {
    "0%": {
      background: "var(--primary-color)",
    },
    "100%": {
      transform: "rotate(-260deg)",
      background: "var(--secondary-color)",
    },
  },
  addToBasket: {
    "100%": {
      transform: "translate(105%, -103%) scale(0)",
    },
  },
};
