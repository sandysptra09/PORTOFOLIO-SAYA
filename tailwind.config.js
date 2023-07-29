/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
    'node_modules/flowbite-vue/**/*.{js,jsx,ts,tsx}',
    'node_modules/flowbite/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {},
    colors: {
      yellow: '#facc15',
      red : '#b91c1c',
      green: '#16a34a',
      indigo: '#4f46e5',
      violet: '#2e1065',
      blue: '#60a5fa',
      amber: '#fbbf24',
      slate: '#f8fafc',
      amber: '#fef3c7',
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}