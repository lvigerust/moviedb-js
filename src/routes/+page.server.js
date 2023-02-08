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

export const load = async ({ fetch }) => {
	const fetchNowPlayingMovies = async () => {
		const nowPlayingMoviesRes = await fetch(
			`https://api.themoviedb.org/3/movie/now_playing?api_key=${TMDB_API_KEY}&page=1&region=no`
		);
		const nowPlayingMoviesData = await nowPlayingMoviesRes.json();
		return nowPlayingMoviesData.results;
	};

	const fetchTopRatedMovies = async () => {
		const topRatedMoviesRes = await fetch(
			`https://api.themoviedb.org/3/movie/top_rated?api_key=${TMDB_API_KEY}&language=en-US&page=1`
		);
		const topRatedMoviesData = await topRatedMoviesRes.json();
		return topRatedMoviesData.results;
	};

	const fetchUpcomingMovies = async () => {
		const upcomingMoviesRes = await fetch(
			`https://api.themoviedb.org/3/movie/upcoming?api_key=${TMDB_API_KEY}&language=en-US&page=1`
		);
		const upcomingMoviesData = await upcomingMoviesRes.json();
		return upcomingMoviesData.results;
	};

	return {
		nowPlayingMovies: fetchNowPlayingMovies(),
		topRatedMovies: fetchTopRatedMovies(),
		upcomingMovies: fetchUpcomingMovies()
	};
};
