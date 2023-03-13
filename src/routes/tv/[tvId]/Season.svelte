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

	if (release_year && premiere_date) {
		release_year = new Date(release_year).getFullYear();
		premiere_date = dateToSentence(premiere_date);
	}
</script>

{#if name === 'Specials'}
	<div class="divider m-0 sm:my-4" />
{/if}

<a href={`/tv/${id}-${slugify(show)}/season/${number}`} class="no-underline">
	<div
		class="season flex bg-base-200 rounded-lg shadow-lg duration-200 sm:hover:scale-[102.5%] transition-transform"
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
			<h2 class="font-medium text-lg sm:text-2xl">
				{#if number === 0}
					Specials
				{:else}
					{name}
				{/if}
			</h2>
			{#if release_year}
				<p class="m-0 -mt-5 font-semibold">
					{release_year} | {episode_count} episodes
				</p>
			{/if}

			<p class="text-sm sm:text-base">
				{#if number === 0}
					{name} of {show} was released {premiere_date}.
				{:else if premiere_date}
					Season {number} of {show} premiered on {premiere_date}.
				{:else}
					Season {number} of {show}.
				{/if}
			</p>
		</div>
	</div>
</a>
