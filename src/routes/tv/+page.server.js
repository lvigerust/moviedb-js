import { TMDB_API_KEY } from '$env/static/private';

export const load = async ({ fetch }) => {
	const fetchTrendingTv = async () => {
		const trendingTvRes = await fetch(
			`https://api.themoviedb.org/3/trending/tv/week?api_key=${TMDB_API_KEY}`
		);
		const trendingTvData = await trendingTvRes.json();
		return trendingTvData.results.slice(0, 5);
	};

	const fetchPopularTv = async () => {
		const popularTvRes = await fetch(
			`https://api.themoviedb.org/3/tv/popular?api_key=${TMDB_API_KEY}&language=en-US&page=1`
		);
		const popularTvData = await popularTvRes.json();
		return popularTvData.results;
	};

	return {
		trendingTv: fetchTrendingTv(),
		popularTv: fetchPopularTv()
	};
};
