<script>
	import { Splide, SplideSlide, SplideTrack } from '@splidejs/svelte-splide';
	import '@splidejs/svelte-splide/css';
	import { PosterCard } from '$components';
	import { onMount } from 'svelte';

	let desktop = true;
	onMount(() => {
		desktop = !isTouchDevice();
		function isTouchDevice() {
			return (
				'ontouchstart' in window || navigator.maxTouchPoints > 0 || navigator.msMaxTouchPoints > 0
			);
		}
	});

	let options = {
		pagination: false,
		arrows: desktop,
		rewind: true,
		breakpoints: {
			390: {
				perPage: 2
			},
			640: {
				padding: '1rem',
				gap: '.6rem',
				perPage: 3
			},

			768: {
				padding: '2rem',
				gap: '.6rem',
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
				gap: '.8rem'
			},
			1900: {
				perPage: 7
			}
		},
		perPage: 9,
		speed: 800,
		rewindSpeed: 1200,
		flickPower: 500,
		drag: 'free',
		gap: '1rem',
		padding: '5rem',
		easing: 'cubic-bezier(0.65, 0, 0.35, 1)'
	};

	export let data;
	export let name = ' "name" ';
</script>

<h2
	id="carousel-heading"
	class="inline pl-6 text-lg font-medium max-[428px]:pl-4 sm:pl-8 sm:text-xl sm:font-semibold md:pl-12 lg:pl-20 xl:pl-20 xl:text-2xl"
>
	{name}
</h2>
<Splide class="-mt-4" aria-labelledby="carousel-heading" hasTrack={false} {options}>
	<SplideTrack>
		{#each data as item}
			{#if item.poster_path}
				<SplideSlide>
					<PosterCard data={item} />
				</SplideSlide>
			{/if}
		{/each}
	</SplideTrack>

	{#if desktop}
		<div class="splide__arrows">
			<button class="splide__arrow splide__arrow--prev">&#8249;</button>
			<button class="splide__arrow splide__arrow--next">&#8250;</button>
		</div>
	{/if}
</Splide>

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
		text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.1);
	}
</style>
