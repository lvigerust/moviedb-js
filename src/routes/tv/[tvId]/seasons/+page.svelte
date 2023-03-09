<script>
	import { getPremiereDate } from '$functions';
	import { Breadcrumbs, Season } from '$components';

	/** @type {import('./$types').PageData} */
	export let data;

	const { tvDetails } = data;

	const seasonInfo = {
		tv_id: tvDetails.id,
		name: tvDetails.name
	};
</script>

<div class="container px-4 sm:px-0">
	<div class="max-w-7xl mx-auto">
		{#each tvDetails.seasons as season}
			<Season
				{...seasonInfo}
				season_number={season.season_number}
				poster_path={season.poster_path}
				episode_count={season.episode_count}
				premiere_date={getPremiereDate(season.air_date)}
				release_year={season.air_date}
			/>
		{/each}
	</div>
</div>
<Breadcrumbs />
