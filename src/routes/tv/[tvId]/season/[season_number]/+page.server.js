import { TMDB_API_KEY } from '$env/static/private';

export const load = ({ fetch, params }) => {
	const fetchSeasonDetails = async (tvId, season_number) => {
		const seasonDetailsRes = await fetch(
			`https://api.themoviedb.org/3/tv/${tvId}/season/${season_number}?api_key=${TMDB_API_KEY}&language=en-US`
		);
		const seasonDetailsData = await seasonDetailsRes.json();
		return seasonDetailsData;
	};

	return {
		seasonDetails: fetchSeasonDetails(params.tvId, params.season_number)
	};
};
