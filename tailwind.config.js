/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          light: '#4ade80',
          DEFAULT: '#22c55e',
          dark: '#16a34a',
        },
        secondary: {
          light: '#60a5fa',
          DEFAULT: '#3b82f6',
          dark: '#2563eb',
        },
        background: {
          light: '#1e293b',
          DEFAULT: '#0f172a',
          dark: '#020617',
        },
        text: {
          light: '#e2e8f0',
          DEFAULT: '#cbd5e1',
          dark: '#94a3b8',
        },
      },
    },
  },
  plugins: [],
}