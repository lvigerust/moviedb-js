<script>
	import { Details } from '$components';

	export let data;

	const { movieDetails, providers } = data;

	console.log(movieDetails.slug);
</script>

<Details data={movieDetails} {providers} />
