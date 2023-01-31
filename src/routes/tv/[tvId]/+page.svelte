<script>
	import Breadcrumbs from '../../../components/Breadcrumbs.svelte';
	import WatchProviders from '../../../components/WatchProviders.svelte';

	import { fly, fade } from 'svelte/transition';
	import Season from '../../../components/Season.svelte';

	export let data;
	const { details, providers } = data;

	const providersNO = providers.results.NO;
	let streamProvidersNO = '',
		buyProvidersNO = '',
		rentProvidersNO = '';
	if (providersNO != null) {
		if (providersNO.flatrate != null) {
			streamProvidersNO = providersNO.flatrate;
		}
		if (providersNO.buy != null) {
			buyProvidersNO = providersNO.buy;
		}
		if (providersNO.rent != null) {
			rentProvidersNO = providersNO.rent;
		}
	}

	let nextEpisode;
	let diff;

	if (details.next_episode_to_air) {
		let today = new Date();
		let airDate = new Date(details.next_episode_to_air.air_date);
		diff = airDate.getTime() - today.getTime();

		const formatDuration = (ms) => {
			if (ms < 0) ms = -ms;
			const time = {
				day: Math.floor(ms / 86400000)
				// hour: Math.floor(ms / 3600000) % 24
				// minute: Math.floor(ms / 60000) % 60
				// second: Math.floor(ms / 1000) % 60
				// millisecond: Math.floor(ms) % 1000
			};
			return Object.entries(time)
				.filter((val) => val[1] !== 0)
				.map((val) => val[1] + ' ' + (val[1] !== 1 ? val[0] + 's' : val[0]))
				.join(' and ');
		};
		nextEpisode = formatDuration(diff);
	}

	const releaseDate = new Date(details.first_air_date);
	const releaseYear = releaseDate.getFullYear();

	let seasonsArray = details.seasons;
	let currentSeason = seasonsArray.pop();
</script>

<svelte:head>
	<title>{details.name}</title>
</svelte:head>

<div
	out:fade
	class="overflow-hidden min-h-[calc(100vh-64px-1rem-2.5rem)] lg:min-h-[calc(100vh-80px-3rem-3rem)]"
>
	<div class="container">
		<div class="tv px-8 xl:mx-[10vw]">
			<div in:fly={{ y: -500, delay: 400 }} class="img-container">
				<img
					class="rounded-lg shadow-xl xl:rounded-xl"
					src={'https://image.tmdb.org/t/p/w1280/' + details.backdrop_path}
					alt={details.name}
				/>
			</div>

			<div class="header flex flex-col lg:flex-row lg:justify-between">
				<div in:fly={{ x: 500, delay: 550 }} class="prose mt-6 lg:mt-8 w-full">
					<h1 class="title mb-4 sm:mb-0 text-3xl text-center sm:text-left sm:text-4xl">
						{details.name} <span class="font-normal">({releaseYear})</span>
					</h1>

					<div
						class="facts sm:bg-base-100 sm:border-0 bg-base-200 w-screen sm:w-full relative -ml-[50vw] sm:ml-0 sm:left-0 left-[50%] py-2 border-y border-solid border-base-300 flex flex-wrap gap-x-2 justify-center items-center sm:justify-start "
					>
						<div class="seasons">
							<p class="m-0 ">
								{details.number_of_seasons}
								{#if details.number_of_seasons > 1}
									seasons
								{:else}
									season
								{/if}
							</p>
						</div>
						<div class="font-bold text-lg select-none">&bullet;</div>
						<div class="episodes">
							<p class="m-0 ">
								{details.number_of_episodes}
								{#if details.number_of_episodes > 1}
									episodes
								{:else}
									episode
								{/if}
							</p>
						</div>
						<div class="genres basis-full sm:basis-[auto] flex justify-center flex-wrap gap-1">
							<div class="font-bold hidden sm:inline  text-lg select-none mr-[0.15rem]">
								&bullet;
							</div>
							{#each details.genres.slice(0, 5) as genre, index}
								<p class="m-0">
									{genre.name}{#if index < 5 - 1 && index < details.genres.length - 1},
									{/if}
								</p>
							{/each}
						</div>
					</div>

					<h4 class="italic font-light mt-8">{details.tagline}</h4>

					<div class="overview">
						<h3>Overview</h3>
						<p>{details.overview}</p>
						<p>
							{#if details.next_episode_to_air}
								Next episode:
								<span class="font-semibold">
									{#if diff > 0}
										{nextEpisode}
									{:else}
										Today
									{/if}
								</span>
							{/if}
						</p>
					</div>
				</div>
				<div in:fade={{ delay: 2000, duration: 750 }}>
					{#if providersNO != null}
						<WatchProviders {providersNO} {streamProvidersNO} {buyProvidersNO} />
					{/if}
				</div>
			</div>
			<div in:fly={{ y: 500, delay: 1000, duration: 650 }}>
				<div class="divider" />
				<div class="seasons prose max-w-full">
					<h2>Current season</h2>
					{#if currentSeason.poster_path}
						<Season season={currentSeason} tvId={details.id} showName={details.name} />
					{:else}
						<Season season={details.seasons[0]} tvId={details.id} showName={details.name} />
					{/if}
				</div>
			</div>
		</div>
		<Breadcrumbs type={'tv'} {details} />
	</div>
</div>
