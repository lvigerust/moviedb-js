<script>
	export let data;

	import { scrollIntoView } from '$lib/functions/scrollIntoView.js';

	export let carouselTitle = '"Carousel name"';
	let carouselId = 'nyeste';

	export const getItemId = (index) => `${carouselId}-item-${index}`;
</script>

<h1 class="text-2xl font-bold mx-[10px]">{carouselTitle}</h1>
<div class="bg-base-100 flex">
	<!--  -->

	<button
		class="btn absolute left-[6px] w-[calc(24px+3.5vw)] h-[12.5rem] bg-transparent border-transparent"
	/>

	<ul class="flex carousel overflow-x-visible ">
		{#each data as movie, index}
			{#if movie.backdrop_path}
				<li class="shrink-0 snap-start p-[10px] basis-1/4 2xl:basis-1/5 drop-shadow-xl">
					<img
						class="w-full object-contain rounded-lg border-2 border-transparent hover:scale-105 hover:border-white transition-all cursor-pointer"
						src={'https://image.tmdb.org/t/p/w1280/' + movie.backdrop_path}
						alt={movie.title}
					/>
				</li>
			{/if}
		{/each}
	</ul>

	<button
		class="btn absolute right-[6px] w-[calc(24px+3.5vw)] h-[12.5rem] bg-transparent border-transparent"
	/>

	<!--  -->

	<!-- <div class="w-full flex justify-center gap-4">
		<a href="#nyeste-item-0" on:click|preventDefault={scrollIntoView} class="btn "> Left</a>
		<a href="#nyeste-item-6" on:click|preventDefault={scrollIntoView} class="btn ">Right</a>
	</div> -->
</div>
