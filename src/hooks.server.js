/** @type {import('@sveltejs/kit').Handle} */

export const isValidTheme = (theme) =>
	!!theme && (theme === 'garden' || theme === 'night' || theme === 'auto');

export async function handle({ event, resolve }) {
	const theme = event.cookies.get('theme') ?? 'auto';

	if (isValidTheme(theme)) {
		event.locals.theme = theme;
	}

	const response = await resolve(event, {
		transformPageChunk: ({ html }) => html.replace('%THEME%', theme)
	});

	return response;
}
