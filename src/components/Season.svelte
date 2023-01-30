<script>
	export let season;

	export let tvId;
	export let showName;

	const releaseDate = new Date(season.air_date);
	const releaseYear = releaseDate.getFullYear();

	const months = [
		'January',
		'February',
		'March',
		'April',
		'May',
		'June',
		'July',
		'August',
		'September',
		'October',
		'November',
		'December'
	];

	let day = releaseDate.getDate();
	let month = months[releaseDate.getMonth()];
	let year = releaseDate.getFullYear();
	$: premiereDate = `${month} ${day}, ${year}`;
</script>

<a href={`/tv/${tvId}` + `/` + season.season_number} class="no-underline ">
	<div
		class="season flex bg-base-200 rounded-lg shadow-lg sm:hover:scale-[102.5%] transition-transform mb-8"
	>
		<div class="image-wrapper">
			<div class="wrapper w-32 sm:w-36 h-full">
				<img
					class="rounded-l-lg m-0"
					src={'https://image.tmdb.org/t/p/original/' + season.poster_path}
					alt={season.name}
				/>
			</div>
		</div>
		<div class="content-wrapper flex flex-col justify-center px-4 sm:px-8 prose">
			<h2 class="m-0 -mb-5 sm:-mb-4 font-medium text-lg sm:text-2xl">
				Season {season.season_number}
			</h2>
			<div class="flex gap-2 font-semibold text-md sm:text-lg">
				<p>{releaseYear}</p>
				<p>|</p>
				<p>{season.episode_count} episodes</p>
			</div>
			<p class="m-0 text-sm sm:text-base">
				Season {season.season_number} of {showName} premiered on {premiereDate}.
			</p>
		</div>
	</div>
</a>
