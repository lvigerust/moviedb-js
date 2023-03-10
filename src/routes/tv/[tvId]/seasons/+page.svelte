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

	let seasons = tvDetails.seasons;

	if (tvDetails.seasons[0].name === 'Specials') {
		seasons = [...tvDetails.seasons.slice(1), tvDetails.seasons[0]];
	}

	console.log(tvDetails.seasons[0].name);
</script>

<div class="container px-4 sm:px-0">
	<div class="max-w-7xl mx-auto flex flex-col gap-5">
		{#each seasons as season}
			<Season
				{...seasonInfo}
				season_number={season.season_number}
				poster_path={season.poster_path}
				episode_count={season.episode_count}
				premiere_date={getPremiereDate(season.air_date)}
				release_year={season.air_date}
				season_name={season.name}
			/>
		{/each}
	</div>
</div>
<Breadcrumbs />
