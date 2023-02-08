<script>
	import { fly } from 'svelte/transition';
	import { backIn, backOut } from 'svelte/easing';
	import Search from '../components/Search.svelte';

	export let data;
	let { nowPlayingMovies, topRatedMovies, upcomingMovies } = data;
</script>

<svelte:head>
	<title>Home | Movie Database</title>
</svelte:head>

<div class="hero full-hero flex flex-col justify-center">
	<div
		class="px-[calc(3.5vw+24px)] flex flex-col gap-8 justify-center items-center pb-12"
		in:fly={{ y: 500, duration: 600, delay: 600, easing: backOut }}
		out:fly={{ x: 500, duration: 600, easing: backIn }}
	>
		<div class="prose">
			<Search />
		</div>
	</div>
</div>
