import { TMDB_API_KEY } from '$env/static/private';

export const load = ({ fetch, params }) => {
	const fetchDetails = async (id) => {
		const detailsRes = await fetch(
			`https://api.themoviedb.org/3/tv/${id}?api_key=${TMDB_API_KEY}&language=en-US`
		);
		const detailsData = await detailsRes.json();
		return detailsData;
	};

	const fetchProviders = async (id) => {
		const providerRes = await fetch(
			`https://api.themoviedb.org/3/tv/${id}/watch/providers?api_key=${TMDB_API_KEY}`
		);
		const providerData = await providerRes.json();
		return providerData;
	};

	return {
		details: fetchDetails(params.tvId),
		providers: fetchProviders(params.tvId)
	};
};
