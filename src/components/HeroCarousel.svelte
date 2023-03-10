<script>
	import { Splide, SplideSlide, SplideTrack } from '@splidejs/svelte-splide';
	import '@splidejs/svelte-splide/css';
	import { page } from '$app/stores';
	import { fly } from 'svelte/transition';

	import { slugify, dynamicCTA } from '$functions';

	let type = $page.route.id.substring(1);
	let startIndex = Math.round(Math.random() * 10);

	export let data;

	// Generate CTA
	if (type === 'tv') {
		data.forEach((show) => {
			show.CTA = dynamicCTA(show);
		});
	} else if (type === 'movie') {
		data.forEach((movie) => {
			movie.CTA = dynamicCTA(movie);
		});
	}

	let breakpoints = {
		428: {
			padding: '1rem'
		},
		640: { padding: '5rem', gap: '1.25rem' },

		768: { padding: '6rem', gap: '1.5rem' },

		1024: { padding: '10rem' },

		1280: { padding: '12rem', gap: '2rem' },
		1500: { padding: '15rem', gap: '2.5rem' }
	};
</script>

<Splide
	class="mb-2 lg:mb-6"
	hasTrack={false}
	options={{
		// wheel: true,
		// waitForTransition: true,
		// wheelMinThreshold: 15,
		pagination: false,
		arrows: false,
		autoplay: true,
		interval: 10000,
		start: startIndex,
		breakpoints: breakpoints,
		// speed: 2000,
		easing: 'cubic-bezier(.65, 1.2, 0.45, 1)',
		padding: '17rem',
		gap: '3rem',
		type: 'loop'
	}}
>
	<SplideTrack>
		{#each data.slice(0, 10) as item}
			<SplideSlide class="flex justify-center">
				<a
					href={`/${type}/${item.id}-${slugify(item.title || item.name)}`}
					title={item.title || item.name}
					class="mb-12 mt-1 max-h-[200px] sm:max-h-[250px] md:max-h-[300px] lg:max-h-[350px] xl:max-h-[400px] 2xl:max-h-[480px] w-full relative sm:hover:scale-[101%] transition-all outline outline-transparent rounded-xl sm:hover:outline-slate-500/25 duration-200"
				>
					<img
						class="shadow-xl shadow-black/50 rounded-xl w-full h-full object-cover"
						src={`https://image.tmdb.org/t/p/original/${item.backdrop_path}`}
						alt={item.title || item.name}
					/>

					{#if item.displayNetwork === true}
						<div class="absolute top-6 right-8 opacity-75">
							<img
								class="h-full w-28 object-contain"
								src={`http://image.tmdb.org/t/p/w500/${item.networks[0].logo_path}`}
								alt=""
							/>
						</div>
					{/if}

					{#if item.images && item.images.logos[0]}
						<div
							in:fly={{ x: 50, duration: 600, delay: 150 }}
							class="logo absolute bottom-4 lg:bottom-9 right-6 z-10 opacity-90 lg:right-12"
						>
							<img
								class="h-full w-[calc(100vw/3)] max-w-xs object-contain drop-shadow-2xl"
								src={'https://image.tmdb.org/t/p/w500/' + item.images.logos[0].file_path}
								alt={item.title}
							/>
						</div>
					{/if}
					<div
						class="absolute flex items-end justify-end bottom-0 rounded-b-xl bg-gradient-to-t from-black/50 w-full h-1/2"
					>
						{#if item.CTA}
							<button
								class="btn btn-ghost text-slate-300/90 rounded-full btn-xs  sm:btn-md left-3 bottom-3 sm:bottom-1 lg:left-12 xl:left-16 lg:bottom-6 absolute normal-case"
							>
								{item.CTA}
							</button>
						{/if}
					</div>
				</a>
			</SplideSlide>
		{/each}
	</SplideTrack>
</Splide>
