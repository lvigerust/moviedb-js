import { TMDB_API_KEY } from '$env/static/private';

export const load = async ({ fetch, params }) => {
	const fetchSearch = async () => {
		const searchRes = await fetch(
			`https://api.themoviedb.org/3/search/multi?api_key=${TMDB_API_KEY}&language=en-US&query=${params.id}&page=1&include_adult=false`
		);
		const searchData = await searchRes.json();
		return searchData.results;
	};

	return {
		search: fetchSearch()
	};
};
