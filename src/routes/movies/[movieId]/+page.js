export const load = ({ fetch, params }) => {
	console.log(params.movieId);

	const fetchDetails = async (id) => {
		const detailsRes = await fetch(
			`https://api.themoviedb.org/3/movie/${id}?api_key=423da18d89f008cf830844259883b4c6&language=en-US`
		);
		const detailsData = await detailsRes.json();
		return detailsData;
	};

	return {
		details: fetchDetails(params.movieId)
	};
};
