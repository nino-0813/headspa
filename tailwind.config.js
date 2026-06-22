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
        'night': '#162d21',
        'deep-purple': '#1f3d2d',
        'mid-purple': '#29503a',
        'light-purple': '#3f7a55',
        'lavender': '#e9f1ec',
        'light-lavender': '#f6faf7',
        'sky-light': '#e3efe6',
        'sky-pale': '#f6faf7',
        'gold': '#94a257',
        'gold-light': '#b3c074',
      },
      fontFamily: {
        sans: ['"Noto Sans JP"', 'sans-serif'],
        serif: ['"Noto Serif JP"', 'serif'],
        en: ['"Cormorant Garamond"', '"Playfair Display"', 'serif'],
      },
      backgroundImage: {
        'hero-gradient': 'linear-gradient(160deg, #162d21 0%, #1f3d2d 40%, #29503a 70%, #336447 100%)',
        'purple-gradient': 'linear-gradient(135deg, #1f3d2d 0%, #29503a 50%, #3f7a55 100%)',
        'section-gradient': 'linear-gradient(180deg, #e9f1ec 0%, #eef4f0 100%)',
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
