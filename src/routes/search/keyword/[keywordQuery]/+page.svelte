<script>
	import Breadcrumbs from '../../../../components/Breadcrumbs.svelte';
	import Card from '../../../../components/Card.svelte';

	import { fly } from 'svelte/transition';
	import { backIn, backOut } from 'svelte/easing';

	export let data;
	let { keywordMovies, keywordQuery } = data;
</script>

<div class="hero full-hero">
	<div class="container" out:fly={{ x: 500, duration: 600, easing: backIn }}>
		<div
			class="popular-movies grid grid-cols-[repeat(auto-fit,_minmax(120px,_1fr))] sm:grid-cols-[repeat(auto-fit,_minmax(180px,_1fr))] gap-x-5 sm:gap-x-8"
		>
			{#each keywordMovies.slice(0, 18) as movie, index}
				<div
					class="transition"
					in:fly={{ y: 250, delay: 600 + index * 50, duration: 700, easing: backOut }}
				>
					<Card type={'movie'} request={movie} />
				</div>
			{/each}
		</div>
		<Breadcrumbs {keywordQuery} />
	</div>
</div>
