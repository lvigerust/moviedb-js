<script>
	import { fly } from 'svelte/transition';
	import Carousel from '../../components/Carousel.svelte';
	import MovieCard from '../../components/MovieCard.svelte';

	/** @type {import('./$types').PageData} */
	export let data;

	const { trendingMovies, popularMovies } = data;
</script>

<div class="hero min-h-[calc(100vh-80px-3rem)]">
	<div class="container px-8 sm:px-16 overflow-hidden">
		<div in:fly={{ x: -500, delay: 400 }} out:fly={{ x: 500 }}>
			<h1 class="mb-4 text-4xl font-bold">Trending this week</h1>
			<Carousel name={'trending'} request={trendingMovies} />
		</div>
		<div in:fly={{ x: 500, delay: 550 }} out:fly={{ y: 500 }}>
			<h1 class="text-center text-xl font-bold mb-2 sm:text-start sm:ml-3 sm:text-2xl">
				Popular Movies
			</h1>
			<div
				class="popular-movies flex flex-row justify-center flex-wrap sm:grid grid-cols-[repeat(auto-fit,_minmax(240px,_1fr))] gap-x-4"
			>
				{#each popularMovies as movie}
					<MovieCard {movie} />
				{/each}
			</div>
		</div>
	</div>
</div>
