<script>
	export let tv_id;
	export let season_number;
	export let name;
	export let poster_path;
	export let release_year;
	export let episode_count;
	export let premiere_date;
	export let season_name;

	if (release_year) {
		release_year = new Date(release_year);
		release_year = release_year.getFullYear();
	}
</script>

{#if season_name === 'Specials'}
	<div class="divider" />
{/if}

{#if release_year}
	<a href={`/tv/${tv_id}` + `/season/` + season_number} class="no-underline">
		<div
			class="season flex bg-base-200 rounded-lg shadow-lg sm:hover:scale-[102.5%] transition-transform"
		>
			<div class="image-wrapper">
				<div class="wrapper w-32 sm:w-36 h-full">
					<img
						class="rounded-l-lg m-0"
						src={'https://image.tmdb.org/t/p/w780/' + poster_path}
						alt={name}
					/>
				</div>
			</div>
			<div class="content-wrapper flex flex-col justify-center px-4 sm:px-8 prose">
				<h2 class="m-0 -mb-5 sm:-mb-4 font-medium text-lg sm:text-2xl">
					{#if season_number === 0}
						Specials
					{:else}
						Season {season_number}
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
					{#if season_number === 0}
						Specials of {name} was released {premiere_date}.
					{:else}
						Season {season_number} of {name} premiered on {premiere_date}.
					{/if}
				</p>
			</div>
		</div>
	</a>
{/if}
