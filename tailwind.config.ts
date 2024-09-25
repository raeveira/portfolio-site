import type { Config } from 'tailwindcss';

const config: Config = {
	darkMode: ['class'],
	content: [
		'./pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./components/**/*.{js,ts,jsx,tsx,mdx}',
		'./app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		extend: {
			colors: {
				background: 'var(--background)',
				onBackground: 'var(--on-background)',
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)',
			},
			inset: {
				'0/0/auto': '0% 0% auto',
				'auto/0/0': 'auto 0% 0%',
			},
			boxShadow: {
				nav: '0 2px 25px 2px #ffffff',
				'custom-dark': '0 10px 25px rgba(0, 0, 0, 0.15)',
				'hero-shadow':
					'inset 0 0 8px rgba(0, 0, 0, 0.6), 0 0 60px rgba(0, 0, 0, 0.3), 0 30px 120px rgba(0, 0, 0, 0.8)',
				'hero-shadow-window': 'inset 0 0 10px #0000001a, 0 0 12px #0006',
				'window-bar': '0 10px 20px 4px #0003',
				'red': '0 0 20px 2px #f46b5d',
				'yellow': '0 0 20px 2px #f9bd4e',
				'green': '0 0 20px 2px #57c353',
				'window-outline-1920': 'inset 0 0 10px #0000004d, 0 0 60px #0000004d, 0 60px 180px #000',
				'window-main-1920': 'inset 0 0 15px #0000001a, 0 0 20px #0000004d',
			},
			backgroundImage: {
				'hero-radial':
					'radial-gradient(circle closest-corner at 50% 0, #f2f2f226, #0000)',
				'hero-radial-far':
					'radial-gradient(circle farthest-side at 50% 0, #f2f2f233, #0000)',
				'hero-gradient':
					'linear-gradient(to right, rgba(0, 0, 0, 0) 5%, #fffc 35%, #fff 50%, #fffc 65%, rgba(0, 0, 0, 0) 95%)',
				'window-grain':
					'url("https://cdn.prod.website-files.com/63dcb6e1a80e9454b630f4c4/644af0299bc01254815ae442_noise-overlay-2.png")',
			},
			backgroundSize: {
				'200px': '200px',
			},
			fontFamily: {
				gloock: ['Gloock', 'sans-serif'],
			},
		},
	},
	plugins: [require('tailwindcss-animate')],
};
export default config;
