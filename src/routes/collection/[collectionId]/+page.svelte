<script>
	import { dynamicSort } from '$functions';
	import { Card } from '$components';

	export let data;
	const { collectionDetails } = data;

	let sortedCollection = collectionDetails.parts.sort(dynamicSort('release_date'));
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
				{#each sortedCollection as movie}
					{#if movie.poster_path}
						<Card type={'movie'} request={movie} />
					{/if}
				{/each}
			</div>
		</div>
	</div>
</div>
