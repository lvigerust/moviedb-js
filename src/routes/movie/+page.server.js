import { TMDB_API_KEY } from '$env/static/private';

export const load = async ({ fetch }) => {
	const fetchTrending = async () => {
		const trendingRes = await fetch(
			`https://api.themoviedb.org/3/trending/movie/week?api_key=${TMDB_API_KEY}`
		);
		const trendingData = await trendingRes.json();
		return trendingData.results.slice(0, 5);
	};

	const fetchPopular = async () => {
		const popularRes = await fetch(
			`https://api.themoviedb.org/3/movie/popular?api_key=${TMDB_API_KEY}&language=en-US&page=1`
		);
		const popularData = await popularRes.json();
		return popularData.results;
	};

	return {
		trendingMovies: fetchTrending(),
		popularMovies: fetchPopular()
	};
};
