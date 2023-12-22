module.exports = {
  mode: "jit",
  content: [
    "./src/**/**/*.{js,ts,jsx,tsx,html,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,html,mdx}",
  ],
  darkMode: "class",
  theme: {
    screens: { md: { max: "1050px" }, sm: { max: "550px" } },
    extend: {
      colors: {
        blue_gray: { 100: "#d9d9d9", 800: "#1f4c6b" },
        gray: { 100: "#f6f7f2", 800: "#3a3837", "800_01": "#4c4a4a" },
        light_blue: { 600: "#0d9be0" },
        yellow: { 50: "#fff5eb" },
        black: { 900: "#000000", "900_3f": "#0000003f" },
        orange: { 300: "#ffb957" },
        deep_orange: { 800: "#c94c26" },
        blue: { 100: "#caeaff", "100_00": "#c9ebff00" },
        white: { A700: "#ffffff" },
      },
      fontFamily: {
        inter: "Inter",
        abrilfatface: "Abril Fatface",
        secularone: "Secular One",
        abhayalibreextrabold: "Abhaya Libre ExtraBold",
        caveatbrush: "Caveat Brush",
      },
      backgroundImage: {
        gradient: "linear-gradient(180deg ,#1f4c6b,#c9ebff00)",
        gambar: "url('/images/img_heroimage3')",
      },
      boxShadow: {
        bs1: "0px 0px  5px 1px #000000",
        bs: "0px 4px  4px 0px #0000003f",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
