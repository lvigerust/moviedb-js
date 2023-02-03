import { TMDB_API_KEY } from '$env/static/private';

export const load = ({ fetch, params }) => {
	const fetchTvDetails = async (id) => {
		const tvDetailsRes = await fetch(
			`https://api.themoviedb.org/3/tv/${id}?api_key=${TMDB_API_KEY}&language=en-US`
		);
		const tvDetailsData = await tvDetailsRes.json();
		return tvDetailsData;
	};

	return {
		tvDetails: fetchTvDetails(params.tvId)
	};
};