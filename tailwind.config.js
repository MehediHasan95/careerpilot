/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  daisyui: {
    themes: false,
  },
  theme: {
    extend: {
      colors: {
        customBlue: "#818DFE",
        customPurple: "#9676FF",
      },
    },
  },
  plugins: [require("daisyui")],
};
