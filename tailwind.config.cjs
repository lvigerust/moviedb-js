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
		themes: ['garden', 'night']
	},

	plugins: [require('@tailwindcss/typography'), require('daisyui')]
};
