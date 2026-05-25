import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        cream: '#FDF6EE',
        'cream-dark': '#F5E9D8',
        rose: {
          brand: '#E05780',
          light: '#FF8FAB',
          pale: '#FFF0F5',
          muted: '#F9D0DC',
        },
        terra: '#C47B5A',
        sage: '#7A9E7E',
        warm: {
          dark: '#1C0E0A',
          mid: '#5C3D2E',
          muted: '#8C7B73',
          border: '#EDE0D4',
        },
      },
      fontFamily: {
        display: ['var(--font-cormorant)', 'Georgia', 'serif'],
        body: ['var(--font-jakarta)', 'system-ui', 'sans-serif'],
      },
      animation: {
        float: 'float 6s ease-in-out infinite',
        'float-slow': 'float 9s ease-in-out infinite',
        grain: 'grain 8s steps(10) infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-16px)' },
        },
        grain: {
          '0%, 100%': { transform: 'translate(0, 0)' },
          '10%': { transform: 'translate(-2%, -3%)' },
          '20%': { transform: 'translate(3%, 2%)' },
          '30%': { transform: 'translate(-1%, 4%)' },
          '40%': { transform: 'translate(2%, -1%)' },
          '50%': { transform: 'translate(-3%, 3%)' },
          '60%': { transform: 'translate(1%, -2%)' },
          '70%': { transform: 'translate(-2%, 1%)' },
          '80%': { transform: 'translate(3%, -3%)' },
          '90%': { transform: 'translate(-1%, 2%)' },
        },
      },
    },
  },
  plugins: [],
}

export default config
