/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        flax: "#EDD382",
        "eerie-black": "#191919",
        "bitter-sweet": "#E87461",
        "blue-neon": "#275DAD",
        "alice-blue": "#EBF2FA",
        "blue-triqui": "#635994",
        "red-triqui": "#f92f60",
        "red-calculator": "#DB162F",
        "violet-calculator": "#383961",
				'blue-ruu': '#1E222F',
				'green-ruu': '#4AA163',
      },
      fontFamily: {
        Inconsolata: "'Inconsolata Variable', sans-serif",
        Onest: "'Onest Variable', sans-serif",
        Kanit: "'Kanit', sans-serif",
      },
      dropShadow: {
        "text-neon": "0 0 3px currentColor",
      },
    },
  },
  plugins: [],
};
