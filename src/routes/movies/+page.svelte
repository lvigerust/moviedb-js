<script>
	import Carousel from '../../components/Carousel.svelte';

	/** @type {import('./$types').PageData} */
	export let data;

	const { popularMovies } = data;
</script>

<Carousel request={popularMovies} />
