<script>
	import { dynamicSort } from '$functions';
	import { PosterCarousel, HeroCarousel } from '$components';
	import { fly } from 'svelte/transition';

	export let data;
	let { trendingTv, popularTv, topRatedTv, trendingTvDetails } = data;

	trendingTv = trendingTv.sort(dynamicSort('-popularity'));
</script>

<div in:fly={{ y: 500, delay: 400 }} out:fly={{ y: -500 }} class="full-hero">
	<div class="flex flex-col sm:gap-1">
		<div class="sm:mb-2">
			<HeroCarousel data={trendingTvDetails} />
		</div>
		<PosterCarousel data={trendingTv} name="Topp serier i dag" />
		<PosterCarousel data={topRatedTv} name="Kritikerroste serier" />
		<PosterCarousel data={popularTv} name="Populært nå" />
	</div>
</div>
