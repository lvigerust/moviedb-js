import { TMDB_API_KEY } from '$env/static/private';

export const load = async ({ fetch }) => {
	const fetchUpcomingMovies = async () => {
		const upcomingMoviesRes = await fetch(
			`https://api.themoviedb.org/3/movie/upcoming?api_key=${TMDB_API_KEY}&language=en-US&page=1`
		);
		const upcomingMoviesData = await upcomingMoviesRes.json();
		return upcomingMoviesData.results.slice(0, 8);
	};

	return {
		upcomingMovies: fetchUpcomingMovies()
	};
};
