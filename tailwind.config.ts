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
      screens : {
        'xs' : "380px",
        '1sm': "530px",
        "2sm" : "680px",
        "sm" : "767px",
        "md" : "900px",
        "1md" : "1100px",
        'lg': "1380px",
        
      }
    },
  },
  plugins: [],
} satisfies Config;
