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
	<div class="container" out:fly={{ x: -500, duration: 700, easing: backIn }}>
		<div
			class="trending-carousel max-w-5xl mx-auto"
			in:fly={{ x: -500, duration: 700, delay: 700, easing: backOut }}
		>
			<h1 class="text-3xl sm:text-4xl ml-3 font-bold">Trending Movies</h1>
			<Carousel name={'trending'} type="movie" request={trendingMovies} />
		</div>
		<div class="popular-movies" in:fly={{ x: -500, duration: 600, delay: 700, easing: backOut }}>
			<h1 class="text-xl sm:text-2xl font-bold -mb-2 text-start ml-3">Popular Movies</h1>
			<div class="popular-grid">
				{#each popularMovies as movie, index}
					<div class="transition" in:fly={{ y: 500, delay: 800 + index * 50 }}>
						<Card type={'movie'} request={movie} />
					</div>
				{/each}
			</div>
			<div class="flex justify-center mb-6 mt-10">
				<button class="btn btn-wide" disabled="disabled">Load more</button>
			</div>
		</div>
		<Breadcrumbs {popularMovies} />
	</div>
</div>
