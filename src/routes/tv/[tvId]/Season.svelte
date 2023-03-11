<script>
	import { slugify, dateToSentence } from '$functions';

	export let show;
	export let id;
	export let number;
	export let name;
	export let release_year;
	export let premiere_date;
	export let episode_count;
	export let poster;

	release_year = new Date(release_year).getFullYear();
	premiere_date = dateToSentence(premiere_date);
</script>

{#if name === 'Specials'}
	<div class="divider" />
{/if}

<a href={`/tv/${id}-${slugify(show)}/season/${number}`} class="no-underline">
	<div
		class="season flex bg-base-200 rounded-lg shadow-lg sm:hover:scale-[102.5%] transition-transform"
	>
		<div class="image-wrapper">
			<div class="wrapper w-32 sm:w-36 h-full">
				<img
					class="rounded-l-lg m-0"
					src={'https://image.tmdb.org/t/p/w780/' + poster}
					alt={`${show}-${name}`}
				/>
			</div>
		</div>
		<div class="content-wrapper flex flex-col justify-center px-4 sm:px-8 prose">
			<h2 class="m-0 -mb-5 sm:-mb-4 font-medium text-lg sm:text-2xl">
				{#if number === 0}
					Specials
				{:else}
					{name}
				{/if}
			</h2>
			<div class="flex gap-2 font-semibold text-md sm:text-lg">
				{#if release_year}
					<p>{release_year}</p>
					<p>|</p>
					<p>{episode_count} episodes</p>
				{/if}
			</div>

			<p class="m-0 text-sm sm:text-base">
				{#if number === 0}
					{name} of {show} was released {premiere_date}.
				{:else}
					{name} of {show} premiered on {premiere_date}.
				{/if}
			</p>
		</div>
	</div>
</a>
