/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        'gray-light': "var(--gray-light)",
        'gray-deep': "var(--gray-dark)",
        'gray-white': "var(--gray-white)",
        'lime': "var(--lime)",
      },
      keyframes: {
        "bounce-slow": {
          "0%, 100%": {
            transform: "translateY(10px)",
          },
          "50%": {
            transform: "translateY(-60px)",
          },
        },
        "left-to-right-scroll":{
          "100%": {
            backgroundPosition: "-100% 0"
          }
        }
      },
      animation: {
        "spin-slow": "spin 22s linear infinite",
        "bounce-slow": "bounce-slow 7s linear infinite",
        "left-to-right-scroll": "left-to-right-scroll 30s linear infinite"
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        light: {
          "primary": "#6eb356",
          "secondary": "#ff7c08",
          "accent": "#077765",
          "neutral": "#2b3440",
          "base-100": "#ffffff",
          "info": "#38bdf8",
          "success": "#22c55e",
          "warning": "#ffc107",
          "error": "#ff0406",
          '--gray-light': '#9b9bb4',
          "--gray-deep": "#5d6374",
          "--gray-white": "#f8fafc",
          "--lime": "#eef6eb",
        },
        dark:{
          "primary": "#6eb356",
          "secondary": "#ff7c08",
          "accent": "#07a",
          "neutral": "#233",
          "base-100": "#151F32",
          "info": "#38bdf8",
          "success": "#22c55e",
          "warning": "#ffc107",
          "error": "#ff0406",

          '--gray-light': '#9b9bb4',
          "--gray-deep": "#5d6374",
          "--gray-white": "#f8fafc",
          "--lime": "#eef6eb",
        }
      },
    ],
  },
};
