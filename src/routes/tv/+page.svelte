<script>
	import Carousel from '../../components/Carousel.svelte';

	/** @type {import('./$types').PageData} */
	export let data;

	const { popularTV } = data;
</script>

<Carousel request={popularTV} />
