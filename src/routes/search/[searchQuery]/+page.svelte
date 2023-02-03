<script>
	import Card from '../../../components/Card.svelte';
	import { fly } from 'svelte/transition';
	import { backIn, backOut } from 'svelte/easing';
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

	if (firstResults[6]) {
		if (firstResults[6].popularity < 10) {
			firstResults = firstResults.slice(0, 6);
		}
	}
</script>

<div class="hero full-hero">
	<div
		class="container flex flex-col justify-between"
		in:fly={{ x: -500, delay: 450, duration: 1000, easing: backOut }}
		out:fly={{ y: 500, duration: 500, easing: backIn }}
	>
		{#if firstResults[0].media_type == 'movie'}
			<div class="search">
				<div class="movie-grid">
					<h1 class="text-xl sm:text-2xl font-bold -mb-2 text-start ml-3">Movies</h1>
					<div class="popular-movies search-grid">
						{#each firstResults.slice(0, 12) as movie}
							{#if movie.poster_path}
								<Card type={'movie'} request={movie} />
							{/if}
						{/each}
					</div>
				</div>
				<div class="divider my-10" />
				<div class="tv-grid">
					<h1 class="text-xl sm:text-2xl font-bold -mb-2 text-start ml-3">TV Shows</h1>
					<div class="popular-movies search-grid">
						{#each secondResults.slice(0, 6) as show}
							{#if show.poster_path}
								<Card type={'tv'} request={show} />
							{/if}
						{/each}
					</div>
				</div>
			</div>
		{:else}
			<div class="search">
				<div class="tv-grid">
					<h1 class="text-xl sm:text-2xl font-bold -mb-2 text-start ml-3">TV Shows</h1>
					<div class="popular-movies search-grid">
						{#each firstResults.slice(0, 5) as show}
							{#if show.poster_path}
								<Card type={'tv'} request={show} />
							{/if}
						{/each}
					</div>
				</div>
				<div class="divider my-10" />
				<div class="movie-grid">
					<h1 class="text-xl sm:text-2xl font-bold -mb-2 text-start ml-3">Movies</h1>
					<div class="popular-movies search-grid">
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
