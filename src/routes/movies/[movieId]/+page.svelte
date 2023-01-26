<script>
	export let data;

	const { details } = data;
</script>

<div class="container">
	<div class="movie-details px-8 xl:mx-[10vw]">
		<div class="img-container">
			<img
				class="rounded-lg shadow-xl xl:rounded-xl"
				src={'https://image.tmdb.org/t/p/w1280/' + details.backdrop_path}
				alt={details.title}
			/>
		</div>
		<div class="txt-container prose my-6 lg:mt-10 text-center md:text-start lg:max-w-[85%]">
			<h1 class="text-2xl lg:text-3xl">{details.title}</h1>
			<p class="overview">{details.overview}</p>
			<p>
				<span>Rating:</span>
				{Math.round(details.vote_average * 10) / 10} / 10<br />
				<span>Runtime:</span>
				{details.runtime}
			</p>
		</div>
	</div>
</div>
