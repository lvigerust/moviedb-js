<script>
	import { fly } from 'svelte/transition';
	import Card from '../../components/Card.svelte';
	import Carousel from '../../components/Carousel.svelte';

	/** @type {import('./$types').PageData} */
	export let data;

	const { trendingTV, popularTV } = data;
</script>

<svelte:head>
	<title>Popular TV Shows</title>
</svelte:head>

<div class="hero min-h-[calc(100vh-64px-1rem-2.5rem)] lg:min-h-[calc(100vh-80px-3rem-3rem)]">
	<div class="container px-8 sm:px-16 overflow-hidden">
		<div class="mb-2 max-w-5xl mx-auto" in:fly={{ x: -500, delay: 400 }} out:fly={{ x: 500 }}>
			<h1 class="mb-4 text-4xl sm:ml-3 font-bold">Trending this week</h1>
			<Carousel name={'trending'} type={'tv'} request={trendingTV} />
		</div>
		<div in:fly={{ y: 500, delay: 550 }} out:fly={{ y: 500 }}>
			<h1 class="text-center text-xl font-bold -mb-2 sm:text-start sm:ml-3 sm:text-2xl">
				Popular TV
			</h1>
			<div
				class="popular-movies flex flex-row justify-center flex-wrap sm:grid grid-cols-[repeat(auto-fit,_minmax(180px,_1fr))] gap-x-8"
			>
				{#each popularTV as show}
					<Card type={'tv'} request={show} />
				{/each}
			</div>
		</div>
		<div class="text-sm breadcrumbs flex justify-center pt-14 pb-6">
			<ul class="flex flex-wrap justify-center">
				<li><a href="/">Home</a></li>

				<li>Popular TV</li>
			</ul>
		</div>
	</div>
</div>
