<script>
	import { Details, PosterCard } from '$components';

	export let data;

	const { movieDetails, providers, streamed } = data;
</script>

<svelte:head>
	<meta property="og:site_name" content="Stinkmeaner" />
	<meta property="og:title" content={movieDetails.title} />
	<meta
		property="og:image"
		content={'https://image.tmdb.org/t/p/original/' + movieDetails.backdrop_path}
	/>
	<meta property="og:image:width" content="1280" />
	<meta property="og:image:height" content="720" />
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
