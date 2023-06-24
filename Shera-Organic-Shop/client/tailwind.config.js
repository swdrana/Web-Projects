/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {// Replace with your desired primary color value
        g_blue: "#e9efff",
        g_indigo: "#6610f2",
        g_purple: "#6f42c1",
        g_pink: "#ff89c9",
        g_red: "#dc3545",
        g_orange: "#fd7e14",
        g_yellow: "#ffc107",
        g_green: "#198754",
        g_teal: "#20c997",
        g_cyan: "#0dcaf0",
        g_black: "#000",
        g_white: "#fff",
        g_gray: "#64748b",
        g_gray_dark: "#334155",
        g_primary: "#6eb356",
        g_accent: "#077765",
        g_secondary: "#ff7c08",
        g_success: "#22c55e",
        g_info: "#38bdf8",
        g_warning: "#ffc107",
        g_danger: "#ff0406",
        g_light: "#fff",
        g_dark: "#191d28",
        g_dark_light: "#444444",
        g_gray2: "#5d6374",
        g_link_color: "#6eb356",
        g_code_color: "#ff89c9",
        g_highlight_bg: "#fff3cd",
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
      },
      animation: {
        "spin-slow": "spin 22s linear infinite",
        "bounce-slow": "bounce-slow 7s linear infinite",
      },
    },
  },
  plugins: [require("daisyui")],
};
