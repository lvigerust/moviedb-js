<script>
	import { Splide, SplideSlide, SplideTrack } from '@splidejs/svelte-splide';
	import '@splidejs/svelte-splide/css';
	import { Card } from '$components';

	export let data;
	export let name = ' "name" ';

	let breakpoints = {
		390: {
			gap: '.6rem',
			perPage: 2
		},
		640: {
			padding: '1rem',
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
			perPage: 6,
			gap: '1rem'
		},
		1900: {
			perPage: 7
		}
	};
</script>

<h2
	id="carousel-heading"
	class="max-[428px]:pl-4 pl-6 sm:pl-8 md:pl-12 lg:pl-20 xl:pl-24 font-medium sm:font-semibold text-xl sm:text-2xl inline"
>
	{name}
</h2>
<Splide
	class="-mt-4"
	aria-labelledby="carousel-heading"
	hasTrack={false}
	options={{
		pagination: false,
		arrows: false,
		rewind: true,
		breakpoints: breakpoints,
		perPage: 9,
		speed: 800,
		rewindSpeed: 1200,
		flickPower: 500,
		drag: 'free',
		gap: '1.1rem',
		padding: '6rem',
		easing: 'cubic-bezier(0.65, 0, 0.35, 1)'
	}}
>
	<SplideTrack>
		{#each data as item}
			<SplideSlide>
				<Card data={item} />
			</SplideSlide>
		{/each}
	</SplideTrack>

	<!-- <div class="splide__arrows">
		<button class="splide__arrow splide__arrow--prev">&#8249;</button>
		<button class="splide__arrow splide__arrow--next">&#8250;</button>
	</div> -->
</Splide>

<style>
	/* .splide__arrow {
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
	} */

	#carousel-heading {
		text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.1);
	}
</style>
