import { TMDB_API_KEY } from '$env/static/private';

export const load = ({ fetch, params }) => {
	const fetchTvDetails = async (id) => {
		const tvDetailsRes = await fetch(
			`https://api.themoviedb.org/3/tv/${id}?api_key=${TMDB_API_KEY}&language=en-US&append_to_response=images,credits&include_image_language=en`
		);
		const tvDetailsData = await tvDetailsRes.json();
		return tvDetailsData;
	};

	const fetchTvProviders = async (id) => {
		const TvProviderRes = await fetch(
			`https://api.themoviedb.org/3/tv/${id}/watch/providers?api_key=${TMDB_API_KEY}`
		);
		const TvProviderData = await TvProviderRes.json();
		return TvProviderData;
	};

	const getHead = async () => {
		const data = await fetchTvDetails(params.tvId);
		const title = data.name;
		const description = data.overview;

		const type = 'tv';

		return { title, description, type };
	};

	return {
		tvDetails: fetchTvDetails(params.tvId),
		tvProviders: fetchTvProviders(params.tvId),
		head: getHead()
	};
};
