<script>
	import { fade, fly } from 'svelte/transition';
	import { backIn, backOut } from 'svelte/easing';
	import { getPremiereDate, getRuntime } from '$lib/functions/formatFunctions.js';

	import WatchProviders from '../../../components/WatchProviders.svelte';
	import Breadcrumbs from '../../../components/Breadcrumbs.svelte';

	export let data;
	const { movieDetails, movieProviders, movieImages } = data;
</script>

<svelte:head>
	<title>{movieDetails.title}</title>
</svelte:head>

<div class="hero full-hero">
	<div
		class="container flex flex-col items-center"
		in:fly={{ x: 500, delay: 650, duration: 1000, easing: backOut }}
		out:fly={{ x: 500, duration: 650, easing: backIn }}
	>
		<div class="movie xl:mx-[10vw]">
			<div class="hero-image">
				{#if movieImages.length > 0}
					<img
						class="rounded-lg shadow-xl xl:rounded-xl"
						src={'https://image.tmdb.org/t/p/w1280/' + movieImages[0].file_path}
						alt={movieDetails.title}
					/>
				{:else}
					<img
						class="rounded-lg shadow-xl xl:rounded-xl"
						src={'https://image.tmdb.org/t/p/w1280/' + movieDetails.backdrop_path}
						alt={movieDetails.title}
					/>
				{/if}
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
							<p class="m-0">{getPremiereDate(movieDetails.release_date)}</p>
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
					</div>
				</div>
				<div>
					{#if movieProviders.results.NO}
						<WatchProviders providers={movieProviders} />
					{/if}
				</div>
			</div>
			<div class="movie-collection">
				{#if movieDetails.belongs_to_collection != null}
					<div class="divider" in:fade={{ delay: 2250 }} />
					<div
						in:fly={{ y: 500, delay: 1250, duration: 1000, easing: backOut }}
						class="collection-container mt-6 mx-auto max-w-4xl"
					>
						<h1 class="text-center text-lg">
							Part of the <a
								href={'/collection/' + movieDetails.belongs_to_collection.id}
								class="font-bold">{movieDetails.belongs_to_collection.name}</a
							>
						</h1>
						{#if movieDetails.belongs_to_collection.backdrop_path != null}
							<a href={'/collection/' + movieDetails.belongs_to_collection.id}>
								<img
									class="rounded-lg h-[15vh] w-full object-cover mt-4  shadow-lg sm:hover:scale-[102.5%] transition-transform mb-4 sm:mb-8"
									src={'https://image.tmdb.org/t/p/w1280/' +
										movieDetails.belongs_to_collection.backdrop_path}
									alt={movieDetails.belongs_to_collection.name}
								/>
							</a>
						{/if}
					</div>
				{/if}
			</div>
		</div>
		<Breadcrumbs {movieDetails} />
	</div>
</div>
