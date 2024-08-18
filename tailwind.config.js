// tailwind.config.js
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    "./public/index.html",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#2D2C2D',
        'secondary': '#6B777D',
      },
    }
  },
  plugins: [],
};