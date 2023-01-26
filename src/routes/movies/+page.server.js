export const load = async ({ fetch }) => {
	const fetchTrending = async () => {
		const trendingRes = await fetch(
			`https://api.themoviedb.org/3/trending/movie/week?api_key=423da18d89f008cf830844259883b4c6`
		);
		const trendingData = await trendingRes.json();
		return trendingData.results.slice(0, 5);
	};

	const fetchPopular = async () => {
		const popularRes = await fetch(
			`https://api.themoviedb.org/3/movie/popular?api_key=423da18d89f008cf830844259883b4c6&language=en-US&page=1`
		);
		const popularData = await popularRes.json();
		return popularData.results;
	};

	return {
		trendingMovies: fetchTrending(),
		popularMovies: fetchPopular()
	};
};
