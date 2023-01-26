export const load = async ({ fetch }) => {
	const fetchPopular = async () => {
		const popularRes = await fetch(
			`https://api.themoviedb.org/3/movie/popular?api_key=423da18d89f008cf830844259883b4c6&language=en-US&page=1`
		);
		const popularData = await popularRes.json();
		return popularData.results.slice(0, 1);
	};

	return {
		popularMovies: fetchPopular()
	};
};
