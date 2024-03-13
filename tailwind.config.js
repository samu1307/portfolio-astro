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
      },
      fontFamily: {
        Inconsolata: "Inconsolata",
        kanit: "Kanit",
      },
      dropShadow: {
        "text-neon": "0 0 3px currentColor",
      },
    },
  },
  plugins: [],
};
