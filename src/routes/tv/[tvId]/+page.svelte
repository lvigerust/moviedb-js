<script>
	export let data;
	const { details } = data;

	let timeUntil = '';

	if (details.next_episode_to_air) {
		let today = new Date();
		let airDate = new Date(details.next_episode_to_air.air_date);
		let twoHours = 7200000;

		const diff = airDate.getTime() - today.getTime() + twoHours;

		const formatDuration = (ms) => {
			if (ms < 0) ms = -ms;
			const time = {
				day: Math.floor(ms / 86400000),
				hour: Math.floor(ms / 3600000) % 24
				// minute: Math.floor(ms / 60000) % 60,
				// second: Math.floor(ms / 1000) % 60
				// millisecond: Math.floor(ms) % 1000
			};
			return Object.entries(time)
				.filter((val) => val[1] !== 0)
				.map((val) => val[1] + ' ' + (val[1] !== 1 ? val[0] + 's' : val[0]))
				.join(' and ');
		};

		timeUntil = formatDuration(diff);
	}
</script>

<svelte:head>
	<title>{details.name}</title>
</svelte:head>

<div class="container min-h-[calc(100vh-64px-1rem-2.5rem)] lg:min-h-[calc(100vh-80px-3rem-3rem)]">
	<div class="movie-details px-8 xl:mx-[10vw]">
		<div class="img-container">
			<img
				class="rounded-lg shadow-xl xl:rounded-xl"
				src={'https://image.tmdb.org/t/p/w1280/' + details.backdrop_path}
				alt={details.name}
			/>
		</div>
		<div class="txt-container prose my-6 lg:mt-10 text-center md:text-start lg:max-w-[85%]">
			<h1 class="text-2xl lg:text-3xl">{details.name}</h1>
			<p class="overview">{details.overview}</p>
			<p>
				<span>Rating:</span>
				{Math.round(details.vote_average * 10) / 10} / 10 <br />
				<span>Episode count:</span>
				{details.number_of_episodes} <br />
				<span>Last episode:</span>
				{details.last_episode_to_air.episode_number} - {details.last_episode_to_air.name}
				<br />
				{#if details.next_episode_to_air != null}
					<span>Next episode:</span>
					{timeUntil}
				{/if}
			</p>
		</div>
	</div>
</div>
