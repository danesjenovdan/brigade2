/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,vue}"],
  theme: {
    extend: {
      colors: {
        yellow: "#f9e96f",
        orange: "#ea6e33",
      },
      backgroundImage: {
        search: "url('/src/assets/noun-search-2340783.svg')",
      },
    },
  },
  plugins: [],
};
