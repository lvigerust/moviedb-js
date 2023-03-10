<script>
	import { dynamicSort } from '$functions';
	import { Breadcrumbs, PosterCarousel, HeroCarousel } from '$components';

	export let data;
	let { trendingTv, popularTv, topRatedTv, trendingTvDetails } = data;

	trendingTv = trendingTv.sort(dynamicSort('-popularity'));
</script>

<div class="full-hero flex flex-col justify-between">
	<HeroCarousel data={trendingTvDetails} />
	<div class="container flex flex-col gap-2">
		<PosterCarousel data={trendingTv} name="Topp serier i dag" />
		<PosterCarousel data={topRatedTv} name="Kritikerroste serier" />
		<PosterCarousel data={popularTv} name="Populært nå" />
	</div>

	<Breadcrumbs />
</div>
