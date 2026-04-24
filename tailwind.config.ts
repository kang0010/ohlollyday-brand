import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        futura: ['Futura', 'Century Gothic', 'Trebuchet MS', 'sans-serif'],
        pretendard: ['Pretendard', 'Apple SD Gothic Neo', 'sans-serif'],
      },
      colors: {
        brand: {
          black: '#000000',
          white: '#ffffff',
          gray: '#6b6b6b',
          'light-gray': '#f0f0f0',
          border: '#e0e0e0',
          // 오롤리데이 브랜드 컬러
          yellow: '#F5C842',
          coral: '#F26B5B',
          sage: '#7AB5A0',
          cream: '#F5F0E8',
          navy: '#1A2B4A',
        },
      },
      fontSize: {
        'display': ['72px', { lineHeight: '1.0', letterSpacing: '-0.02em' }],
        'section': ['48px', { lineHeight: '1.1', letterSpacing: '-0.01em' }],
        'label': ['11px', { lineHeight: '1.4', letterSpacing: '0.08em' }],
      },
    },
  },
  plugins: [],
}

export default config
