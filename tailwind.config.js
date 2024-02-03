/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ["./*.{html, js}", "./src/**/*.{html, js}"],
  theme: {
    screens: {
      "md": "768px",
      "lg": "992px",
      "xl": "1200px",
      "2xl": "1400px",
    },
    fontFamily: {
      "inter": ["Inter", "sans-serif"],
    },
    colors: {
      "white": "hsl(0, 0%, 100%)", // light theme BG || Dark theme text 
      "blue-200": "rgb(248 249 254)", // light theme Top BG Pattern
      "gray-blue-200": "hsl(227, 47%, 96%)", // light theme Card BG
      "gray-blue-300": "#e8eaf1", // light theme Card BG hover
      "gray-blue-600": "hsl(228, 12%, 44%)", // light theme Text
      "blue-700": "#333a56", // light theme Text || dark theme BG
      "blue-800": "hsl(230, 17%, 14%)", // light theme Text || dark theme BG
      "blue-900": "hsl(232, 19%, 15%)",// dark theme (Top BG Pattern)
      "desaturated-blue-600": "hsl(228, 34%, 66%)", // dark theme text
      "desaturated-blue-800": "hsl(228, 28%, 20%)",// dark theme Card BG
      "green-500": "#1eb589",
      "red-600": "hsl(356, 69%, 56%)",
      "facebook": "hsl(208, 92%, 53%)",
      "twitter": "hsl(203, 89%, 53%)",
      "instagram-from": "hsl(37, 97%, 70%)",
      "instagram-to": "hsl(329, 70%, 58%)",
      "youtube": "hsl(348, 97%, 39%)",
      "light-toggle-from": "hsl(210, 78%, 56%)",
      "light-toggle-to": "hsl(146, 68%, 55%)",
      "dark-toggle": "hsl(230, 22%, 74%)",
    },
    extend: {
      fontSize: {
        "card-heading": "0.875rem",
        "3xl": "1.75rem",
        "6xl": "3.5rem",
      },
      borderRadius: {
        "4xl": "1.5rem",
      },
      letterSpacing: {
        "widest": "0.31rem",
      },
    },
  },
  plugins: [],
}
