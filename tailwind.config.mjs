/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#ffeeee',
          100: '#ffcccc',
          200: '#ff9999',
          300: '#ff6666',
          400: '#ff3333',
          500: '#E10600', // Main primary color
          600: '#cc0000',
          700: '#990000',
          800: '#660000',
          900: '#330000',
          950: '#1a0000',
        },
        secondary: {
          50: '#f2f2f2',
          100: '#e6e6e6',
          200: '#cccccc',
          300: '#b3b3b3',
          400: '#999999',
          500: '#808080',
          600: '#666666',
          700: '#4d4d4d',
          800: '#333333',
          900: '#1a1a1a',
          950: '#121212', // Main secondary color
        },
        accent: {
          50: '#e6f5ff',
          100: '#cceaff',
          200: '#99d5ff',
          300: '#66c0ff',
          400: '#33abff',
          500: '#0090FF', // Main accent color
          600: '#0077cc',
          700: '#005999',
          800: '#003c66',
          900: '#001e33',
          950: '#000f19',
        },
        success: {
          500: '#00CC66',
        },
        warning: {
          500: '#FF9900',
        },
        error: {
          500: '#FF3333',
        }
      },
      fontFamily: {
        sans: ['Montserrat', 'ui-sans-serif', 'system-ui'],
        body: ['"Source Sans Pro"', 'ui-sans-serif', 'system-ui'],
      },
      animation: {
        'spin-slow': 'spin 3s linear infinite',
        'pulse-gentle': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      boxShadow: {
        'card': '0 4px 12px rgba(0, 0, 0, 0.08)',
      }
    },
  },
  plugins: [],
}