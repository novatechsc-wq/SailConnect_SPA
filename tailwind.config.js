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
          main: '#2F6FAF',
          light: '#6FD3DA',
          dark: '#1E3A6D',
        },
        secondary: {
          main: '#3F8FC7',
          light: '#6FD3DA',
        },
      },
      fontFamily: {
        sans: ['Poppins', 'system-ui', '-apple-system', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.7s ease-out forwards',
        'slide-up': 'slideUp 0.65s cubic-bezier(0.22, 1, 0.36, 1) forwards',
        'slide-up-sm': 'slideUpSm 0.55s cubic-bezier(0.22, 1, 0.36, 1) forwards',
        'slide-up-hero': 'slideUpHero 0.55s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'shimmer-border': 'shimmerBorder 4s ease-in-out infinite',
        'float-soft': 'floatSoft 7s ease-in-out infinite',
        'hero-snap': 'heroSnap 0.6s cubic-bezier(0.22, 1, 0.36, 1) forwards',
        'scroll-nudge': 'scrollNudge 2.2s ease-in-out infinite',
        'feature-reveal': 'featureReveal 0.7s cubic-bezier(0.22, 1, 0.36, 1) forwards',
        'feature-reveal-delayed': 'featureRevealDelayed 0.75s cubic-bezier(0.22, 1, 0.36, 1) 0.12s forwards',
        'feature-image-in': 'featureImageIn 1.15s cubic-bezier(0.22, 1, 0.36, 1) forwards',
        'feature-shine': 'featureShine 3.5s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(28px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideUpHero: {
          '0%': { transform: 'translateY(36px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideUpSm: {
          '0%': { transform: 'translateY(16px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        heroSnap: {
          '0%': { opacity: '0.18' },
          '100%': { opacity: '0' },
        },
        scrollNudge: {
          '0%, 100%': { transform: 'translateY(0)', opacity: '0.85' },
          '50%': { transform: 'translateY(10px)', opacity: '1' },
        },
        shimmerBorder: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        floatSoft: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        featureReveal: {
          '0%': { opacity: '0', transform: 'translateY(18px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        featureRevealDelayed: {
          '0%': { opacity: '0', transform: 'translateY(14px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        featureImageIn: {
          '0%': { transform: 'scale(1.14)' },
          '100%': { transform: 'scale(1.06)' },
        },
        featureShine: {
          '0%': { transform: 'translateX(-100%) skewX(-12deg)', opacity: '0' },
          '20%': { opacity: '0.35' },
          '40%': { transform: 'translateX(200%) skewX(-12deg)', opacity: '0' },
          '100%': { transform: 'translateX(200%) skewX(-12deg)', opacity: '0' },
        },
      },
    },
  },
  plugins: [],
}