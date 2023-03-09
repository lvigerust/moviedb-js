import { TMDB_API_KEY } from '$env/static/private';

export const load = async ({ fetch }) => {
	const fetchTrendingMovies = async () => {
		const trendingMoviesRes = await fetch(
			`https://api.themoviedb.org/3/trending/movie/week?api_key=${TMDB_API_KEY}`
		);
		const trendingMoviesData = await trendingMoviesRes.json();
		return trendingMoviesData.results;
	};

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
		}
	};
};
