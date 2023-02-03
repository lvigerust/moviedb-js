<script>
	import Breadcrumbs from '../../../../components/Breadcrumbs.svelte';
	import Card from '../../../../components/Card.svelte';

	import { fly } from 'svelte/transition';
	import { backIn, backOut } from 'svelte/easing';

	export let data;
	let { keywordMovies } = data;
</script>

<div class="hero full-hero">
	<div
		class="container"
		in:fly={{ x: -500, delay: 450, duration: 1000, easing: backOut }}
		out:fly={{ y: 500, duration: 500, easing: backIn }}
	>
		<div
			class="popular-movies grid grid-cols-[repeat(auto-fit,_minmax(120px,_1fr))] sm:grid-cols-[repeat(auto-fit,_minmax(180px,_1fr))] gap-x-5 sm:gap-x-8"
		>
			{#each keywordMovies as movie}
				<Card type={'movie'} request={movie} />
			{/each}
		</div>
		<Breadcrumbs />
	</div>
</div>
