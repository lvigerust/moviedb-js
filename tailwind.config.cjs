/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {},
		container: {
			center: true
		}
	},
	daisyui: {
		logs: false,
		themes: ['garden', 'night'],
		darkTheme: 'night',
		lightTheme: 'garden'
	},

	plugins: [require('@tailwindcss/typography'), require('daisyui')]
};
