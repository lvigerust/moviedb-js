<script>
	import Breadcrumbs from '../../../../components/Breadcrumbs.svelte';
	import Card from '../../../../components/Card.svelte';

	export let data;
	let { keywordMovies, keywordQuery } = data;
</script>

<div class="hero full-hero">
	<div class="container">
		<div
			class="popular-movies grid grid-cols-[repeat(auto-fit,_minmax(120px,_1fr))] sm:grid-cols-[repeat(auto-fit,_minmax(180px,_1fr))] gap-x-5 sm:gap-x-8"
		>
			{#each keywordMovies.slice(0, 18) as movie, index}
				<div class="transition">
					<Card type={'movie'} request={movie} />
				</div>
			{/each}
		</div>
		<Breadcrumbs {keywordQuery} />
	</div>
</div>
