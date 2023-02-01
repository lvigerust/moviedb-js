import { TMDB_API_KEY } from '$env/static/private';

export const load = ({ fetch, params }) => {
	const fetchTvProviders = async (id) => {
		const TvProviderRes = await fetch(
			`https://api.themoviedb.org/3/tv/${id}/watch/providers?api_key=${TMDB_API_KEY}`
		);
		const TvProviderData = await TvProviderRes.json();
		return TvProviderData;
	};

	return {
		tvProviders: fetchTvProviders(params.tvId)
	};
};
