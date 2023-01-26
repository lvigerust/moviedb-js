<script>
	import { scrollIntoView } from '$lib/scrollIntoView.js';

	export let request;

	export let name = 'carousel';

	export const getItemId = (index) => `${name}-item-${index}`;
</script>

<div class="flex flex-col items-center">
	<div class="carousel w-full rounded-box shadow-xl max-h-96 ">
		{#each request as media, index}
			<div id={getItemId(index)} class="carousel-item relative w-full">
				<img
					src={'https://image.tmdb.org/t/p/original/' + media.backdrop_path}
					alt={media.title || media.name}
					class="w-full object-cover"
				/>
				<h1 class="text-white text-xl drop-shadow-md  absolute bottom-4 right-5">
					{media.title || media.name}
				</h1>
			</div>
		{/each}
	</div>

	<nav class="flex justify-center w-full py-6 gap-2">
		{#each request as { }, index}
			<a
				href={`#${getItemId(index)}`}
				on:click|preventDefault={scrollIntoView}
				class="btn btn-xs drop-shadow-sm ">{index + 1}</a
			>
		{/each}
	</nav>
</div>
