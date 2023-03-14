import { fail } from '@sveltejs/kit';
import { isValidTheme } from '../hooks.server';

/** @type {import('./$types').Actions} */
export const actions = {
	theme: async ({ cookies, request }) => {
		const data = await request.formData();
		const theme = data.get('theme');

		if (!isValidTheme(theme)) {
			return fail(400, { theme, missing: true });
		}

		cookies.set('theme', theme);

		return { success: true };
	}
};
