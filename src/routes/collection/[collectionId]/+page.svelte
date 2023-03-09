<script>
	import { dynamicSort } from '$lib/functions/formatFunctions.js';

	import Card from '../../../components/Card.svelte';
	import { Breadcrumbs } from '$components';

	export let data;
	const { collectionDetails } = data;
</script>

<div class="full-hero">
	<div class="container px-4 sm:px-2">
		<div class="collection">
			<div class="collection-info text-center prose max-w-3xl mx-auto">
				<h2>{collectionDetails.name}</h2>
				<p>
					{collectionDetails.overview}
				</p>
			</div>

			<div
				class="collection-items grid grid-cols-[repeat(auto-fit,_minmax(120px,_1fr))] gap-x-5 sm:gap-x-8 mt-4
			sm:flex flex-wrap justify-center"
			>
				{#each collectionDetails.parts as movie}
					{#if movie.poster_path}
						<Card type={'movie'} request={movie} />
					{/if}
				{/each}
			</div>
		</div>
		<Breadcrumbs />
	</div>
</div>
