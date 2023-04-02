<script>
	import { Details, PosterCard } from '$components';

	export let data;

	const { movieDetails, providers, streamed } = data;
</script>

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
