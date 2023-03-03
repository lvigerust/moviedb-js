<script>
	import Carousel from './components/Carousel.svelte';

	export let data;
	let { upcomingMovies } = data;
</script>

<Carousel data={upcomingMovies} />
