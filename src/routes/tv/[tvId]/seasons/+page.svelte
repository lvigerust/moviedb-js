<script>
	import Season from '../../../../components/Season.svelte';
	import { getPremiereDate, getTimeUntil } from '$lib/functions/formatFunctions.js';
	import Breadcrumbs from '../../../../components/Breadcrumbs.svelte';

	/** @type {import('./$types').PageData} */
	export let data;

	const { tvDetails } = data;

	const seasonInfo = {
		tv_id: tvDetails.id,
		name: tvDetails.name,
		release_year: new Date(tvDetails.first_air_date).getFullYear()
	};
</script>

<div class="container">
	<div class="max-w-7xl mx-auto">
		{#each tvDetails.seasons as season}
			<Season
				{...seasonInfo}
				season_number={season.season_number}
				poster_path={season.poster_path}
				episode_count={season.episode_count}
				premiere_date={getPremiereDate(season.air_date)}
			/>
		{/each}
	</div>
</div>
<Breadcrumbs {tvDetails} />
