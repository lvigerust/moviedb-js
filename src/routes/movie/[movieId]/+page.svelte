<script>
	import { Details } from '$components';

	export let data;

	const { movieDetails, providers } = data;
</script>

<Details data={movieDetails} {providers} />
