import type { Config } from "tailwindcss";

const config: Config = {
    darkMode: ["class"],
    content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
  	extend: {
  		colors: {
  			background: 'var(--background)',
  			onBackground: 'var(--on-background)'
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		},
		inset: {
			'0/0/auto': '0% 0% auto'
		},
		boxShadow: {
			'nav': '0 2px 25px 2px #ffffff',
			'custom-dark': '0 10px 25px rgba(0, 0, 0, 0.15)',
		  },
  	}
  },
  plugins: [require("tailwindcss-animate")],
};
export default config;
