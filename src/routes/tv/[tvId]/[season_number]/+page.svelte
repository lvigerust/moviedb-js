<script>
	import { getPremiereDate, getRuntime } from '$lib/functions/formatFunctions.js';
	import Breadcrumbs from '../../../../components/Breadcrumbs.svelte';
	import { fly, fade } from 'svelte/transition';

	export let data;
	const { tvDetails, seasonDetails } = data;

	const breadcrumbs = {
		type: 'tv',
		list: '',
		parent: tvDetails.name,
		children: seasonDetails.name
	};
</script>

<div class="hero min-h-[calc(100vh-64px-1rem-2.5rem)] lg:min-h-[calc(100vh-80px-3rem-3rem)]">
	<div out:fly={{ y: 500 }} class="container min-h-full px-5 max-w-5xl">
		<div
			in:fly={{ y: -500, delay: 500 }}
			class="season flex bg-base-300 rounded-lg shadow-md max-w-4xl mx-auto"
		>
			<div class="image-wrapper w-20 h-full shrink-0">
				<img
					class="rounded-l-lg"
					src={'https://image.tmdb.org/t/p/w780/' + seasonDetails.poster_path}
					alt={seasonDetails.name}
				/>
			</div>
			<div class="content-wrapper flex flex-col w-full justify-center ml-4">
				<h2 class="font-bold text-lg">
					{seasonDetails.name}
					<span class="font-normal">({new Date(seasonDetails.air_date).getFullYear()})</span>
				</h2>
				<a href={`/tv/` + tvDetails.id}>
					<p>Back to overview</p>
				</a>
			</div>
		</div>
		<div in:fade={{ delay: 1250 }} class="divider mt-6" />
		<div in:fly={{ y: -500, delay: 750 }} class="episodes">
			<h3 class="text-xl font-semibold">
				Episodes <span class="font-light">{seasonDetails.episodes.length}</span>
			</h3>
			<div class="episodes-wrapper flex flex-col gap-8 my-4">
				{#each seasonDetails.episodes as episode}
					<div
						class="episode flex flex-col bg-base-300 rounded-lg shadow-lg
					sm:flex-row"
					>
						<div class="image-wrapper relative shrink-0 w-full sm:max-w-xs sm:basis-1/3">
							{#if episode.still_path}
								<img
									class="rounded-t-lg sm:rounded-r-none sm:rounded-l-lg sm:object-contain"
									src={'https://image.tmdb.org/t/p/w780/' + episode.still_path}
									alt={episode.name}
								/>
							{/if}
							{#if episode.vote_average > 0}
								<p class="absolute bottom-3 left-3 drop-shadow-sm">
									<span class="badge badge-neutral">
										{Math.round(episode.vote_average * 10) / 10}</span
									>
								</p>
							{/if}
						</div>
						<div class="content-wrapper flex flex-col gap-4 w-full justify-between p-4">
							<div class="title-facts flex flex-col sm:flex-row sm:justify-between gap-1">
								<div class="title flex gap-2 order-last sm:order-first font-semibold">
									<h4>{episode.episode_number}</h4>
									<h4>{episode.name}</h4>
								</div>
								<div class="facts text-sm sm:text-right">
									<p>{getPremiereDate(episode.air_date)}</p>

									{#if episode.runtime}
										<p>{getRuntime(episode.runtime)}</p>
									{/if}
								</div>
							</div>
							<div class="overview text-sm sm:basis-1/2">
								<p>{episode.overview}</p>
							</div>
						</div>
					</div>
				{/each}
			</div>
		</div>
		<Breadcrumbs {...breadcrumbs} />
	</div>
</div>
