<script>
	import { Breadcrumbs, PosterCarousel } from '$components';
	import { dynamicSort } from '$lib/functions/formatFunctions.js';

	export let data;
	let { trendingTv, popularTv, topRatedTv } = data;

	trendingTv = trendingTv.sort(dynamicSort('-popularity'));
	topRatedTv = topRatedTv.sort(dynamicSort('-vote_average'));
</script>

<svelte:head>
	<title>Popular TV Shows</title>
</svelte:head>

<div class="full-hero flex flex-col justify-between">
	<div class="container">
		<PosterCarousel data={trendingTv} name="Top i dag" />
	</div>

	<Breadcrumbs {popularTv} />
</div>
