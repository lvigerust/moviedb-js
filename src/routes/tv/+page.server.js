import { TMDB_API_KEY } from '$env/static/private';

export const load = async ({ fetch }) => {
	const fetchTrendingTv = async () => {
		const trendingTvRes = await fetch(
			`https://api.themoviedb.org/3/trending/tv/week?api_key=${TMDB_API_KEY}`
		);
		const trendingTvData = await trendingTvRes.json();
		return trendingTvData.results;
	};

	const getTrendingTvDetailsEndpoint = async () => {
		const trendingTv = await fetchTrendingTv();

		function dynamicSort(property) {
			let sortOrder = 1;
			if (property[0] === '-') {
				sortOrder = -1;
				property = property.substr(1);
			}
			return function (a, b) {
				let result = a[property] < b[property] ? -1 : a[property] > b[property] ? 1 : 0;
				return result * sortOrder;
			};
		}
		trendingTv.sort(dynamicSort('-popularity'));

		let showIds = trendingTv.map((show) => show.id);

		let endpointArray = [];

		showIds.forEach(function (id) {
			const endPoint = `https://api.themoviedb.org/3/tv/${id}?api_key=${TMDB_API_KEY}&append_to_response=images&include_image_language=en`;
			endpointArray.push(endPoint);
		});

		return endpointArray;
	};

	const fetchTrendingTvDetails = async () => {
		const endpointArray = await getTrendingTvDetailsEndpoint();

		let detailsArray = [];
		const detailsResponses = await Promise.all(
			endpointArray.map(async (endpoint) => {
				const res = await fetch(`${endpoint}`);
				const data = await res.json();
				return data;
			})
		);
		return detailsResponses;
	};

	const fetchPopularTv = async () => {
		const popularTvRes = await fetch(
			`https://api.themoviedb.org/3/tv/popular?api_key=${TMDB_API_KEY}&language=en-US&page=1`
		);
		const popularTvData = await popularTvRes.json();
		return popularTvData.results;
	};

	const fetchTopRatedTv = async () => {
		const topRatedTvRes = await fetch(
			`https://api.themoviedb.org/3/tv/top_rated?api_key=${TMDB_API_KEY}&language=en-US&page=1`
		);
		const topRatedTvData = await topRatedTvRes.json();
		return topRatedTvData.results;
	};

	return {
		trendingTv: fetchTrendingTv(),
		popularTv: fetchPopularTv(),
		topRatedTv: fetchTopRatedTv(),
		trendingTvDetails: fetchTrendingTvDetails(),
		head: {
			title: 'TV Shows',
			description:
				'Oversikt over TV-serier. Sortert etter serier som trender akkurat nå, er populære på The Movie Database eller høyt vurdert på IMDB.com',
			type: 'tv'
		}
	};
};
