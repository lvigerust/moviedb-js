<script>
	import Card from '../../components/Card.svelte';
	import Carousel from '../../components/Carousel.svelte';
	import { Breadcrumbs } from '$components';

	export let data;
	const { trendingTv, popularTv } = data;
</script>

<svelte:head>
	<title>Popular TV Shows</title>
</svelte:head>

<div class="hero full-hero">
	<div class="container">
		<div class="trending-carousel max-w-5xl mx-auto">
			<h1 class="text-3xl sm:text-4xl ml-3 font-bold">Trending TV</h1>
			<Carousel name={'trending'} type={'tv'} request={trendingTv} />
		</div>
		<div class="popular-tv">
			<h1 class="text-xl sm:text-2xl font-bold -mb-2 text-start ml-3">Popular TV</h1>
			<div class="popular-grid">
				{#each popularTv as show, index}
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
