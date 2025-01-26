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
        'sm' : "600px",
        "2sm" : "700px",
        "md" : "768px",
        "1/2md" : "900px",
        "1md" : "1050px",
        'lg': "1200px",
        
      }
    },
  },
  plugins: [],
} satisfies Config;
