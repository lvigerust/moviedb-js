<script>
	import { WebDevCarousel } from '$components';

	export let data;
	let { upcomingMovies, topRatedMovies } = data;
</script>

<WebDevCarousel data={upcomingMovies} />
<WebDevCarousel data={topRatedMovies} posterSlider={true} />
