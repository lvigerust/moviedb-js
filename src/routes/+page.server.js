/** @type {import('./$types').Actions} */
import { redirect } from '@sveltejs/kit';

export const actions = {
	setTheme: async ({ url, cookies }) => {
		const theme = url.searchParams.get('theme');
		const redirectTo = url.searchParams.get('redirectTo');

		if (theme) {
			cookies.set('colortheme', theme, {
				path: '/',
				maxAge: 60 * 60 * 24 * 365
			});
		}

		throw redirect(303, redirectTo !== null && redirectTo !== void 0 ? redirectTo : '/');
	}
};
