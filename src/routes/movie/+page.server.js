import { TMDB_API_KEY } from '$env/static/private';

export const load = async ({ fetch }) => {
	const fetchTrendingMovies = async () => {
		const trendingMoviesRes = await fetch(
			`https://api.themoviedb.org/3/trending/movie/week?api_key=${TMDB_API_KEY}`
		);
		const trendingMoviesData = await trendingMoviesRes.json();
		return trendingMoviesData.results.slice(0, 5);
	};

	const fetchPopularMovies = async () => {
		const popularMoviesRes = await fetch(
			`https://api.themoviedb.org/3/movie/popular?api_key=${TMDB_API_KEY}&language=en-US&page=1`
		);
		const popularMoviesData = await popularMoviesRes.json();
		return popularMoviesData.results;
	};

	return {
		trendingMovies: fetchTrendingMovies(),
		popularMovies: fetchPopularMovies()
	};
};
