<script>
	import { dynamicSort } from '$lib/functions/formatFunctions.js';

	import Card from '../../../components/Card.svelte';
	import { Breadcrumbs } from '$components';

	export let data;
	const { collectionDetails } = data;

	collectionDetails.parts.sort(dynamicSort('release_date'));
</script>

<svelte:head>
	<title>{collectionDetails.name}</title>
</svelte:head>

<div class="hero full-hero">
	<div class="container flex flex-col justify-between">
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
					<Card type={'movie'} request={movie} />
				{/each}
			</div>
		</div>
		<Breadcrumbs />
	</div>
</div>
