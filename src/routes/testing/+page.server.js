import { TMDB_API_KEY } from '$env/static/private';

export const load = async ({ fetch }) => {
	const fetchUpcomingMovies = async () => {
		const upcomingMoviesRes = await fetch(
			`https://api.themoviedb.org/3/movie/upcoming?api_key=${TMDB_API_KEY}&language=en-US&page=1`
		);
		const upcomingMoviesData = await upcomingMoviesRes.json();
		return upcomingMoviesData.results;
	};

	const fetchTopRatedMovies = async () => {
		const topRatedMoviesRes = await fetch(
			`https://api.themoviedb.org/3/movie/top_rated?api_key=${TMDB_API_KEY}&language=en-US&page=1`
		);
		const topRatedMoviesData = await topRatedMoviesRes.json();
		return topRatedMoviesData.results;
	};

	return {
		upcomingMovies: fetchUpcomingMovies(),
		topRatedMovies: fetchTopRatedMovies()
	};
};
