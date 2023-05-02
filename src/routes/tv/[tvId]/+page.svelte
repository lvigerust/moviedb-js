<script>
	import { Details } from '$components';

	export let data;

	const { tvDetails, providers } = data;
</script>

<!-- Clean this code | add to layout component -->
<svelte:head>
	<meta property="og:title" content={tvDetails.name} />
	<meta property="og:description" content={tvDetails.overview} />
	<meta property="og:image" content={'https://image.tmdb.org/t/p/w500/' + tvDetails.poster_path} />
	<meta
		property="og:image"
		content={'https://image.tmdb.org/t/p/w780/' + tvDetails.backdrop_path}
	/>
	<meta property="og:type" content="video.tv_show" />
	<meta property="og:site_name" content="Stinkmeaner" />
</svelte:head>

<Details data={tvDetails} {providers} />
