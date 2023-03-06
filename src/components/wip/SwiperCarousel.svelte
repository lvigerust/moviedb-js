<script>
	import { onMount } from 'svelte';
	import { register } from 'swiper/element/bundle';

	register();

	export let data;
	export let name = 'Carousel Name';

	export let tallSlider = false;
	export let slides = 5;

	let gap = 20;
	let padding = 'px-14';
	let showNavigation = true;

	onMount(() => {
		if (window.innerWidth <= 428) {
			slides = 3;
			padding = 'px-0';
			gap = 8;
			showNavigation = false;
		}
	});
</script>

<div class="netflix py-4 px-2 sm:px-0 max-w-[100vw]">
	<h3 class="text-start font-semibold text-lg sm:-mb-4 mb-2 {padding}">{name}</h3>

	<swiper-container
		class="sm:py-7 {padding} w-full max-w-full max-h-screen min-h-0 min-w-0"
		slides-per-view={slides}
		slides-per-group={slides}
		space-between={gap}
		navigation={showNavigation}
		loop={true}
	>
		{#each data as movie}
			<swiper-slide>
				<a href={`/movie/` + movie.id}>
					<div
						class="shadow-lg shadow-black/60 rounded cursor-pointer sm:hover:scale-105 transition-all"
					>
						{#if tallSlider}
							{#if movie.poster_path}
								<img
									class="rounded"
									src={'https://image.tmdb.org/t/p/w1280/' + movie.poster_path}
									alt={movie.title}
								/>
							{/if}
						{:else if movie.backdrop_path}
							<img
								class="rounded"
								src={'https://image.tmdb.org/t/p/w780/' + movie.backdrop_path}
								alt={movie.title}
							/>
						{/if}
					</div>
				</a>
			</swiper-slide>
		{/each}
	</swiper-container>
</div>

<style>
	:root {
		--swiper-navigation-size: 24px;
		--swiper-navigation-top-offset: 50%;
		--swiper-navigation-sides-offset: 10px;
		--swiper-navigation-color: #fff;
	}
</style>
