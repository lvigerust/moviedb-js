<script>
	import { Search, Breadcrumbs, SwiperCarousel } from '$components';

	export let data;
	let { nowPlayingMovies, topRatedMovies, upcomingMovies } = data;
</script>

<svelte:head>
	<title>Home | Movie Database</title>
</svelte:head>

<div class="hero full-hero">
	<div class="sm:container w-full h-full flex flex-col">
		<div class="hero h-full">
			<div class="hero-content text-center h-full flex flex-col center gap-20">
				<div class="text-start py-40">
					<a href="/testing" class="">
						<h1 class="text-4xl  sm:text-5xl font-bold inline ">Velkommen</h1>
					</a>
					<h4 class="text-2xl sm:text-3xl font-semibold py-6">
						Millioner av filmer, TV-serier og personer å oppdage. Utforsk nå.
					</h4>
					<Search />
				</div>
			</div>
		</div>
		<div class="bg-base-200 rounded-lg">
			<SwiperCarousel data={nowPlayingMovies} name="Nye filmer" />
			<SwiperCarousel data={topRatedMovies} name="Klassikere" tallSlider={true} />
			<SwiperCarousel data={upcomingMovies} name="Kommer snart" slides={4} />
		</div>
		<Breadcrumbs />
	</div>
</div>
