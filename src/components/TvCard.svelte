<script>
	export let show;

	const date = new Date(show.first_air_date);
</script>

<div class="movie-card mt-7 ">
	<a href={'/movie/' + show.id}>
		<div class="image hover:scale-105 transition-transform shadow-lg">
			<div class="wrapper">
				<img
					class="rounded-lg"
					src={'https://image.tmdb.org/t/p/w500' + show.poster_path}
					alt={show.name}
				/>
			</div>
		</div>
		<div class="content flex flex-col pt-2 mb-4 gap-1">
			<h2 class="font-bold text-md">{show.name}</h2>
			<p class="text-sm">
				{date.getFullYear()}
			</p>
		</div>
	</a>
</div>
