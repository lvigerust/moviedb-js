<script>
	import { scrollIntoView } from '$lib/functions/scrollIntoView.js';

	$: cur = 0;

	$: next = cur;
	$: prev = cur;

	function increase() {
		if (cur === data.length - 1) {
			next = 0;
			cur = next;
		} else {
			next += 1;
			cur = next;
		}
	}
	function decrease() {
		if (cur > 0) {
			prev -= 1;
			cur = prev;
		} else {
			prev = data.length - 1;
			cur = prev;
		}
	}

	export let data;

	export const getItemId = (index) => `carousel-item-${index}`;
</script>

<div
	class="flex overflow-x-hidden gap-6 snap-x snap-mandatory before:shrink-0 before:w-[33.3vw] after:shrink-0 after:w-[33.3vw] scroll-smooth"
>
	{#each data as movie, index}
		<div id={getItemId(index)} class="shrink-0 snap-center rounded-lg">
			<img
				class="w-full h-80 object-contain rounded-lg"
				src={'https://image.tmdb.org/t/p/w780/' + movie.backdrop_path}
				alt={movie.title}
			/>

			<!-- BUTTONS HERE -->
			<!-- INDICATOR DOTS HERE -->
		</div>
	{/each}
	<div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
		<a on:click={decrease} href={`#${getItemId(prev)}`} class="btn btn-circle"> ❮ </a>
		<a on:click={increase} href={`#${getItemId(next)}`} class="btn btn-circle"> ❯ </a>
	</div>
</div>

<!-- <nav>
	{#each data as movie, index}
		<li>
			<a on:click|preventDefault={scrollIntoView} href={`#${getItemId(index)}`}>{index}</a>
		</li>
	{/each}
</nav> -->

<!-- PREV/NEXT BUTTONS -->
<!-- 
    <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
        <button class="btn btn-circle" on:click={() => prev()}> ❮ </button>
        <button class="btn btn-circle" on:click={() => next()}> ❯ </button>
    </div>
-->

<!-- INDICATOR DOTS -->
<!-- 
    <div class="flex justify-center w-full py-2 gap-2 absolute bottom-0">
        {#each data as movie, i}
            <button
                on:click={() => changeSlide(i)}
                class="w-2 h-2 bg-white rounded-full opacity-30 mb-1 mx-[1px]"
                class:opacity-100={cur == i}
            />
        {/each}
    </div> 
-->

<!-- BACKUP CODE -->
<!-- 
    {#if index === cur}
        <div class="shrink-0 snap-center">
            <img src={'https://image.tmdb.org/t/p/w780/' + movie.backdrop_path} alt={movie.title} />
    {/if}
 -->
