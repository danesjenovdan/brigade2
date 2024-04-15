/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,vue}"],
  theme: {
    extend: {
      colors: {
        yellow: "#f8e96f",
      },
      backgroundImage: {
        search: "url('/src/assets/noun-search-2340783.svg')",
      },
    },
  },
  plugins: [],
};
