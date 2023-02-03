<script>
	import Card from '../../../components/Card.svelte';
	import { fly } from 'svelte/transition';
	import { backIn, backOut, cubicInOut } from 'svelte/easing';
	import { dynamicSort } from '$lib/functions/formatFunctions.js';

	/** @type {import('./$types').PageData} */
	export let data;
	let { multiSearch } = data;

	const movieResults = multiSearch.filter(function (arr) {
		return arr.media_type == 'movie';
	});
	const tvResults = multiSearch.filter(function (arr) {
		return arr.media_type == 'tv';
	});
</script>

<div class="hero full-hero">
	<div class="container flex flex-col gap-10">
		<div
			class="search-movie-grid"
			in:fly={{ x: -500, delay: 850, duration: 500, easing: cubicInOut }}
		>
			<h1 class="text-xl sm:text-2xl font-bold -mb-2 text-start ml-3">Movies</h1>
			<div
				class="popular-movies grid grid-cols-[repeat(auto-fit,_minmax(120px,_1fr))] sm:grid-cols-[repeat(auto-fit,_minmax(180px,_1fr))] gap-x-5 sm:gap-x-8"
			>
				{#each movieResults.slice(0, 6).sort(dynamicSort('-popularity')) as movie}
					<Card type={'movie'} request={movie} />
				{/each}
			</div>
		</div>
		<div class="search-tv-grid" in:fly={{ x: 500, delay: 1000, duration: 500, easing: cubicInOut }}>
			<h1 class="text-xl sm:text-2xl font-bold -mb-2 text-start ml-3">TV</h1>
			<div
				class="popular-movies grid grid-cols-[repeat(auto-fit,_minmax(120px,_1fr))] sm:grid-cols-[repeat(auto-fit,_minmax(180px,_1fr))] gap-x-5 sm:gap-x-8"
			>
				{#each tvResults.slice(0, 6).sort(dynamicSort('-popularity')) as show}
					<Card type={'tv'} request={show} />
				{/each}
			</div>
		</div>
	</div>
</div>
