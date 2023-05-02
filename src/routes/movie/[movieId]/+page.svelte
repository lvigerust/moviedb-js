<script>
	import { Details, PosterCard } from '$components';

	export let data;

	const { movieDetails, providers } = data;
</script>

<svelte:head>
	<meta property="og:site_name" content="Stinkmeaner" />
	<meta property="og:title" content={movieDetails.title} />
	<meta
		property="og:image"
		content={'https://image.tmdb.org/t/p/500/' + movieDetails.poster_path}
	/>
	<meta
		property="og:image"
		content={'https://image.tmdb.org/t/p/780/' + movieDetails.backdrop_path}
	/>
	<meta property="og:description" content={movieDetails.overview} />
</svelte:head>

<Details data={movieDetails} {providers} />

<!-- {#await streamed.recommendations}
	Loading recommendations...
{:then recommendations}
	{#each recommendations as movie}
		{movie.title}
	{/each}
{:catch error}
	{error.message}
{/await} -->
