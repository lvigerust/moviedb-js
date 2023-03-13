<script>
	import { slugify } from '$functions';

	export let data;
	export let info = false;
	export let margin = true;

	let marginClasses;
	if (margin) {
		marginClasses = 'my-6 sm:mb-8';
	}

	let type;
	let release_date;

	if (data.title) {
		type = 'movie';
		if (data.release_date) {
			release_date = new Date(data.release_date).getFullYear();
		}
	} else if (data.name) {
		type = 'tv';

		if (data.first_air_date) {
			release_date = new Date(data.first_air_date).getFullYear();
		}
	}
</script>

<a href={`/${type}/${data.id}-${slugify(data.title || data.name)}`} title={data.title || data.name}>
	<div class={marginClasses}>
		<img
			class="h-full w-96 rounded-lg shadow-lg shadow-black/30 outline outline-transparent transition-all duration-200 sm:hover:scale-105 sm:hover:outline-slate-500/25"
			src={'https://image.tmdb.org/t/p/w500/' + data.poster_path}
			alt={data.title || data.name}
		/>

		{#if info}
			<div class="prose mt-3">
				<h4 class="mb-0 text-sm sm:text-base">{data.title || data.name}</h4>
				{#if release_date}
					<h5 class="text-xs sm:text-sm">{release_date}</h5>
				{/if}
			</div>
		{/if}
	</div>
</a>
