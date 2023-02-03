import { TMDB_API_KEY } from '$env/static/private';

export const load = ({ fetch, params }) => {
	const fetchMultiSearch = async (query) => {
		const searchMovieRes = await fetch(
			`https://api.themoviedb.org/3/search/multi?api_key=${TMDB_API_KEY}&language=en-US&query=${query}&page=1&include_adult=false`
		);
		const searchMovieData = await searchMovieRes.json();
		return searchMovieData.results;
	};

	return {
		multiSearch: fetchMultiSearch(params.searchQuery)
	};
};
