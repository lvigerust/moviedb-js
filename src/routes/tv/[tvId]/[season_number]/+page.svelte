<script>
	import { getPremiereDate } from '$lib/functions/getPremiereDate.js';
	import { getRuntime } from '$lib/functions/getRuntime.js';
	import Breadcrumbs from '../../../../components/Breadcrumbs.svelte';

	export let data;
	const { details } = data;

	const premiereDate = new Date(details.air_date);
	const premiereYear = premiereDate.getFullYear();
</script>

<div class="hero min-h-[calc(100vh-64px-1rem-2.5rem)] lg:min-h-[calc(100vh-80px-3rem-3rem)]">
	<div class="container min-h-full px-5 max-w-5xl">
		<div class="season flex bg-base-300 rounded-lg shadow-md max-w-4xl mx-auto">
			<div class="image-wrapper w-20 h-full shrink-0">
				<img
					class="rounded-l-lg"
					src={'https://image.tmdb.org/t/p/w780/' + details.poster_path}
					alt={details.name}
				/>
			</div>
			<div class="content-wrapper flex flex-col w-full justify-center ml-4">
				<h2 class="font-bold text-lg">
					{details.name} <span class="font-normal">({premiereYear})</span>
				</h2>
				<p>Back to season list</p>
			</div>
		</div>
		<div class="divider mt-6" />
		<div class="episodes">
			<h3 class="text-xl font-semibold">
				Episodes <span class="font-light">{details.episodes.length}</span>
			</h3>
			<div class="episodes-wrapper flex flex-col gap-8 my-4">
				{#each details.episodes as episode}
					<div
						class="episode flex flex-col bg-base-300 rounded-lg shadow-lg
					sm:flex-row"
					>
						<div class="image-wrapper shrink-0 w-full sm:max-w-xs sm:basis-1/3">
							{#if episode.still_path}
								<img
									class="rounded-t-lg sm:rounded-r-none sm:rounded-l-lg sm:object-contain"
									src={'https://image.tmdb.org/t/p/w780/' + episode.still_path}
									alt={episode.name}
								/>
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

									<p>{getRuntime(episode.runtime)}</p>
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
		<Breadcrumbs type={'tv'} {details} />
	</div>
</div>
