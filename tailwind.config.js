/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      height: {
        "screen-navbar-player": "calc(100vh - 6rem)",
      },
      animation: {
        "spin-slow": "spin 20s linear infinite", 
        "spin-fast": "spin 0.5s linear infinite", 
      },
    },
  },
  plugins: [],
};
