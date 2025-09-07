// tailwind.config.cjs
module.exports = {
  content: [
    './index.html',
    './src-js/**/*.{js,jsx,ts,tsx}', // scan the compiled folder
  ],
  theme: { extend: {} },
  plugins: [],
};