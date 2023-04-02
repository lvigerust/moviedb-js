/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			gridTemplateColumns: {
				fluid: 'repeat(auto-fit, minmax(15rem, 1fr))'
			}
		},
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
