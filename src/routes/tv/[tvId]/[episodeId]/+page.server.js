import { TMDB_API_KEY } from '$env/static/private';

export const load = async ({ fetch }) => {
	const fetchDetails = async (id) => {
		const detailsRes = await fetch(
			`https://api.themoviedb.org/3/tv/${id}/season/1/episode/1?api_key=${TMDB_API_KEY}&language=en-US`
		);
		const detailsData = await detailsRes.json();
		return detailsData;
	};

	return {
		details: fetchDetails()
	};
};
