<script>
	import { scrollIntoView } from '$lib/functions/scrollIntoView.js';

	export let request;

	export let name = 'carousel';
	export let type = '';

	export const getItemId = (index) => `${name}-item-${index}`;
</script>

<div class="flex flex-col items-center">
	<div
		class="carousel w-full rounded-box shadow-xl max-h-96 hover:scale-[100.5%] transition-transform "
	>
		{#each request as media, index}
			<div id={getItemId(index)} class="carousel-item relative w-full">
				<a href={`/${type}/` + media.id} class="overflow-y-hidden">
					<img
						src={'https://image.tmdb.org/t/p/original/' + media.backdrop_path}
						alt={media.title || media.name}
					/>
					<h1 class="text-white text-xl drop-shadow-md  absolute bottom-4 right-5">
						{media.title || media.name}
					</h1>
				</a>
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
