<script>
	import { fly, fade } from 'svelte/transition';
	import { dynamicSort } from '$lib/functions/formatFunctions.js';
	import Breadcrumbs from '../../../components/Breadcrumbs.svelte';
	import Card from '../../../components/Card.svelte';

	export let data;
	const { collectionDetails } = data;

	collectionDetails.parts.sort(dynamicSort('release_date'));
</script>

<svelte:head>
	<title>{collectionDetails.name}</title>
</svelte:head>

<div class="hero min-h-[calc(100vh-64px-1rem-2.5rem)] lg:min-h-[calc(100vh-80px-3rem-3rem)]">
	<div class="container px-8 sm:px-16 overflow-hidden">
		<div
			in:fade={{ delay: 650 }}
			class="collection-collectionDetails text-center prose max-w-3xl mx-auto"
		>
			<h2>{collectionDetails.name}</h2>
			<p>
				{collectionDetails.overview}
			</p>
		</div>

		<div
			in:fly={{ x: -500, delay: 450 }}
			class="collection grid grid-cols-[repeat(auto-fit,_minmax(120px,_1fr))] gap-x-5 sm:gap-x-8 mt-4
			sm:flex flex-wrap justify-center"
		>
			{#each collectionDetails.parts as movie}
				<Card type={'movie'} request={movie} />
			{/each}
		</div>
		<div in:fade={{ delay: 1200 }}>
			<Breadcrumbs {collectionDetails} />
		</div>
	</div>
</div>
