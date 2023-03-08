<script>
	import { getPremiereDate, getTimeUntil } from '$lib/functions/formatFunctions.js';

	import Season from '../../../components/Season.svelte';
	import WatchProviders from '../../../components/WatchProviders.svelte';
	import { Breadcrumbs } from '$components';
	import { fly } from 'svelte/transition';

	export let data;
	const { tvDetails, tvProviders } = data;

	function getCurrentSeason(last_episode_air_date) {
		const result = tvDetails.seasons.find(
			({ season_number }) => season_number === last_episode_air_date
		);
		return result;
	}

	const currentSeasonInfo = {
		tv_id: tvDetails.id,
		season_number: tvDetails.last_episode_to_air.season_number,
		name: tvDetails.name,
		poster_path:
			getCurrentSeason(tvDetails.last_episode_to_air.season_number).poster_path ||
			tvDetails.seasons[0].poster_path,
		release_year: new Date(tvDetails.first_air_date).getFullYear(),
		episode_count: getCurrentSeason(tvDetails.last_episode_to_air.season_number).episode_count,
		premiere_date: getPremiereDate(
			getCurrentSeason(tvDetails.last_episode_to_air.season_number).air_date
		)
	};
</script>

<svelte:head>
	<title>{tvDetails.name}</title>
</svelte:head>

<div class="hero full-hero">
	<div class="container">
		<div class="tv xl:mx-[10vw]">
			<div class="hero-image relative">
				<img
					class="rounded-lg shadow-xl xl:rounded-xl"
					src={'https://image.tmdb.org/t/p/w1280/' + tvDetails.backdrop_path}
					alt={tvDetails.name}
				/>
				<div
					in:fly={{ x: 50, duration: 600, delay: 150 }}
					class="logo absolute bottom-4 left-8 lg:bottom-9 lg:left-12"
				>
					{#if tvDetails.images.logos[0]}
						<img
							class="w-[30vw] lg:w-[20vw] h-full drop-shadow-2xl"
							src={'https://image.tmdb.org/t/p/w500/' + tvDetails.images.logos[0].file_path}
							alt={tvDetails.name}
						/>
					{/if}
				</div>
			</div>
			<div class="tv-details flex flex-col lg:flex-row lg:justify-between">
				<div class="prose mt-6 lg:mt-8 w-full">
					<h1 class="title mb-4 sm:mb-0 text-3xl text-center sm:text-left sm:text-4xl">
						{tvDetails.name}
						<span class="font-normal">({new Date(tvDetails.first_air_date).getFullYear()})</span>
					</h1>

					<div
						class="facts sm:bg-base-100 sm:border-0 bg-base-200 w-screen sm:w-full relative -ml-[50vw] sm:ml-0 sm:left-0 left-[50%] py-2 border-y border-solid border-base-300 flex flex-wrap gap-x-2 justify-center items-center sm:justify-start "
					>
						<div class="seasons">
							<a href={`/tv/${tvDetails.id}/seasons`} class="no-underline font-normal text-current">
								<p class="m-0 ">
									{tvDetails.last_episode_to_air.season_number}
									{#if tvDetails.last_episode_to_air.season_number > 1}
										seasons
									{:else}
										season
									{/if}
								</p>
							</a>
						</div>
						<div class="font-bold text-lg select-none">&bullet;</div>
						<div class="episodes">
							<p class="m-0 ">
								{tvDetails.number_of_episodes}
								{#if tvDetails.number_of_episodes > 1}
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
							{#each tvDetails.genres.slice(0, 5) as genre, index}
								<p class="m-0">
									{genre.name}{#if index < 5 - 1 && index < tvDetails.genres.length - 1},
									{/if}
								</p>
							{/each}
						</div>
					</div>

					<h4 class="italic font-light mt-8">{tvDetails.tagline}</h4>

					<div class="overview">
						<h3>Overview</h3>
						<p>{tvDetails.overview}</p>
						<p>
							{#if tvDetails.next_episode_to_air}
								Next episode:
								<span class="font-semibold">
									{getTimeUntil(tvDetails.next_episode_to_air.air_date)}
								</span>
							{/if}
						</p>
					</div>
				</div>
				<div class="w-fit">
					{#if tvProviders.results.NO}
						<WatchProviders providers={tvProviders} />
					{/if}
				</div>
			</div>
			<div class="divider" />
			<div class="current-season prose max-w-full">
				{#if tvDetails.in_production}
					<h2>Current season</h2>
				{:else}
					<h2>Latest season</h2>
				{/if}

				<Season {...currentSeasonInfo} />
				<a class="no-underline" href={`/tv/${tvDetails.id}/seasons`}>View all seasons</a>
			</div>
		</div>
		<Breadcrumbs />
	</div>
</div>
