<script>
	import { Details } from '$components';

	export let data;

	const { tvDetails, providers } = data;

	console.log(tvDetails);
</script>

<Details data={tvDetails} {providers} />
