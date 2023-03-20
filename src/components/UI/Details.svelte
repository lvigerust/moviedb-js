<script>
	import { fly } from 'svelte/transition';
	import {
		dateToSentence,
		getRuntime,
		slugify,
		calculateLogoSize,
		getTimeUntil,
		getAirDate
	} from '$functions';
	import { Season, WatchProviders } from '$components';

	export let data;
	export let providers;

	let latestSeason;
	let latestSeasonInfo;
	if (data.media_type === 'tv') {
		if (data.seasons.slice(-1)[0].air_date) {
			latestSeason = data.seasons.slice(-1)[0];
		} else latestSeason = data.seasons.slice(-2)[0];

		latestSeasonInfo = {
			show: data.name,
			id: data.id,
			number: latestSeason.season_number,
			poster: latestSeason.poster_path,
			release_year: latestSeason.air_date,
			episode_count: latestSeason.episode_count,
			premiere_date: latestSeason.air_date,
			name: latestSeason.name
		};
	}

	const logoSize = calculateLogoSize(data);
</script>

<div class="full-hero">
	<div class="container px-4 sm:px-2">
		<div class="xl:mx-[10vw]">
			<div class="hero-image relative mt-2">
				<img
					class="rounded-lg shadow-xl shadow-black/40 xl:rounded-xl"
					src={'https://image.tmdb.org/t/p/original/' + data.backdrop_path}
					alt={data.title || data.name}
				/>
				<div
					in:fly={{ x: 50, duration: 600, delay: 150 }}
					class="logo absolute bottom-4 left-6 lg:bottom-9 lg:left-12"
				>
					{#if data.images.logos[0]}
						<img
							class="h-full {logoSize.logoWidth} {logoSize.logoMaxWidth} object-contain drop-shadow-2xl"
							src={'https://image.tmdb.org/t/p/w500/' + data.images.logos[0].file_path}
							alt={data.title || data.name}
						/>
					{/if}
				</div>
			</div>

			<div class="content">
				<div class="flex flex-col lg:flex-row lg:justify-between">
					<div class="prose mt-6 w-full lg:mt-8">
						{#if data.media_type === 'movie'}
							<h1 class="title mb-4 text-center text-3xl sm:mb-0 sm:text-left sm:text-4xl">
								{data.title}
								<span class="font-normal ">({new Date(data.release_date).getFullYear()})</span>
							</h1>

							<div
								class="facts relative left-[50%] -ml-[50vw] flex w-screen flex-wrap items-center justify-center gap-x-2 border-y border-solid border-base-300 bg-base-200 py-2 sm:left-0 sm:ml-0 sm:w-full sm:justify-start sm:border-0 sm:bg-base-100 "
							>
								<div class="release">
									<p class="m-0">{dateToSentence(data.release_date)}</p>
								</div>
								<div class="select-none text-lg font-bold">&bullet;</div>
								<div class="runtime md:order-last">
									<p class="m-0">{getRuntime(data.runtime)}</p>
								</div>
								<div class="genres flex basis-full flex-wrap justify-center gap-1 sm:basis-[auto]">
									<div
										class="mr-[0.15rem] hidden select-none text-lg font-bold sm:inline md:hidden"
									>
										&bullet;
									</div>
									{#each data.genres.slice(0, 5) as genre, index}
										<p class="m-0">
											{genre.name}{#if index < 5 - 1 && index < data.genres.length - 1},
											{/if}
										</p>
									{/each}
								</div>
								<div class="hidden select-none text-lg font-bold md:inline">&bullet;</div>
							</div>

							<h4 class="mt-8 font-light italic">{data.tagline}</h4>

							<div class="overview">
								<h3>Overview</h3>
								<p>{data.overview}</p>
								<p>
									<span>Rating:</span>
									{Math.round(data.vote_average * 10) / 10} / 10<br />
								</p>
							</div>
						{:else if data.media_type === 'tv'}
							<h1 class="title mb-4 text-center text-3xl sm:mb-0 sm:text-left sm:text-4xl">
								{data.name}
								<span class="font-normal">({new Date(data.first_air_date).getFullYear()})</span>
							</h1>

							<div
								class="facts relative left-[50%] -ml-[50vw] flex w-screen flex-wrap items-center justify-center gap-x-2 border-y border-solid border-base-300 bg-base-200 py-2 sm:left-0 sm:ml-0 sm:w-full sm:justify-start sm:border-0 sm:bg-base-100 "
							>
								<div class="seasons">
									<a
										href={`/tv/${data.id}-${slugify(data.name)}/seasons`}
										class="font-normal text-current no-underline"
									>
										<p class="m-0 ">
											{data.last_episode_to_air.season_number}
											{#if data.last_episode_to_air.season_number > 1}
												seasons
											{:else}
												season
											{/if}
										</p>
									</a>
								</div>
								<div class="select-none text-lg font-bold">&bullet;</div>
								<div class="episodes">
									<p class="m-0 ">
										{data.number_of_episodes}
										{#if data.number_of_episodes > 1}
											episodes
										{:else}
											episode
										{/if}
									</p>
								</div>
								<div class="genres flex basis-full flex-wrap justify-center gap-1 sm:basis-[auto]">
									<div class="mr-[0.15rem] hidden select-none  text-lg font-bold sm:inline">
										&bullet;
									</div>
									{#each data.genres.slice(0, 5) as genre, index}
										<p class="m-0">
											{genre.name}{#if index < 5 - 1 && index < data.genres.length - 1},
											{/if}
										</p>
									{/each}
								</div>
							</div>

							<h4 class="mt-8 font-light italic">{data.tagline}</h4>

							<div class="overview">
								<h3>Overview</h3>
								<p>{data.overview}</p>
								<p>
									{#if data.next_episode_to_air}
										Next episode:

										{#if getTimeUntil(data.next_episode_to_air.air_date) < 1}
											<span class="font-semibold"> Tomorrow </span>
										{:else}
											<span class="font-semibold">
												{getAirDate(data.next_episode_to_air.air_date)}
											</span>
										{/if}
									{/if}
								</p>
							</div>
						{/if}
					</div>
					{#if providers}
						<WatchProviders {providers} />
					{/if}
				</div>
			</div>

			<div class="content-group">
				{#if data.media_type === 'tv' || (data.belongs_to_collection && data.belongs_to_collection.backdrop_path)}
					<div class="divider" />
				{/if}

				{#if data.media_type === 'movie'}
					{#if data.belongs_to_collection && data.belongs_to_collection.backdrop_path}
						<div class="mx-auto mt-6 max-w-4xl">
							<h1 class="text-center text-lg">
								Part of the <a
									href={`/collection/${data.belongs_to_collection.id}-${slugify(
										data.belongs_to_collection.name
									)}`}
									class="font-bold">{data.belongs_to_collection.name}</a
								>
							</h1>
							<a
								href={`/collection/${data.belongs_to_collection.id}-${slugify(
									data.belongs_to_collection.name
								)}`}
							>
								<img
									class="mt-4 mb-4 h-[15vh] w-full rounded-lg  object-cover shadow-lg transition-transform duration-200 sm:mb-8 sm:hover:scale-[102.5%]"
									src={'https://image.tmdb.org/t/p/w1280/' +
										data.belongs_to_collection.backdrop_path}
									alt={data.belongs_to_collection.name}
								/>
							</a>
						</div>
					{/if}
				{:else if data.media_type === 'tv'}
					<div class="current-season prose max-w-full">
						{#if data.type === 'Miniseries' && data.in_production === false}
							<h2>Miniseries</h2>
						{:else if data.in_production}
							<h2>Current season</h2>
						{:else}
							<h2>Last season</h2>
						{/if}

						<div class="mb-5">
							<Season {...latestSeasonInfo} />
						</div>

						{#if data.seasons.length > 1 && data.seasons.slice(-1).pop().air_date}
							<a class="no-underline" href={`/tv/${data.id}-${slugify(data.name)}/seasons`}
								>View all seasons</a
							>
						{/if}
					</div>
				{/if}
			</div>
		</div>
	</div>
</div>
