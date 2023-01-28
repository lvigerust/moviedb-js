<script>
	import Card from '../../../components/Card.svelte';

	export let data;
	const { details } = data;
</script>

<svelte:head>
	<title>{details.name}</title>
</svelte:head>

<div class="container min-h-[calc(100vh-64px-1rem-2.5rem)] lg:min-h-[calc(100vh-80px-3rem-3rem)]">
	<div class="collection-details text-center my-8 mx-[15%]">
		<h2 class="text-3xl font-bold mb-8 ">{details.name}</h2>
		<p>
			{details.overview}
		</p>
	</div>

	<div class="collection-movies flex flex-row justify-center flex-wrap gap-x-4">
		{#each details.parts as movie}
			<div class="w-[350px]">
				<Card type={'movie'} request={movie} />
			</div>
		{/each}
	</div>
	<div class="text-sm breadcrumbs flex justify-center pt-14 pb-6">
		<ul class="flex flex-wrap justify-center">
			<li><a href="/">Home</a></li>

			<li>{details.name}</li>
		</ul>
	</div>
</div>
