import { TMDB_API_KEY } from '$env/static/private';

export const load = ({ fetch, params }) => {
	const fetchMultiSearch = async (query) => {
		const multiSearchRes = await fetch(
			`https://api.themoviedb.org/3/search/multi?api_key=${TMDB_API_KEY}&language=en-US&query=${query}&page=1&include_adult=false`
		);
		const multiSearchData = await multiSearchRes.json();
		return multiSearchData.results;
	};

	const getHead = async () => {
		const data = await fetchMultiSearch(params.searchQuery);
		const description = `${data.length} results for query`;
		return { description };
	};

	return {
		query: params.searchQuery,
		multiSearch: fetchMultiSearch(params.searchQuery),
		head: { title: `${params.searchQuery} | Stinkmeaner`, description: 'Results' }
	};
};
