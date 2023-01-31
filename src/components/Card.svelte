<script>
	export let request;

	const releaseDate = new Date(request.release_date || request.first_air_date);
	const releaseYear = releaseDate.getFullYear();

	export let type = '';
</script>

<div class="card mt-7">
	<a href={`/${type}/` + request.id}>
		<div class="image sm:hover:scale-105 transition-transform shadow-lg">
			<div class="wrapper">
				<img
					class="rounded-lg"
					src={'https://image.tmdb.org/t/p/w500' + request.poster_path}
					alt={request.title || request.name}
				/>
			</div>
		</div>
	</a>
	<div class="content flex flex-col pt-2 px-2 mb-4 gap-1">
		<h2 class="font-bold text-md leading-snug">{request.title || request.name}</h2>
		{#if releaseYear}
			<p class="text-sm">{releaseYear}</p>
		{/if}
	</div>
</div>
