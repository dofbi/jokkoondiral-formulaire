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
          primary: '#1A5F7A',
          secondary: '#159895',
          accent: '#57C5B6',
          light: '#F0FDFA',
        }
      }
    },
  },
  plugins: [],
}
export default config
