import { postcss } from 'tailwindcss';

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
      classes: {
        'aMenu' : "w-full aspect-square shadow-lg lg:aspect-auto bg-alice-blue p-5 rounded-lg lg:w-auto lg:px-2 lg:py-1 lg:shadow-none lg:border lg:border-transparent font-Onest",
        'aMenuHover' : "shadow-[1.5px_1.5px_0] bg-flax border-blue-neon shadow-blue-neon",
        'svgMenu' : "lg:hidden z-20 text-blue-neon size-20 drop-shadow-[0_0_4px_rgba(0,0,0,0.5)]",
        'figureMenu' : "grid place-content-center text-center",
        'figcapMenu' : "font-Onest font-medium",
      }
    },
  },
  plugins: [],
};


