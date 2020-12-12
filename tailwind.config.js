const colors = require("tailwindcss/colors");

module.exports = {
  theme: {
    colors: {
      transparent: "transparent",
      current: "currentColor",
      black: "#000",
      white: "#fff",
      ...colors,
    },
  },
  plugins: [],
  xwind: {
    mode: "objectstyles",
  },
};
