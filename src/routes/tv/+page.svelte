<script>
	import { fly } from 'svelte/transition';
	import Breadcrumbs from '../../components/Breadcrumbs.svelte';
	import Card from '../../components/Card.svelte';
	import Carousel from '../../components/Carousel.svelte';

	export let data;

	const { trendingTv, popularTv } = data;
</script>

<svelte:head>
	<title>Popular TV Shows</title>
</svelte:head>

<div class="hero min-h-[calc(100vh-64px-1rem-2.5rem)] lg:min-h-[calc(100vh-80px-3rem-3rem)]">
	<div class="container px-8 sm:px-16 overflow-hidden">
		<div class="mb-2 max-w-5xl mx-auto" in:fly={{ x: 500, delay: 450 }} out:fly={{ x: 500 }}>
			<h1 class="mb-4 text-3xl sm:text-4xl ml-3 font-bold">Trending</h1>
			<Carousel name={'trending'} type={'tv'} request={trendingTv} />
		</div>
		<div in:fly={{ y: 500, delay: 550 }} out:fly={{ y: 500 }}>
			<h1 class="text-xl sm:text-2xl font-bold -mb-2 text-start ml-3">Popular TV</h1>
			<div
				class="popular-movies grid grid-cols-[repeat(auto-fit,_minmax(120px,_1fr))] sm:grid-cols-[repeat(auto-fit,_minmax(180px,_1fr))] gap-x-8"
			>
				{#each popularTv as show}
					<Card type={'tv'} request={show} />
				{/each}
			</div>
		</div>
		<Breadcrumbs type="tv" />
	</div>
</div>
