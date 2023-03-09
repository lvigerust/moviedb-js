import { TMDB_API_KEY } from '$env/static/private';

export const load = async ({ fetch }) => {
	const fetchTrendingMovies = async () => {
		const trendingMoviesRes = await fetch(
			`https://api.themoviedb.org/3/trending/movie/week?api_key=${TMDB_API_KEY}`
		);
		const trendingMoviesData = await trendingMoviesRes.json();
		return trendingMoviesData.results;
	};

	const fetchTrendingMovieDetails = async () => {
		// Get trending movies
		const trendingMovies = await fetchTrendingMovies();

		// Sort movies by popularity
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
		trendingMovies.sort(dynamicSort('-popularity'));

		// Assign ID to movie
		const id = trendingMovies[0].id;

		// Get movie details
		const fetchTrendingMoviesDetails = async () => {
			const trendingDetailsRes = await fetch(
				`https://api.themoviedb.org/3/movie/${id}?api_key=${TMDB_API_KEY}&append_to_response=images`
			);
			const trendingDetailsData = await trendingDetailsRes.json();
			return trendingDetailsData;
		};

		const trendingDetailsData = await fetchTrendingMoviesDetails(id);
		return trendingDetailsData;
	};

	// -----------------------------

	const fetchPopularMovies = async () => {
		const popularMoviesRes = await fetch(
			`https://api.themoviedb.org/3/movie/popular?api_key=${TMDB_API_KEY}&language=en-US&page=1`
		);
		const popularMoviesData = await popularMoviesRes.json();
		return popularMoviesData.results;
	};

	const fetchTopRatedMovies = async () => {
		const topRatedMoviesRes = await fetch(
			`https://api.themoviedb.org/3/movie/top_rated?api_key=${TMDB_API_KEY}&language=en-US&page=1`
		);
		const topRatedMoviesData = await topRatedMoviesRes.json();
		return topRatedMoviesData.results;
	};

	return {
		trendingMovies: fetchTrendingMovies(),
		popularMovies: fetchPopularMovies(),
		topRatedMovies: fetchTopRatedMovies(),
		head: {
			title: 'Movies',
			description:
				'Oversikt over filmer. Sortert etter filmer som trender akkurat nå, er populære på The Movie Database eller høyt vurdert på IMDB.com'
		},
		trendingMoviesDetails: fetchTrendingMovieDetails()
	};
};
