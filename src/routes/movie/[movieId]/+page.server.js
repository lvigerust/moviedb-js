import { TMDB_API_KEY } from '$env/static/private';

export const load = ({ fetch, params }) => {
	const fetchMovieDetails = async (id) => {
		const movieDetailsRes = await fetch(
			`https://api.themoviedb.org/3/movie/${id}?api_key=${TMDB_API_KEY}&language=en-US`
		);
		const movieDetailsData = await movieDetailsRes.json();
		return movieDetailsData;
	};

	const fetchMovieProviders = async (id) => {
		const movieProviderRes = await fetch(
			`https://api.themoviedb.org/3/movie/${id}/watch/providers?api_key=${TMDB_API_KEY}`
		);
		const movieProviderData = await movieProviderRes.json();
		return movieProviderData;
	};

	const fetchMovieImages = async (id) => {
		const movieImagesRes = await fetch(
			`https://api.themoviedb.org/3/movie/${id}/images?api_key=${TMDB_API_KEY}&language=en-US&include_image_language=en`
		);
		const movieImagesData = await movieImagesRes.json();
		return movieImagesData.backdrops;
	};

	return {
		movieDetails: fetchMovieDetails(params.movieId),
		movieProviders: fetchMovieProviders(params.movieId),
		movieImages: fetchMovieImages(params.movieId)
	};
};
