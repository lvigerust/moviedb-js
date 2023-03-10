<script>
	import { Splide, SplideSlide, SplideTrack } from '@splidejs/svelte-splide';
	import '@splidejs/svelte-splide/css';
	import { page } from '$app/stores';

	import { slugify } from '$functions';

	let type = $page.route.id.substring(1);

	export let data;
	export let name = ' "name" ';

	let breakpoints = {
		428: {
			padding: '1.25rem',
			gap: '.6rem',
			perPage: 2
		},
		640: {
			padding: '1.5rem',
			perPage: 3
		},

		768: {
			padding: '2rem',
			gap: '.75rem',
			perPage: 4
		},

		1024: {
			padding: '3rem',
			perPage: 5
		},

		1280: {
			padding: '5rem'
		},
		1440: {
			perPage: 6
		}
	};
</script>

<div class="bg-base-100 -mt-8 mb-5 sm:-mt-6">
	<h2
		id="carousel-heading"
		class="max-[428px]:pl-5 pl-6 sm:pl-8 md:pl-12 lg:pl-20 xl:pl-32 font-medium sm:font-semibold text-xl sm:text-2xl inline"
	>
		{name}
	</h2>
	<Splide
		class="-mt-3"
		aria-labelledby="carousel-heading"
		hasTrack={false}
		options={{
			pagination: false,
			rewind: true,
			breakpoints: breakpoints,
			perPage: 7,
			speed: 800,
			rewindSpeed: 1200,
			flickPower: 500,
			drag: 'free',
			gap: '1rem',
			padding: '8rem',
			easing: 'cubic-bezier(0.65, 0, 0.35, 1)'
		}}
	>
		<SplideTrack>
			{#each data as item}
				<SplideSlide>
					<a
						href={`/${type}/${item.id}-${slugify(item.title || item.name)}`}
						title={item.title || item.name}
					>
						<div class="flex justify-center my-6 mb-8">
							<img
								class="rounded-lg shadow-lg shadow-black/50 h-full w-96 sm:hover:scale-105 transition-all outline outline-transparent sm:hover:outline-slate-500/25 duration-200"
								src={'https://image.tmdb.org/t/p/w500/' + item.poster_path}
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
		right: -20px;
	}
	.splide__arrow--prev {
		left: -20px;
	}

	#carousel-heading {
		text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.15);
	}
</style>
