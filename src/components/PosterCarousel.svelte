<script>
	import { Splide, SplideSlide, SplideTrack } from '@splidejs/svelte-splide';
	import '@splidejs/svelte-splide/css';
	import { page } from '$app/stores';

	let type = $page.route.id.substring(1);

	export let data;
	export let name = ' "name" ';

	let breakpoints = {
		428: {
			perPage: 2
		},
		640: {
			perPage: 3,
			padding: '1.5rem'
		},

		768: {
			perPage: 4,
			gap: '.75rem'
		},

		1024: {
			perPage: 5
		},

		1280: {
			perPage: 6
		}
	};
</script>

<div class="bg-base-100">
	<h2
		id="carousel-heading"
		class="pl-6 sm:pl-8 font-medium sm:font-semibold text-xl sm:text-2xl -mb-2"
	>
		{name}
	</h2>
	<Splide
		aria-labelledby="carousel-heading"
		hasTrack={false}
		options={{
			pagination: false,
			rewind: true,
			breakpoints: breakpoints,
			perPage: 6,
			speed: 800,
			rewindSpeed: 1200,
			drag: 'free',
			snap: true,
			gap: '1.25rem',
			padding: '2rem',
			easing: 'cubic-bezier(0.65, 0, 0.35, 1)'
		}}
	>
		<SplideTrack>
			{#each data as item}
				<SplideSlide>
					<a href={`/${type}/${item.id}`} title={item.title || item.name}>
						<div class="flex justify-center my-6">
							<img
								class="rounded-lg shadow-lg shadow-black/50 h-full w-96 sm:hover:scale-105 transition-all outline outline-transparent sm:hover:outline-slate-500/25 duration-200"
								src={'https://image.tmdb.org/t/p/w780/' + item.poster_path}
								alt={item.title || item.name}
							/>
						</div>
					</a>
				</SplideSlide>
			{/each}
		</SplideTrack>

		<div class="splide__arrows">
			<button class="splide__arrow splide__arrow--prev">&#8249;</button>
			<button class="splide__arrow splide__arrow--next">&#8250;</button>
		</div>
	</Splide>
</div>

<style>
	.splide__arrow {
		background-color: transparent;
		font-size: 4rem;
		transition: opacity 150ms ease-in-out;
		opacity: 0;
	}
	.splide__arrow:hover {
		opacity: 100%;
	}
	.splide__arrow--next {
		right: -50px;
	}
	.splide__arrow--prev {
		left: -50px;
	}
</style>
