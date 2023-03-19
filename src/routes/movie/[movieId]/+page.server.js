import { TMDB_API_KEY } from '$env/static/private';

export const load = ({ fetch, params }) => {
	const fetchMovieDetails = async (id) => {
		const movieDetailsRes = await fetch(
			`https://api.themoviedb.org/3/movie/${id}?api_key=${TMDB_API_KEY}&language=en-US&append_to_response=images,videos,credits&include_image_language=en`
		);
		const movieDetailsData = await movieDetailsRes.json();
		movieDetailsData.media_type = 'movie';
		return movieDetailsData;
	};

	const fetchMovieProviders = async (id) => {
		const movieProviderRes = await fetch(
			`https://api.themoviedb.org/3/movie/${id}/watch/providers?api_key=${TMDB_API_KEY}`
		);
		const movieProviderData = await movieProviderRes.json();
		return movieProviderData.results.NO;
	};

	const getHead = async () => {
		const data = await fetchMovieDetails(params.movieId);
		const title = `${data.title} (${new Date(data.release_date).getFullYear()})`;
		const description = data.overview;
		const type = 'movie';
		return { title, description, type };
	};

	return {
		movieDetails: fetchMovieDetails(params.movieId),
		providers: fetchMovieProviders(params.movieId),
		head: getHead()
	};
};
