<script>
	import { dynamicSort } from '$functions';
	import { HeroCarousel, PosterCarousel } from '$components';
	import { fly } from 'svelte/transition';

	export let data;
	let { trendingMovies, popularMovies, topRatedMovies, trendingMoviesDetails } = data;

	trendingMovies = trendingMovies.sort(dynamicSort('-popularity'));
</script>

<div
	in:fly={{ y: 500, delay: 400 }}
	out:fly={{ y: -500 }}
	class="full-hero flex flex-col justify-between"
>
	<div class="flex flex-col sm:gap-2">
		<div class="sm:mb-4">
			<HeroCarousel data={trendingMoviesDetails} />
		</div>
		<PosterCarousel data={trendingMovies} name="Topp filmer i dag" />
		<PosterCarousel data={topRatedMovies} name="Kritikerroste filmer" />
		<PosterCarousel data={popularMovies} name="Populært nå" />
	</div>
</div>
