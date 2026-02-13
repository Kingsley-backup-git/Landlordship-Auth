import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      screens: {
        xs: "380px",
        "1sm": "530px",
        "2sm": "680px",
        sm: "767px",
        md: "900px",
        "1md": "1100px",
        lg: "1380px",
      },
      keyframes: {
        'gentle-pulse': {
          '0%, 100%': { 
            transform: 'scale(1)',
            opacity: '1'
          },
          '50%': { 
            transform: 'scale(1.05)',
            opacity: '0.9'
          },
        },
        'slide-in-bottom-right': {
          '0%': {
            transform: 'translate(10px, 10px)',
            opacity: '0'
          },
          '100%': {
            transform: 'translate(0, 0)',
            opacity: '1'
          },
        },
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        'fade-out': {
          '0%': { opacity: '1' },
          '100%': { opacity: '0' },
        },
      },
      animation: {
        'gentle-pulse': 'gentle-pulse 2s ease-in-out infinite',
        'slide-in': 'slide-in-bottom-right 0.3s ease-out',
        'fade-in': 'fade-in 0.2s ease-in',
        'fade-out': 'fade-out 0.2s ease-out',
      },
    },
  },
  plugins: [],
} satisfies Config;
