/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          950: '#070d18',
          900: '#0b1528',
          850: '#0f1c34',
          800: '#142544',
          700: '#1c335a',
          600: '#274474',
        },
        amber: {
          500: '#f59e0b',
          600: '#d97706',
          700: '#b45309',
        },
        brand: {
          primary: '#0b1528',
          secondary: '#142544',
          accent: '#d97706',
          accentHover: '#b45309',
          gold: '#f59e0b',
          light: '#f8fafc',
          dark: '#070d18',
        }
      },
      fontFamily: {
        serif: ['Georgia', 'Cambria', '"Times New Roman"', 'Times', 'serif'],
        sans: ['system-ui', '-apple-system', 'BlinkMacSystemFont', '"Segoe UI"', 'Roboto', 'Helvetica', 'Arial', 'sans-serif'],
      }
    },
  },
  plugins: [],
};
