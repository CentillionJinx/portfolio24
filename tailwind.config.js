/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,svelte,js,ts}'],
	theme: {
		extend: {}
	},
	daisyui: {
		themes: [
			{
				mytheme: {
					primary: '#ebdbb2',

					secondary: '#282828',

					accent: '#fe8019',

					neutral: '#1d2021',

					'base-100': '#32302f',

					info: '#83a598',

					success: '#b8bb26',

					warning: '#fabd2f',

					error: '#fb4934'
				}
			}
		]
	},
	plugins: [require('daisyui')]
};
