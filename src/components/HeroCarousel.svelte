<script>
	import { Splide, SplideSlide, SplideTrack } from '@splidejs/svelte-splide';
	import '@splidejs/svelte-splide/css';
	import { page } from '$app/stores';
	import { fly } from 'svelte/transition';

	import { slugify } from '$functions';

	let type = $page.route.id.substring(1);
	let breakpoints = {
		640: { padding: '1.5rem' },

		768: { padding: '2rem', gap: '1rem' },

		1024: { padding: '5rem' },

		1280: { padding: '8rem', gap: '1.5rem' }
	};

	export let data;

	console.log(data[0]);
</script>

<Splide
	class="mb-2"
	hasTrack={false}
	options={{
		// wheel: true,
		// waitForTransition: true,
		// wheelMinThreshold: 15,
		pagination: false,
		arrows: false,
		autoplay: false,
		interval: 10000,
		// speed: 2000,
		easing: 'cubic-bezier(.65, 1.2, 0.45, 1)',
		padding: '9rem',
		gap: '2rem',
		breakpoints: breakpoints,
		type: 'loop'
	}}
>
	<SplideTrack>
		{#each data.slice(0, 6) as item}
			<SplideSlide class="flex justify-center">
				<a
					href={`/${type}/${item.id}-${slugify(item.title || item.name)}`}
					title={item.title || item.name}
					class="mb-12 mt-1 max-h-[200px] md:max-h-[250px] lg:max-h-[300px] xl:max-h-[400px] w-full relative sm:hover:scale-[101%] transition-transform"
				>
					<img
						class="shadow-xl shadow-black/50 rounded-xl w-full h-full object-cover"
						src={`https://image.tmdb.org/t/p/original/${item.backdrop_path}`}
						alt={item.title || item.name}
					/>

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
						{#if item.last_episode_to_air}
							<button
								class="btn btn-ghost rounded-full btn-xs  sm:btn-md left-3 bottom-3 sm:bottom-1 lg:left-16 lg:bottom-6 absolute"
							>
								{#if item.last_episode_to_air.episode_number === item.number_of_episodes}
									Strøm sesongfinalen nå
								{:else}
									Strøm episode {item.last_episode_to_air.episode_number} nå
								{/if}
							</button>
						{/if}
					</div>
				</a>
			</SplideSlide>
		{/each}
	</SplideTrack>
</Splide>
