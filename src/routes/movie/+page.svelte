<script>
	import { fly } from 'svelte/transition';
	import { backIn, backOut } from 'svelte/easing';

	import Card from '../../components/Card.svelte';
	import Carousel from '../../components/Carousel.svelte';
	import Breadcrumbs from '../../components/Breadcrumbs.svelte';

	export let data;
	const { trendingMovies, popularMovies } = data;
</script>

<svelte:head>
	<title>Popular Movies</title>
</svelte:head>

<div class="hero full-hero">
	<div class="container">
		<div
			class="trending-carousel max-w-5xl mx-auto"
			in:fly={{ x: -500, delay: 650, duration: 1000, easing: backOut }}
			out:fly={{ x: -500, duration: 650, easing: backIn }}
		>
			<h1 class="text-3xl sm:text-4xl ml-3 font-bold">Trending Movies</h1>
			<Carousel name={'trending'} type="movie" request={trendingMovies} />
		</div>
		<div
			class="popular-grid"
			in:fly={{ x: -500, delay: 850, duration: 1000, easing: backOut }}
			out:fly={{ x: -500, delay: 100, duration: 650, easing: backIn }}
		>
			<h1 class="text-xl sm:text-2xl font-bold -mb-2 text-start ml-3">Popular Movies</h1>
			<div
				class="popular-movies grid grid-cols-[repeat(auto-fit,_minmax(120px,_1fr))] sm:grid-cols-[repeat(auto-fit,_minmax(180px,_1fr))] gap-x-5 sm:gap-x-8"
			>
				{#each popularMovies as movie}
					<Card type={'movie'} request={movie} />
				{/each}
			</div>
		</div>
		<Breadcrumbs {popularMovies} />
	</div>
</div>
