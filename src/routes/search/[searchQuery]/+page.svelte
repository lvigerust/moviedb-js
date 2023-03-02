<script>
	import { dynamicSort } from '$lib/functions/formatFunctions.js';

	import Card from '../../../components/Card.svelte';
	import Breadcrumbs from '../../../components/Breadcrumbs.svelte';

	/** @type {import('./$types').PageData} */
	export let data;
	let { query, multiSearch, keywords } = data;

	let movieResults = multiSearch.filter(function (arr) {
		return arr.media_type == 'movie';
	});
	let tvResults = multiSearch.filter(function (arr) {
		return arr.media_type == 'tv';
	});

	movieResults = movieResults
		.sort(dynamicSort('-popularity'))
		.filter((movie) => movie.popularity > 1);

	tvResults = tvResults.sort(dynamicSort('-popularity')).filter((show) => show.popularity > 1);

	let reverse = false;

	if (movieResults.length && tvResults.length) {
		if (movieResults[0].popularity && tvResults[0].popularity) {
			if (movieResults[0].popularity < tvResults[0].popularity) {
				reverse = true;
			}
		}
	}
</script>

<div class="hero full-hero">
	<div class="container flex flex-col justify-between">
		<div class="search flex flex-col" class:flex-col-reverse={reverse}>
			{#if movieResults.length}
				<div class="movie-grid">
					<h1 class="text-xl sm:text-2xl font-bold -mb-2 text-start ml-3">Movies</h1>
					<div class="movies search-grid">
						{#each movieResults.slice(0, 12) as movie}
							{#if movie.poster_path && movie.popularity > 1}
								<Card type={'movie'} request={movie} />
							{/if}
						{/each}
					</div>
				</div>
			{/if}

			{#if movieResults.length && tvResults.length}
				<div class="divider my-10" />
			{/if}

			{#if tvResults.length}
				<div class="tv-grid">
					<h1 class="text-xl sm:text-2xl font-bold -mb-2 text-start ml-3">TV Shows</h1>
					<div class="tv search-grid">
						{#each tvResults.slice(0, 6) as show}
							{#if show.poster_path && show.popularity > 1}
								<Card type={'tv'} request={show} />
							{/if}
						{/each}
					</div>
				</div>
			{/if}
		</div>

		<div class="keyword prose flex flex-col items-center min-w-full py-4 mt-10">
			<h3 class="mb-3">Search by keyword</h3>
			<div
				class="flex flex-col sm:flex-row sm:flex-wrap items-center gap-4 justify-center min-w-full"
			>
				{#each keywords as keyword}
					<a href={`/search/keyword/` + keyword.id} class="no-underline">
						<p class="hover:text-accent hover:drop-shadow whitespace-nowrap m-0 font-light">
							{keyword.name}
						</p>
					</a>
				{/each}
			</div>
		</div>
		<div>
			<Breadcrumbs {query} />
		</div>
	</div>
</div>
