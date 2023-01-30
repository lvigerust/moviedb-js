<script>
	import { fly, fade } from 'svelte/transition';
	import Breadcrumbs from '../../../components/Breadcrumbs.svelte';
	import WatchProviders from '../../../components/WatchProviders.svelte';

	export let data;
	const { details, credits, providers } = data;
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

	const releaseDate = new Date(details.release_date);
	const releaseYear = releaseDate.getFullYear();
	const months = [
		'January',
		'February',
		'March',
		'April',
		'May',
		'June',
		'July',
		'August',
		'September',
		'October',
		'November',
		'December'
	];
	let day = releaseDate.getDate();
	let month = months[releaseDate.getMonth()];
	let year = releaseDate.getFullYear();
	$: formattedDate = `${month} ${day}, ${year}`;

	function Runtime(minutes) {
		let h = Math.floor(minutes / 60);
		let m = minutes % 60;
		return (h + 'h ' + m + 'm').toString();
	}

	const crew = credits.crew;
	function FindCredit(role) {
		const result = crew.find(({ job }) => job === role);
		return result.name;
	}
</script>

<svelte:head>
	<title>{details.title}</title>
</svelte:head>

<div
	out:fade
	class="container overflow-hidden min-h-[calc(100vh-64px-1rem-2.5rem)] lg:min-h-[calc(100vh-80px-3rem-3rem)]"
>
	<div class="movie px-8 xl:mx-[10vw]">
		<div in:fly={{ y: -500, delay: 400 }} class="img-container">
			<img
				class="rounded-lg shadow-xl xl:rounded-xl"
				src={'https://image.tmdb.org/t/p/original/' + details.backdrop_path}
				alt={details.title}
			/>
		</div>

		<div class="header flex flex-col lg:flex-row lg:justify-between">
			<div in:fly={{ x: -500, delay: 550 }} class="prose mt-6 lg:mt-8 w-full">
				<h1 class="title mb-4 sm:mb-0 text-3xl text-center sm:text-left sm:text-4xl">
					{details.title} <span class="font-normal ">({releaseYear})</span>
				</h1>

				<div
					class="facts sm:bg-base-100 sm:border-0 bg-base-200 w-screen sm:w-full relative -ml-[50vw] sm:ml-0 sm:left-0 left-[50%] py-2 border-y border-solid border-base-300 flex flex-wrap gap-x-2 justify-center items-center sm:justify-start "
				>
					<div class="release">
						<p class="m-0">{formattedDate}</p>
					</div>
					<div class="font-bold text-lg select-none">&bullet;</div>
					<div class="runtime md:order-last">
						<p class="m-0">{Runtime(details.runtime)}</p>
					</div>
					<div class="genres basis-full sm:basis-[auto] flex justify-center flex-wrap gap-1">
						<div class="font-bold hidden sm:inline md:hidden text-lg select-none mr-[0.15rem]">
							&bullet;
						</div>
						{#each details.genres.slice(0, 5) as genre, index}
							<p class="m-0">
								{genre.name}{#if index < 5 - 1 && index < details.genres.length - 1},
								{/if}
							</p>
						{/each}
					</div>
					<div class="font-bold text-lg hidden md:inline select-none">&bullet;</div>
				</div>

				<h4 class="italic font-light mt-8">{details.tagline}</h4>

				<div class="overview">
					<h3>Overview</h3>
					<p>{details.overview}</p>
					<p>
						<span>Rating:</span>
						{Math.round(details.vote_average * 10) / 10} / 10<br />
					</p>
				</div>

				<!-- <div class="credits">
					<div class="story">
						{#if FindCredit('Director')}
							<p>Director: {FindCredit('Director')}</p>
						{/if}
					</div>
				</div> -->
			</div>
			<div in:fade={{ delay: 2000, duration: 750 }}>
				{#if providersNO != null}
					<WatchProviders {providersNO} {streamProvidersNO} {buyProvidersNO} {rentProvidersNO} />
				{/if}
			</div>
		</div>

		{#if details.belongs_to_collection != null}
			<div in:fly={{ y: 500, delay: 1000, duration: 650 }} class="collection-container mt-6">
				<div class="divider" />
				<h1 class="text-center text-lg">
					Part of the <a href={'/collection/' + details.belongs_to_collection.id} class="font-bold"
						>{details.belongs_to_collection.name}</a
					>
				</h1>
				{#if details.belongs_to_collection.backdrop_path != null}
					<a href={'/collection/' + details.belongs_to_collection.id}>
						<img
							class="rounded-lg h-[15vh] w-full object-cover mt-4  shadow-lg sm:hover:scale-[102.5%] transition-transform mb-8"
							src={'https://image.tmdb.org/t/p/w1280/' +
								details.belongs_to_collection.backdrop_path}
							alt={details.belongs_to_collection.name}
						/>
					</a>
				{/if}
			</div>
		{/if}
	</div>
</div>
<Breadcrumbs type={'movie'} {details} />
