<script>
	export let data;

	import { scrollIntoView } from '$lib/functions/scrollIntoView.js';

	export let name = '"Name"';

	let carouselId = name.replace(' ', '');

	export const getItemId = (index) => `${carouselId}-item-${index}`;
</script>

<section>
	<h1 class="text-2xl font-semibold ml-20">{name}</h1>
	<div class="bg-base-100 flex">
		<!--  -->

		<!-- <div class="flex ml-2">
			<a
				data-sveltekit-noscroll
				class="w-16 text-center btn btn-ghost h-full"
				href="#{carouselId}-item-0"
				on:click|preventDefault={scrollIntoView}>Left</a
			>
		</div> -->
		<ul
			class="flex overflow-x-auto gap-6 snap-x snap-mandatory before:shrink-0 before:w-[30vw] after:shrink-0 after:w-[30vw]"
		>
			{#each data as movie, index}
				{#if movie.backdrop_path}
					<li id={getItemId(index)} class="shrink-0 snap-center">
						<img
							class="w-full object-contain rounded-lg border-2 border-transparent hover:scale-105 hover:border-white transition-all cursor-pointer"
							src={'https://image.tmdb.org/t/p/w300/' + movie.backdrop_path}
							alt={movie.title}
						/>
					</li>
				{/if}
			{/each}
		</ul>

		<!-- <div class="flex mr-2">
			<a
				data-sveltekit-noscroll
				class="w-16 text-center btn btn-ghost h-full"
				href="#{carouselId}-item-8"
				on:click|preventDefault={scrollIntoView}
			>
				Right
			</a>
		</div> -->
	</div>
</section>
