<script>
	import SwiperCarousel from '../../components/wip/SwiperCarousel.svelte';

	export let data;
	let { upcomingMovies, topRatedMovies } = data;
</script>

<div class="container">
	<SwiperCarousel data={upcomingMovies} name="Kommende filmer" />
	<SwiperCarousel data={topRatedMovies} name="Prisbelønte" tallSlider={true} slides={5} />
</div>
