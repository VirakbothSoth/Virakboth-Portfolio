/** @type {import('tailwindcss').Config} */
const config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",    // for app dir (Next 13+)
    "./pages/**/*.{js,ts,jsx,tsx}",  // for old pages dir
    "./components/**/*.{js,ts,jsx,tsx}", // if you have components
  ],
  theme: {},
  plugins: [],
};

export default config;
