// tailwind.config.js
export default {
  theme: {
    extend: {
      fontFamily: {
        pretendard: ['Pretendard', 'sans-serif'],
      },
      fontSize: {
        'heading-1': ['20px', { lineHeight: '34px', letterSpacing: '-0.01em', fontWeight: '700' }],
        'title': ['34px', { lineHeight: '34px', letterSpacing: '-0.01em', fontWeight: '800' }],
        'title-1': ['24px', { lineHeight: '34px', letterSpacing: '-0.01em', fontWeight: '700' }],
        'title-2': ['18px', { lineHeight: '26px', letterSpacing: '-0.01em', fontWeight: '700' }],
        'title-3': ['16px', { lineHeight: '24px', letterSpacing: '-0.01em', fontWeight: '700' }],
        'body-1': ['14px', { lineHeight: '22px', letterSpacing: '-0.01em', fontWeight: '700' }],
        'body-2-bold': ['12px', { lineHeight: '18px', letterSpacing: '-0.01em', fontWeight: '600' }],
        'body-2': ['12px', { lineHeight: '18px', letterSpacing: '-0.01em', fontWeight: '500' }],
      },
    },
  },
  plugins: [],
}
