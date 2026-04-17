/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'night': '#120730',
        'deep-purple': '#1e0f55',
        'mid-purple': '#2d1b6b',
        'light-purple': '#4a3290',
        'lavender': '#dde4f5',
        'light-lavender': '#eef1fb',
        'sky-light': '#d8e8f5',
        'sky-pale': '#e8f2fb',
        'gold': '#c9a84c',
        'gold-light': '#e8d08c',
      },
      fontFamily: {
        sans: ['"Noto Sans JP"', 'sans-serif'],
        serif: ['"Noto Serif JP"', 'serif'],
        en: ['"Cormorant Garamond"', '"Playfair Display"', 'serif'],
      },
      backgroundImage: {
        'hero-gradient': 'linear-gradient(160deg, #120730 0%, #1e0f55 40%, #2d1b6b 70%, #3d2a8a 100%)',
        'purple-gradient': 'linear-gradient(135deg, #1e0f55 0%, #2d1b6b 50%, #4a3290 100%)',
        'section-gradient': 'linear-gradient(180deg, #dde4f5 0%, #e8edf8 100%)',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'twinkle': 'twinkle 3s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        twinkle: {
          '0%, 100%': { opacity: 1 },
          '50%': { opacity: 0.3 },
        },
      },
    },
  },
  plugins: [],
}
