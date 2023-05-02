<script>
	import { Details, PosterCard } from '$components';

	export let data;

	const { movieDetails, providers, streamed } = data;
</script>

<svelte:head>
	<meta property="og:site_name" content="Stinkmeaner" />
	<meta property="og:title" content={movieDetails.title} />
	<meta property="og:image" content={movieDetails.poster_path} />
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
