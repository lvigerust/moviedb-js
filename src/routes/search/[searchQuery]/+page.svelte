<script>
	import Card from '../../../components/Card.svelte';
	import { fly } from 'svelte/transition';
	import { backIn, backOut } from 'svelte/easing';
	import { dynamicSort } from '$lib/functions/formatFunctions.js';
	import Breadcrumbs from '../../../components/Breadcrumbs.svelte';

	/** @type {import('./$types').PageData} */
	export let data;
	let { query, multiSearch, keywords } = data;

	const movieResults = multiSearch.filter(function (arr) {
		return arr.media_type == 'movie';
	});
	const tvResults = multiSearch.filter(function (arr) {
		return arr.media_type == 'tv';
	});

	const sortedTvResults = tvResults.sort(dynamicSort('-popularity'));
	const sortedMovieResults = movieResults.sort(dynamicSort('-popularity'));

	let firstResults, secondResults;

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
		<div class="keyword prose flex flex-col items-center min-w-full py-4">
			<h3 class="mb-3">Search by keyword</h3>
			<div class="flex gap-4 justify-center min-w-full">
				{#each keywords as keyword}
					<a href={`/search/keyword/` + keyword.id} class="no-underline">
						<p class="hover:text-accent m-0 font-light">{keyword.name}</p>
					</a>
				{/each}
			</div>
		</div>
		<Breadcrumbs {query} />
	</div>
</div>
