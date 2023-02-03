import { TMDB_API_KEY } from '$env/static/private';

export const load = ({ fetch, params }) => {
	const fetchMultiSearch = async (query) => {
		const multiSearchRes = await fetch(
			`https://api.themoviedb.org/3/search/multi?api_key=${TMDB_API_KEY}&language=en-US&query=${query}&page=1&include_adult=false`
		);
		const multiSearchData = await multiSearchRes.json();
		return multiSearchData.results;
	};

	const fetchKeywordSearch = async (query) => {
		const keywordSearchRes = await fetch(
			`https://api.themoviedb.org/3/search/keyword?api_key=${TMDB_API_KEY}&query=${query}&page=1`
		);
		const keywordSearchData = await keywordSearchRes.json();
		return keywordSearchData.results.slice(0, 5);
	};

	return {
		query: params.searchQuery,
		multiSearch: fetchMultiSearch(params.searchQuery),
		keywords: fetchKeywordSearch(params.searchQuery)
	};
};
