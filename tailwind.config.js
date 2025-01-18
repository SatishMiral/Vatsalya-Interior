/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      animation: {
        'spin-slow': 'spin 20s linear infinite',
        "spin-slow": "spin 4s linear infinite",
        bounce: "bounce 2s infinite",
      },
      backgroundImage: {
        'custom-image': "url('../Assets/IMG_2140.JPG')",
      },
      fontFamily: {
        'playfair': ['"Playfair Display"', 'serif'],
        'sans': ['Inter', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        'elegant': '0.075em',
      }
    },
  },
  plugins: [],
};