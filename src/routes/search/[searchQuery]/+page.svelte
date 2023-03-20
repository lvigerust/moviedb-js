<script>
	import { dynamicSort } from '$functions';
	import { PosterCard } from '$components';
	import { fade, fly } from 'svelte/transition';
	import Avatar from './Avatar.svelte';

	/** @type {import('./$types').PageData} */
	export let data;
	let { multiSearch } = data;

	let movies = multiSearch.filter(function (arr) {
		return arr.media_type == 'movie';
	});
	let shows = multiSearch.filter(function (arr) {
		return arr.media_type == 'tv';
	});
	let people = multiSearch.filter(function (arr) {
		return arr.media_type == 'person';
	});

	movies = movies
		.sort(dynamicSort('-popularity'))
		.filter((movie) => movie.popularity > 1 && movie.poster_path);

	shows = shows
		.sort(dynamicSort('-popularity'))
		.filter((show) => show.popularity > 1 && show.poster_path);

	people = people.sort(dynamicSort('-popularity')).filter((person) => person.popularity > 1);

	if (movies.length > 12) {
		movies.length = 12;
	}

	if (shows.length > 12) {
		shows.length = 12;
	}

	movies.total_popularity = movies.slice(0, 3).reduce((n, { popularity }) => n + popularity, 0);
	shows.total_popularity = shows.slice(0, 3).reduce((n, { popularity }) => n + popularity, 0);

	let reverse = false;
	let staggerSpeed = 40;
	let moviesDelay = 400;
	let showsDelay = 400 + movies.length * staggerSpeed;
	let dividerDelay;

	if (movies.total_popularity < shows.total_popularity) {
		reverse = true;
		moviesDelay = 400 + shows.length * staggerSpeed;
		showsDelay = 400;
	}
	dividerDelay = Math.max(moviesDelay, showsDelay) + 250 + 400;
</script>

<div out:fly={{ y: -500 }} class="full-hero">
	<div class="container flex flex-col px-4 pt-2 sm:px-0" class:flex-col-reverse={reverse}>
		<div class="movies">
			{#if movies.length}
				<h4 class="mb-2 text-2xl font-semibold sm:mb-3" in:fly={{ y: 150, delay: moviesDelay }}>
					Movies
				</h4>
				<div class="grid-layout">
					{#each movies as movie, index}
						<div in:fly={{ y: 150, delay: moviesDelay + index * staggerSpeed }}>
							<PosterCard data={movie} info={true} margin={false} />
						</div>
					{/each}
				</div>
			{/if}
		</div>

		{#if movies.length && shows.length}
			<div in:fade={{ delay: dividerDelay }} class="container divider mt-6 sm:mb-8  sm:mt-10" />
		{/if}

		<div class="shows">
			{#if shows.length}
				<h4 class="mb-2 text-2xl font-semibold sm:mb-3" in:fly={{ y: 150, delay: showsDelay }}>
					TV Shows
				</h4>

				<div class="grid-layout">
					{#each shows as show, index}
						<div in:fly={{ y: 150, delay: showsDelay + index * staggerSpeed }}>
							<PosterCard data={show} info={true} margin={false} />
						</div>
					{/each}
				</div>
			{/if}
		</div>

		<!-- <div class="people">
			{#each people as person}
				<Avatar data={person} />
			{/each}
		</div> -->
	</div>
</div>
