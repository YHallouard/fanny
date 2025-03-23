/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Helvetica Neue', 'Arial', 'sans-serif'],
      },
      colors: {
        'primary': '#2D2D2D',
        'secondary': '#4A4A4A',
        'accent': '#D4D4D4'
      },
      typography: {
        DEFAULT: {
          css: {
            maxWidth: 'none',
            color: '#2D2D2D',
            '--tw-prose-headings': '#2D2D2D',
          }
        }
      }
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}