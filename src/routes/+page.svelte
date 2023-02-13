<script>
	import { fly } from 'svelte/transition';
	import { backIn, backOut } from 'svelte/easing';
	import Search from '../components/Search.svelte';
	import Breadcrumbs from '../components/Breadcrumbs.svelte';

	export let data;
	let { nowPlayingMovies, topRatedMovies, upcomingMovies } = data;
</script>

<svelte:head>
	<title>Home | Movie Database</title>
</svelte:head>

<div class="hero full-hero">
	<div
		class="container w-full h-full flex flex-col"
		in:fly={{ y: 500, duration: 600, delay: 600, easing: backOut }}
		out:fly={{ x: 500, duration: 600, easing: backIn }}
	>
		<div class="hero h-full">
			<div class="hero-content text-center h-full flex flex-col center gap-20">
				<div class="text-start">
					<h1 class="text-4xl sm:text-5xl font-bold">Velkommen</h1>
					<h4 class="text-2xl sm:text-3xl font-semibold py-6">
						Millioner av filmer, TV-serier og personer å oppdage. Utforsk nå.
					</h4>
				</div>
				<Search />
			</div>
		</div>

		<Breadcrumbs />
	</div>
</div>
