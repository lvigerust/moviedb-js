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
		class="season flex rounded-lg bg-base-200 shadow-lg transition-transform duration-200 sm:hover:scale-[102.5%]"
	>
		<div class="image-wrapper">
			<div class="wrapper h-full w-32 sm:w-36">
				<img
					class="m-0 rounded-l-lg"
					src={'https://image.tmdb.org/t/p/w780/' + poster}
					alt={`${name} - ${show}`}
				/>
			</div>
		</div>
		<div class="content-wrapper prose flex flex-col justify-center p-4 sm:p-8">
			<h2 class="text-lg font-medium sm:text-2xl">
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
