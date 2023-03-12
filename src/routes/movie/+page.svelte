<script>
	import { dynamicSort } from '$functions';
	import { Breadcrumbs, HeroCarousel, PosterCarousel } from '$components';

	export let data;
	let { trendingMovies, popularMovies, topRatedMovies, trendingMoviesDetails } = data;

	trendingMovies = trendingMovies.sort(dynamicSort('-popularity'));
</script>

<div class="full-hero flex flex-col justify-between">
	<div class="flex flex-col gap-2">
		<div class="sm:mb-4">
			<HeroCarousel data={trendingMoviesDetails} />
		</div>
		<PosterCarousel data={trendingMovies} name="Topp filmer i dag" />
		<PosterCarousel data={topRatedMovies} name="Kritikerroste filmer" />
		<PosterCarousel data={popularMovies} name="Populært nå" />
	</div>

	<Breadcrumbs />
</div>
