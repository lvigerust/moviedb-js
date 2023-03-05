<script>
	import { Breadcrumbs, Carousel, Card } from '$components';

	import { dynamicSort } from '$lib/functions/formatFunctions.js';

	export let data;
	const { trendingTv, popularTv, topRatedTv } = data;

	let sortedResults = topRatedTv.sort(dynamicSort('-popularity'));
</script>

<svelte:head>
	<title>Popular TV Shows</title>
</svelte:head>

<div class="hero full-hero">
	<div class="container">
		<div class="trending-carousel max-w-5xl mx-auto">
			<h1 class="text-3xl sm:text-4xl ml-3 font-bold">Trending</h1>
			<Carousel name={'trending'} type={'tv'} request={trendingTv} />
		</div>
		<div class="popular-tv">
			<h1 class="text-xl sm:text-2xl font-bold -mb-2 text-start ml-3">Top Rated</h1>
			<div class="popular-grid">
				{#each sortedResults as show, index}
					<div class="transition">
						<Card type={'tv'} request={show} />
					</div>
				{/each}
			</div>
			<div class="flex justify-center mb-6 mt-10">
				<button class="btn btn-wide" disabled="disabled">Load more</button>
			</div>
		</div>
		<Breadcrumbs {popularTv} />
	</div>
</div>
