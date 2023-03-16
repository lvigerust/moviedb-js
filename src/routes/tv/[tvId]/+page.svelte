<script>
	import { Details } from '$components';

	export let data;

	const { tvDetails, providers } = data;
</script>

<Details data={tvDetails} {providers} />
