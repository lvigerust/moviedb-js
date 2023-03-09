<script>
	import { dynamicSort } from '$functions';
	import { Breadcrumbs, PosterCarousel, HeroCarousel } from '$components';

	export let data;
	let { trendingTv, popularTv, topRatedTv } = data;

	trendingTv = trendingTv.sort(dynamicSort('-popularity'));
	topRatedTv = topRatedTv.sort(dynamicSort('-vote_average'));
</script>

<div class="full-hero flex flex-col justify-between">
	<div class="container flex flex-col gap-2">
		<HeroCarousel data={trendingTv} />

		<PosterCarousel data={popularTv} name="Populært" />
		<PosterCarousel data={topRatedTv} name="Klassikere" />
	</div>

	<Breadcrumbs />
</div>
