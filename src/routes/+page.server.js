import { redirect } from '@sveltejs/kit';
/** @type {import('./$types').Actions} */

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

		throw redirect(303, redirectTo ?? '/');
	}
};

import { TMDB_API_KEY } from '$env/static/private';

export const load = ({ fetch, params }) => {
	console.log('Starting Load');

	const fetchMovieDetails = async (id) => {
		const movieDetailsRes = await fetch(
			`https://api.themoviedb.org/3/movie/${id}?api_key=${TMDB_API_KEY}&language=en-US&include_image_language=en`
		);
		const movieDetailsData = await movieDetailsRes.json();
		const title = movieDetailsData.title;

		return movieDetailsData;
	};

	return {
		movieDetails: fetchMovieDetails(1011679)
	};
};
