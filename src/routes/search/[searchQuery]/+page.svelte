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
		{#if firstResults[0].media_type == 'movie'}
			<div class="search flex flex-col gap-14" out:fly={{ y: 500, duration: 500, easing: backIn }}>
				<div class="movie-grid">
					<h1 class="text-xl sm:text-2xl font-bold -mb-2 text-start ml-3">Movies</h1>
					<div
						class="popular-movies grid grid-cols-[repeat(auto-fit,_minmax(120px,_1fr))] sm:grid-cols-[repeat(auto-fit,_minmax(140px,_1fr))] gap-x-5 sm:gap-x-8"
					>
						{#each firstResults.slice(0, 12) as movie}
							{#if movie.poster_path}
								<Card type={'movie'} request={movie} />
							{/if}
						{/each}
					</div>
				</div>
				<div class="tv-grid">
					<h1 class="text-xl sm:text-2xl font-bold -mb-2 text-start ml-3">TV Shows</h1>
					<div
						class="popular-movies grid grid-cols-[repeat(auto-fit,_minmax(120px,_1fr))] sm:grid-cols-[repeat(auto-fit,_minmax(140px,_1fr))] gap-x-5 sm:gap-x-8"
					>
						{#each secondResults.slice(0, 6) as show}
							{#if show.poster_path}
								<Card type={'tv'} request={show} />
							{/if}
						{/each}
					</div>
				</div>
			</div>
		{:else}
			<div class="search flex flex-col gap-14" out:fly={{ y: 500, duration: 500, easing: backIn }}>
				<div class="tv-grid">
					<h1 class="text-xl sm:text-2xl font-bold -mb-2 text-start ml-3">TV Shows</h1>
					<div
						class="popular-movies grid grid-cols-[repeat(auto-fit,_minmax(120px,_1fr))] sm:grid-cols-[repeat(auto-fit,_minmax(140px,_1fr))] gap-x-5 sm:gap-x-8"
					>
						{#each firstResults.slice(0, 5) as show}
							{#if show.poster_path}
								<Card type={'tv'} request={show} />
							{/if}
						{/each}
					</div>
				</div>
				<div class="movie-grid">
					<h1 class="text-xl sm:text-2xl font-bold -mb-2 text-start ml-3">Movies</h1>
					<div
						class="popular-movies grid grid-cols-[repeat(auto-fit,_minmax(120px,_1fr))] sm:grid-cols-[repeat(auto-fit,_minmax(140px,_1fr))] gap-x-5 sm:gap-x-8"
					>
						{#each secondResults.slice(0, 5) as movie}
							{#if movie.poster_path}
								<Card type={'movie'} request={movie} />
							{/if}
						{/each}
					</div>
				</div>
			</div>
		{/if}
		<Breadcrumbs {query} />
	</div>
</div>
