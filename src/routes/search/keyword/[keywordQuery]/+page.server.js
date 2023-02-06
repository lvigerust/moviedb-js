import { TMDB_API_KEY } from '$env/static/private';

export const load = ({ fetch, params }) => {
	const fetchKeywordMovies = async (keywordQuery) => {
		const keywordMovieRes = await fetch(
			`https://api.themoviedb.org/3/discover/movie?api_key=${TMDB_API_KEY}&language=en-US&include_adult=false&include_video=false&page=1&with_keywords=${keywordQuery}`
		);
		const keywordMovieData = await keywordMovieRes.json();
		return keywordMovieData.results;
	};

	return {
		keywordMovies: fetchKeywordMovies(params.keywordQuery),
		keywordQuery: params.keywordQuery
	};
};
