<script>
	import { Splide, SplideSlide, SplideTrack } from '@splidejs/svelte-splide';
	import '@splidejs/svelte-splide/css';
	import { page } from '$app/stores';

	import { dynamicSort, slugify } from '$functions';

	let type = $page.route.id.substring(1);

	let breakpoints = {
		640: { padding: '1.5rem' },

		768: { padding: '2rem', gap: '1rem' },

		1024: { padding: '5rem' },

		1280: { padding: '8rem', gap: '1.5rem' }
	};

	export let data;
	let heroItems = data.map((a) => {
		return { ...a };
	});

	heroItems = heroItems.sort(dynamicSort('-popularity'));
</script>

<Splide
	hasTrack={false}
	options={{
		pagination: false,
		arrows: false,
		autoplay: true,
		interval: 7500,
		padding: '12rem',
		gap: '2rem',
		breakpoints: breakpoints,
		type: 'loop'
	}}
>
	<SplideTrack>
		{#each heroItems.splice(0, 5) as item}
			<SplideSlide class="flex justify-center">
				<a
					href={`/${type}/${item.id}-${slugify(item.title || item.name)}`}
					title={item.title || item.name}
					class="mb-12 mt-1 max-h-[200px] md:max-h-[250px] lg:max-h-[300px] xl:max-h-[400px] w-full relative sm:hover:scale-[101%] transition-transform"
				>
					<img
						class=" shadow-xl shadow-black/50 rounded-xl w-full h-full object-cover"
						src={`https://image.tmdb.org/t/p/original/${item.backdrop_path}`}
						alt={item.title || item.name}
					/>
					<div
						class="absolute flex items-end justify-end bottom-0 rounded-b-xl bg-gradient-to-t from-black/50 w-full h-20"
					>
						<h1 class="md:text-lg sm:text-base text-sm text-slate-200 font-[Poppins] mr-4 mb-2">
							{item.title || item.name}
						</h1>
					</div>
				</a>
			</SplideSlide>
		{/each}
	</SplideTrack>
</Splide>
