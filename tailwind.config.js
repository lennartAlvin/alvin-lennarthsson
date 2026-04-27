/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: [
          'Plus Jakarta Sans',
          'ui-sans-serif',
          'system-ui',
          'Segoe UI',
          'Roboto',
          'Helvetica Neue',
          'Arial',
          'sans-serif',
        ],
      },
      colors: {
        canvas: '#f1f4f8',
        surface: '#ffffff',
        raised: '#f8fafc',
        line: '#e2e8f0',
        ink: '#0f172a',
        'ink-muted': '#475569',
        accent: {
          DEFAULT: '#0f766e',
          hover: '#0d9488',
          soft: 'rgba(15, 118, 110, 0.08)',
        },
      },
      boxShadow: {
        card: '0 1px 2px rgba(15, 23, 42, 0.06), 0 8px 24px -4px rgba(15, 23, 42, 0.08)',
        'card-hover':
          '0 4px 6px rgba(15, 23, 42, 0.05), 0 16px 40px -8px rgba(15, 118, 110, 0.12)',
      },
      keyframes: {
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(0.75rem)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
      animation: {
        'fade-up': 'fade-up 0.65s cubic-bezier(0.22, 1, 0.36, 1) forwards',
        'fade-in': 'fade-in 0.5s ease-out forwards',
      },
      transitionDuration: {
        250: '250ms',
      },
    },
  },
  plugins: [],
};
