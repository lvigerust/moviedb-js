<script>
	export let movie;

	const date = new Date(movie.release_date);
</script>

<div class="movie-card mt-7 ">
	<a href={'/movies/' + movie.id}>
		<div class="image hover:scale-105 transition-transform shadow-lg">
			<div class="wrapper">
				<img
					class="rounded-lg"
					src={'https://image.tmdb.org/t/p/w500' + movie.poster_path}
					alt={movie.title}
				/>
			</div>
		</div>
		<div class="content flex flex-col pt-2 px-2 mb-4 gap-1">
			<h2 class="font-bold text-md leading-snug">{movie.title}</h2>
			<p class="text-sm">{date.getFullYear()}</p>
		</div>
	</a>
</div>
