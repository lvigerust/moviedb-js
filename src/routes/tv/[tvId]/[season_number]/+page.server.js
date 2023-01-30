import { TMDB_API_KEY } from '$env/static/private';

export const load = ({ fetch, params }) => {
	const fetchDetails = async (tvId, season_number) => {
		const detailsRes = await fetch(
			`https://api.themoviedb.org/3/tv/${tvId}/season/${season_number}?api_key=${TMDB_API_KEY}&language=en-US`
		);
		const detailsData = await detailsRes.json();
		return detailsData;
	};

	return {
		details: fetchDetails(params.tvId, params.season_number)
	};
};
