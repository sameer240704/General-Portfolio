/** @type {import('tailwindcss').Config} */
export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./components/**/*.{js,ts,jsx,tsx,mdx}",
		"./app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			colors: {
				primary: {
					"100": "#f7f0f5"
				}
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			fontFamily: {
				hiatus: ["var(--font-hiatus)"],
				montserrat: ["var(--font-montserrat)"]
			},
			fontSize: {
				'clamp': 'clamp(0.5rem, 0.6vw + 0.4rem, 1.125rem)',
				'10xl': ['13rem', {
					lineHeight: '1rem',
					letterSpacing: '0.5rem'
				}]
			},
		}
	},
	plugins: [require("tailwindcss-animate")],
};
