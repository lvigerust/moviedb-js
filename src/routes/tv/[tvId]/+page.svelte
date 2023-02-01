<script>
	import { fly, fade } from 'svelte/transition';
	import { getPremiereDate, getTimeUntil } from '$lib/functions/formatFunctions.js';

	import Season from '../../../components/Season.svelte';
	import WatchProviders from '../../../components/WatchProviders.svelte';
	import Breadcrumbs from '../../../components/Breadcrumbs.svelte';

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

<div
	out:fade
	class="overflow-hidden min-h-[calc(100vh-64px-1rem-2.5rem)] lg:min-h-[calc(100vh-80px-3rem-3rem)]"
>
	<div class="container">
		<div class="tv px-8 xl:mx-[10vw]">
			<div in:fly={{ y: -500, delay: 400 }} class="img-container">
				<img
					class="rounded-lg shadow-xl xl:rounded-xl"
					src={'https://image.tmdb.org/t/p/w1280/' + tvDetails.backdrop_path}
					alt={tvDetails.name}
				/>
			</div>

			<div class="header flex flex-col lg:flex-row lg:justify-between">
				<div in:fly={{ x: 500, delay: 550 }} class="prose mt-6 lg:mt-8 w-full">
					<h1 class="title mb-4 sm:mb-0 text-3xl text-center sm:text-left sm:text-4xl">
						{tvDetails.name}
						<span class="font-normal">({new Date(tvDetails.first_air_date).getFullYear()})</span>
					</h1>

					<div
						class="facts sm:bg-base-100 sm:border-0 bg-base-200 w-screen sm:w-full relative -ml-[50vw] sm:ml-0 sm:left-0 left-[50%] py-2 border-y border-solid border-base-300 flex flex-wrap gap-x-2 justify-center items-center sm:justify-start "
					>
						<div class="seasons">
							<a
								href={`/tv/${tvDetails.id}` + `/` + tvDetails.last_episode_to_air.season_number}
								class="no-underline font-normal text-current"
							>
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
				<div class="w-fit" in:fade={{ delay: 1500 }}>
					{#if tvProviders.results.NO}
						<WatchProviders providers={tvProviders} />
					{/if}
				</div>
			</div>
			<div in:fade={{ delay: 1250 }} class="divider" />
			<div in:fly={{ y: 500, delay: 1000, duration: 650 }}>
				<div class="seasons prose max-w-full">
					<h2>Current season</h2>
					<Season {...currentSeasonInfo} />
				</div>
			</div>
		</div>
		<Breadcrumbs {tvDetails} />
	</div>
</div>
