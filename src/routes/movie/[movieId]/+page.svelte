<script>
	import { Details, PosterCard } from '$components';

	export let data;

	const { movieDetails, providers } = data;
</script>

<!-- Clean this code | add to layout component -->
<svelte:head>
	<meta property="og:title" content={movieDetails.title} />
	<meta property="og:description" content={movieDetails.overview} />
	<meta
		property="og:image"
		content={'https://image.tmdb.org/t/p/w500/' + movieDetails.poster_path}
	/>
	<meta
		property="og:image"
		content={'https://image.tmdb.org/t/p/w780/' + movieDetails.backdrop_path}
	/>
	<meta property="og:type" content="video.movie" />
	<meta property="og:site_name" content="Stinkmeaner" />
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
