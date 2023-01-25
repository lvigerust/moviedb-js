export const load = async () => {
	const fetchPopularTV = async () => {
		const res = await fetch(
			`https://api.themoviedb.org/3/tv/popular?api_key=423da18d89f008cf830844259883b4c6&language=en-US&page=1`
		);
		const data = await res.json();
		return data.results.slice(0, 5);
	};

	return {
		popularTV: fetchPopularTV()
	};
};
