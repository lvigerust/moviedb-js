<script>
	import { Breadcrumbs, PosterCarousel } from '$components';

	export let data;
	const { trendingMovies, popularMovies } = data;
</script>

<svelte:head>
	<title>Popular Movies</title>
</svelte:head>

<div class="full-hero flex flex-col justify-between">
	<div class="container">
		<PosterCarousel data={trendingMovies} name="Top i dag" />
		<PosterCarousel data={popularMovies} name="Populære filmer" />
	</div>

	<Breadcrumbs {popularMovies} />
</div>
