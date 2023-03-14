<script>
	import { dateToSentence, getRuntime } from '$functions';

	export let data;
	const { tvDetails, seasonDetails } = data;
</script>

<div class="full-hero">
	<div class="container px-4 sm:px-0">
		<div class="season mx-auto flex max-w-4xl rounded-lg bg-base-300 shadow-md">
			<div class="image-wrapper h-full w-20 shrink-0">
				<img
					class="rounded-l-lg"
					src={'https://image.tmdb.org/t/p/w780/' + seasonDetails.poster_path}
					alt={seasonDetails.name}
				/>
			</div>
			<div class="content-wrapper ml-4 flex w-full flex-col justify-center">
				<h2 class="text-lg font-bold">
					{seasonDetails.name}
					<span class="font-normal">({new Date(seasonDetails.air_date).getFullYear()})</span>
				</h2>
				<a href={`/tv/` + tvDetails.id}>
					<p>Back to overview</p>
				</a>
			</div>
		</div>
		<div class="divider mx-auto mt-6 max-w-6xl" />
		<div class="episodes mx-auto max-w-5xl">
			<h3 class="text-xl font-semibold">
				Episodes <span class="font-light">{seasonDetails.episodes.length}</span>
			</h3>
			<div class="episodes-wrapper my-4 flex flex-col gap-8">
				{#each seasonDetails.episodes as episode}
					<div
						class="episode flex flex-col rounded-lg bg-base-300 shadow-lg
					sm:flex-row"
					>
						<div class="image-wrapper relative w-full shrink-0 sm:max-w-xs sm:basis-1/3">
							{#if episode.still_path}
								<img
									class="rounded-t-lg sm:rounded-r-none sm:rounded-l-lg sm:object-contain"
									src={'https://image.tmdb.org/t/p/w780/' + episode.still_path}
									alt={episode.name}
								/>
							{/if}
							{#if episode.vote_count > 3}
								<p class="absolute bottom-2 left-3 drop-shadow-sm">
									<span class="badge-neutral badge">
										{Math.round(episode.vote_average * 10) / 10}
									</span>
								</p>
							{/if}
						</div>
						<div class="content-wrapper flex w-full flex-col justify-between gap-4 p-4">
							<div class="title-facts flex flex-col gap-1 sm:flex-row sm:justify-between">
								<div class="title order-last flex gap-2 font-semibold sm:order-first">
									<h4>{episode.episode_number}</h4>
									<h4>{episode.name}</h4>
								</div>
								<div class="facts text-sm sm:text-right">
									<p>{dateToSentence(episode.air_date)}</p>

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
	</div>
</div>
