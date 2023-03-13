<script>
	import { fly } from 'svelte/transition';
	import { dateToSentence, getRuntime, calculateLogoSize } from '$functions';
	import { WatchProviders } from '$components';

	export let data;
	const { movieDetails, movieProviders } = data;

	const director = movieDetails.credits.crew.find((director) => director.job === 'Director').name;
	const logoSize = calculateLogoSize(movieDetails);
</script>

<div class="hero full-hero">
	<div class="container  px-4 sm:px-2">
		<div class="movie xl:mx-[10vw]">
			<div class="hero-image relative mt-1">
				<img
					class="rounded-lg shadow-xl shadow-black/40 xl:rounded-xl"
					src={'https://image.tmdb.org/t/p/original/' + movieDetails.backdrop_path}
					alt={movieDetails.title}
				/>
				<div
					in:fly={{ x: 50, duration: 600, delay: 150 }}
					class="logo absolute bottom-4 lg:bottom-9 left-6 lg:left-12"
				>
					{#if movieDetails.images.logos[0]}
						<img
							class="h-full {logoSize.logoWidth} {logoSize.logoMaxWidth} object-contain drop-shadow-2xl"
							src={'https://image.tmdb.org/t/p/w500/' + movieDetails.images.logos[0].file_path}
							alt={movieDetails.title}
						/>
					{/if}
				</div>
			</div>
			<div class="movie-details flex flex-col lg:flex-row lg:justify-between">
				<div class="prose mt-6 lg:mt-8 w-full">
					<h1 class="title mb-4 sm:mb-0 text-3xl text-center sm:text-left sm:text-4xl">
						{movieDetails.title}
						<span class="font-normal ">({new Date(movieDetails.release_date).getFullYear()})</span>
					</h1>

					<div
						class="facts sm:bg-base-100 sm:border-0 bg-base-200 w-screen sm:w-full relative -ml-[50vw] sm:ml-0 sm:left-0 left-[50%] py-2 border-y border-solid border-base-300 flex flex-wrap gap-x-2 justify-center items-center sm:justify-start "
					>
						<div class="release">
							<p class="m-0">{dateToSentence(movieDetails.release_date)}</p>
						</div>
						<div class="font-bold text-lg select-none">&bullet;</div>
						<div class="runtime md:order-last">
							<p class="m-0">{getRuntime(movieDetails.runtime)}</p>
						</div>
						<div class="genres basis-full sm:basis-[auto] flex justify-center flex-wrap gap-1">
							<div class="font-bold hidden sm:inline md:hidden text-lg select-none mr-[0.15rem]">
								&bullet;
							</div>
							{#each movieDetails.genres.slice(0, 5) as genre, index}
								<p class="m-0">
									{genre.name}{#if index < 5 - 1 && index < movieDetails.genres.length - 1},
									{/if}
								</p>
							{/each}
						</div>
						<div class="font-bold text-lg hidden md:inline select-none">&bullet;</div>
					</div>

					<h4 class="italic font-light mt-8">{movieDetails.tagline}</h4>

					<div class="overview">
						<h3>Overview</h3>
						<p>{movieDetails.overview}</p>
						<p>
							<span>Rating:</span>
							{Math.round(movieDetails.vote_average * 10) / 10} / 10<br />
						</p>
						{#if director}
							<p>Director: {director}</p>
						{/if}
					</div>
				</div>
				{#if movieProviders.results.NO}
					<WatchProviders providers={movieProviders} />
				{/if}
			</div>
			<div class="movie-collection">
				{#if movieDetails.belongs_to_collection && movieDetails.belongs_to_collection.backdrop_path}
					<div class="divider" />
					<div class="mt-6 mx-auto max-w-4xl">
						<h1 class="text-center text-lg">
							Part of the <a
								href={'/collection/' + movieDetails.belongs_to_collection.id}
								class="font-bold">{movieDetails.belongs_to_collection.name}</a
							>
						</h1>
						<a href={'/collection/' + movieDetails.belongs_to_collection.id}>
							<img
								class="rounded-lg h-[15vh] w-full object-cover mt-4  shadow-lg sm:hover:scale-[102.5%] duration-200 transition-transform mb-4 sm:mb-8"
								src={'https://image.tmdb.org/t/p/w1280/' +
									movieDetails.belongs_to_collection.backdrop_path}
								alt={movieDetails.belongs_to_collection.name}
							/>
						</a>
					</div>
				{/if}
			</div>
		</div>
	</div>
</div>
