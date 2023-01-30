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

	const fetchPopular = async () => {
		const popularRes = await fetch(
			`https://api.themoviedb.org/3/tv/popular?api_key=${TMDB_API_KEY}&language=en-US&page=1`
		);
		const popularData = await popularRes.json();
		return popularData.results;
	};

	const fetchImages = async (id) => {
		const detailsRes = await fetch(
			`https://api.themoviedb.org/3/tv/${id}/season/1/episode/2/images?api_key=${TMDB_API_KEY}`
		);
		const detailsData = await detailsRes.json();
		return detailsData.stills;
	};

	return {
		details: fetchDetails(params.tvId),
		providers: fetchProviders(params.tvId),
		popular: fetchPopular(),
		images: fetchImages(params.tvId)
	};
};
