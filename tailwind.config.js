/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#1a4d3d',
        'primary-dark': '#0d2a25',
        'primary-light': '#7a9d7f',
        'primary-accent': '#a8c4b8',
        secondary: '#6b9076',
        'secondary-dark': '#4a6657',
        'accent-gold': '#c8a87a',
        'accent-purple': '#9b8b7a',
        teal: '#1a4d3d',
        'teal-light': '#c8b8a3',
      },
      fontFamily: {
        jakarta: ['"Plus Jakarta Sans"', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
        syne: ['Outfit', '"Plus Jakarta Sans"', 'sans-serif'],
        outfit: ['Outfit', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
        poppins: ['Poppins', 'sans-serif'],
        playfair: ['"Playfair Display"', 'serif'],
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'float-alt': 'floatAlt 5s ease-in-out infinite',
        'float-rotate': 'floatRotate 6s ease-in-out infinite',
        'blob': 'blobAnim 8s ease-in-out infinite',
        'marquee': 'marquee 30s linear infinite',
        'fadeInUp': 'fadeInUp 0.6s ease-out',
        'fadeInDown': 'fadeInDown 0.6s ease-out',
        'fadeInLeft': 'fadeInLeft 0.6s ease-out',
        'fadeInRight': 'fadeInRight 0.6s ease-out',
        'scaleIn': 'scaleIn 0.5s cubic-bezier(0.34, 1.56, 0.64, 1)',
        'slideInLeft': 'slideInLeft 0.7s cubic-bezier(0.34, 1.56, 0.64, 1)',
        'slideInRight': 'slideInRight 0.7s cubic-bezier(0.34, 1.56, 0.64, 1)',
        'pulse-glow': 'glowPulse 2.5s ease-in-out infinite',
        'tilt': 'tilt 4s ease-in-out infinite',
        'shimmer': 'shimmer 2s infinite',
        'zoom': 'zoomIn 0.6s cubic-bezier(0.34, 1.56, 0.64, 1)',
        'slideDown': 'slideDown 0.4s ease-out',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        floatAlt: {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '50%': { transform: 'translateY(-25px) rotate(2deg)' },
        },
        floatRotate: {
          '0%, 100%': { transform: 'translateY(0px) rotateX(0deg) rotateY(0deg)' },
          '50%': { transform: 'translateY(-15px) rotateX(5deg) rotateY(5deg)' },
        },
        blobAnim: {
          '0%,100%': { borderRadius: '60% 40% 30% 70% / 60% 30% 70% 40%' },
          '50%': { borderRadius: '30% 60% 70% 40% / 50% 60% 30% 60%' },
        },
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        fadeInUp: {
          'from': { opacity: '0', transform: 'translateY(40px)' },
          'to': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeInDown: {
          'from': { opacity: '0', transform: 'translateY(-40px)' },
          'to': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeInLeft: {
          'from': { opacity: '0', transform: 'translateX(-40px)' },
          'to': { opacity: '1', transform: 'translateX(0)' },
        },
        fadeInRight: {
          'from': { opacity: '0', transform: 'translateX(40px)' },
          'to': { opacity: '1', transform: 'translateX(0)' },
        },
        scaleIn: {
          'from': { opacity: '0', transform: 'scale(0.9)' },
          'to': { opacity: '1', transform: 'scale(1)' },
        },
        slideInLeft: {
          'from': { transform: 'translateX(-100%)' },
          'to': { transform: 'translateX(0)' },
        },
        slideInRight: {
          'from': { transform: 'translateX(100%)' },
          'to': { transform: 'translateX(0)' },
        },
        glowPulse: {
          '0%, 100%': { boxShadow: '0 0 20px rgba(49,121,120,0.3), 0 4px 20px rgba(49,121,120,0.2)' },
          '50%': { boxShadow: '0 0 40px rgba(49,121,120,0.5), 0 4px 24px rgba(49,121,120,0.3)' },
        },
        dotPulse: {
          '0%, 100%': { transform: 'scale(1)', opacity: '1' },
          '50%': { transform: 'scale(1.3)', opacity: '0.7' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-1000px 0' },
          '100%': { backgroundPosition: '1000px 0' },
        },
        tilt: {
          '0%, 100%': { transform: 'rotateX(0deg) rotateY(0deg)' },
          '25%': { transform: 'rotateX(-2deg) rotateY(2deg)' },
          '50%': { transform: 'rotateX(0deg) rotateY(0deg)' },
          '75%': { transform: 'rotateX(2deg) rotateY(-2deg)' },
        },
        zoomIn: {
          'from': { transform: 'scale(0.8) rotateZ(-5deg)', opacity: '0' },
          'to': { transform: 'scale(1) rotateZ(0)', opacity: '1' },
        },
        slideDown: {
          'from': { transform: 'translateY(-20px)', opacity: '0' },
          'to': { transform: 'translateY(0)', opacity: '1' },
        },
      },
      backdropFilter: {
        'none': 'none',
        'blur': 'blur(24px)',
        'blur-lg': 'blur(40px)',
      },
      boxShadow: {
        'glow-sm': '0 0 8px rgba(49,121,120,0.2)',
        'glow-md': '0 0 16px rgba(49,121,120,0.3)',
        'glow-lg': '0 0 32px rgba(49,121,120,0.4)',
      },
      perspective: {
        '1000': '1000px',
        '1200': '1200px',
      },
    },
  },
  plugins: [],
}
