<script>
	import { dynamicSort } from '$functions';
	import { Breadcrumbs, HeroCarousel, PosterCarousel } from '$components';

	export let data;
	let { trendingMovies, popularMovies, topRatedMovies } = data;

	trendingMovies = trendingMovies.sort(dynamicSort('-popularity'));
</script>

<div class="full-hero flex flex-col justify-between">
	<HeroCarousel data={trendingMovies} />
	<div class="container flex flex-col gap-2">
		<PosterCarousel data={trendingMovies} name="Topp filmer i dag" />
		<PosterCarousel data={topRatedMovies} name="Kritikerroste filmer" />
		<PosterCarousel data={popularMovies} name="Populært nå" />
	</div>

	<Breadcrumbs />
</div>
