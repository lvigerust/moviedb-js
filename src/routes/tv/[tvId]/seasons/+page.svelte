<script>
	import { Breadcrumbs, Season } from '$components';
	import { slugify } from '$functions';

	/** @type {import('./$types').PageData} */
	export let data;

	const { tvDetails } = data;

	let seasons = tvDetails.seasons;
	if (tvDetails.seasons[0].name === 'Specials') {
		seasons = [...tvDetails.seasons.slice(1), tvDetails.seasons[0]];
	}
</script>

<div class="prose max-w-none flex justify-center">
	<a class="no-underline" href={`/tv/${tvDetails.id}-${slugify(tvDetails.name)}`}>
		<h3>Back to overview</h3>
	</a>
</div>

<div class="divider mx-auto my-10 container" />

<div class="container px-4 sm:px-0">
	<div class="max-w-7xl mx-auto flex flex-col gap-5">
		{#each seasons as season}
			<Season
				id={tvDetails.id}
				show={tvDetails.name}
				number={season.season_number}
				poster={season.poster_path}
				episode_count={season.episode_count}
				premiere_date={season.air_date}
				release_year={season.air_date}
				name={season.name}
			/>
		{/each}
	</div>
</div>
<Breadcrumbs />
