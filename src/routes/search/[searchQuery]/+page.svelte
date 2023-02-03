<script>
	import Card from '../../../components/Card.svelte';
	import { fly } from 'svelte/transition';
	import { backIn, backOut, cubicInOut } from 'svelte/easing';
	import { dynamicSort } from '$lib/functions/formatFunctions.js';
	import Breadcrumbs from '../../../components/Breadcrumbs.svelte';

	/** @type {import('./$types').PageData} */
	export let data;
	let { multiSearch, query } = data;

	const movieResults = multiSearch.filter(function (arr) {
		return arr.media_type == 'movie';
	});
	const tvResults = multiSearch.filter(function (arr) {
		return arr.media_type == 'tv';
	});

	const sortedTvResults = tvResults.sort(dynamicSort('-popularity'));
	const sortedMovieResults = movieResults.sort(dynamicSort('-popularity'));

	let firstResults;
	let secondResults;

	if (sortedTvResults[0].popularity > sortedMovieResults[0].popularity) {
		firstResults = sortedTvResults;
		secondResults = sortedMovieResults;
	} else {
		firstResults = sortedMovieResults;
		secondResults = sortedTvResults;
	}
</script>

<div class="hero full-hero">
	<div class="container flex flex-col justify-between">
		<div class="search flex flex-col gap-14">
			<div class="movie-grid" in:fly={{ x: -500, delay: 850, duration: 500, easing: cubicInOut }}>
				<h1 class="text-xl sm:text-2xl font-bold -mb-2 text-start ml-3">
					{firstResults[0].media_type}
				</h1>
				<div
					class="popular-movies grid grid-cols-[repeat(auto-fit,_minmax(120px,_1fr))] sm:grid-cols-[repeat(auto-fit,_minmax(180px,_1fr))] gap-x-5 sm:gap-x-8"
				>
					{#each firstResults.slice(0, 6) as movie}
						{#if movie.poster_path && movie.popularity > 50}
							<Card type={'movie'} request={movie} />
						{/if}
					{/each}
				</div>
			</div>
			<div class="tv-grid" in:fly={{ x: 500, delay: 1000, duration: 500, easing: cubicInOut }}>
				<h1 class="text-xl sm:text-2xl font-bold -mb-2 text-start ml-3">
					{secondResults[0].media_type}
				</h1>
				<div
					class="popular-movies grid grid-cols-[repeat(auto-fit,_minmax(120px,_1fr))] sm:grid-cols-[repeat(auto-fit,_minmax(180px,_1fr))] gap-x-5 sm:gap-x-8"
				>
					{#each secondResults.slice(0, 6) as show}
						{#if show.poster_path}
							<Card type={'tv'} request={show} />
						{/if}
					{/each}
				</div>
			</div>
		</div>
		<Breadcrumbs {query} />
	</div>
</div>
