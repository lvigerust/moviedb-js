import { TMDB_API_KEY } from '$env/static/private';

export const load = ({ fetch, params }) => {
	const fetchDetails = async (id) => {
		const detailsRes = await fetch(
			`https://api.themoviedb.org/3/movie/${id}?api_key=${TMDB_API_KEY}&language=en-US`
		);
		const detailsData = await detailsRes.json();
		return detailsData;
	};

	const fetchCredits = async (id) => {
		const creditsRes = await fetch(
			`https://api.themoviedb.org/3/movie/${id}/credits?api_key=${TMDB_API_KEY}&language=en-US`
		);
		const creditsData = await creditsRes.json();
		return creditsData;
	};

	const fetchProviders = async (id) => {
		const providerRes = await fetch(
			`https://api.themoviedb.org/3/movie/${id}/watch/providers?api_key=${TMDB_API_KEY}`
		);
		const providerData = await providerRes.json();
		return providerData;
	};

	const fetchImages = async (id) => {
		const imagesRes = await fetch(
			`https://api.themoviedb.org/3/movie/${id}/images?api_key=${TMDB_API_KEY}&language=en-US&include_image_language=en`
		);
		const imagesData = await imagesRes.json();
		return imagesData.backdrops;
	};

	return {
		details: fetchDetails(params.movieId),
		credits: fetchCredits(params.movieId),
		providers: fetchProviders(params.movieId),
		images: fetchImages(params.movieId)
	};
};
