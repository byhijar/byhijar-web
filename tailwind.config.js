export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          red: 'var(--accent-structural)',
          dark: '#0F0F0F',
        },
        editorial: {
          primary: 'var(--text-primary)',
          secondary: 'var(--text-secondary)',
          body: 'var(--text-body)',
          meta: 'var(--text-meta)',
          bg: 'var(--bg-primary)',
          band: 'var(--bg-secondary)',
        }
      },
      keyframes: {
        cursorBlink: {
          '0%, 49%': { opacity: '1' },
          '50%, 100%': { opacity: '0' },
        }
      },
      animation: {
        cursor: 'cursorBlink 1s infinite',
      }
    },
  },
  plugins: [],
};
