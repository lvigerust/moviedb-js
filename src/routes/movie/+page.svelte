<script>
	import { dynamicSort } from '$functions';
	import { Breadcrumbs, HeroCarousel, PosterCarousel } from '$components';

	export let data;
	let { trendingMovies, popularMovies, topRatedMovies } = data;

	topRatedMovies = topRatedMovies.sort(dynamicSort('-popularity'));
</script>

<div class="full-hero flex flex-col justify-between">
	<div class="container flex flex-col gap-2">
		<HeroCarousel data={trendingMovies} />

		<PosterCarousel data={popularMovies} name="Populære filmer" />
		<PosterCarousel data={topRatedMovies} name="Klassikere" />
	</div>

	<Breadcrumbs />
</div>
