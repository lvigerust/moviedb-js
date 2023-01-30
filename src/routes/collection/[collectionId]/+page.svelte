<script>
	import { fly, fade } from 'svelte/transition';
	import Breadcrumbs from '../../../components/Breadcrumbs.svelte';
	import Card from '../../../components/Card.svelte';

	export let data;
	const { details } = data;
</script>

<svelte:head>
	<title>{details.name}</title>
</svelte:head>

<div
	out:fly={{ y: 500 }}
	class="container min-h-[calc(100vh-64px-1rem-2.5rem)] lg:min-h-[calc(100vh-80px-3rem-3rem)]"
>
	<div in:fade={{ delay: 650 }} class="collection-details text-center my-8 mx-[15%]">
		<h2 class="text-3xl font-bold mb-8 ">{details.name}</h2>
		<p>
			{details.overview}
		</p>
	</div>

	<div
		in:fly={{ x: -500, delay: 450 }}
		class="collection-movies flex flex-row justify-center flex-wrap gap-x-4"
	>
		{#each details.parts as movie}
			<div class="w-[350px]">
				<Card type={'movie'} request={movie} />
			</div>
		{/each}
	</div>
	<div in:fade={{ delay: 1200 }}>
		<Breadcrumbs type={'movie'} {details} />
	</div>
</div>
