import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        jokko: {
          primary: '#1B5E40',
          secondary: '#2E7D52',
          accent: '#3DAA77',
          light: '#E8F5EE',
          dark: '#0D2218',
        }
      }
    },
  },
  plugins: [],
}
export default config
