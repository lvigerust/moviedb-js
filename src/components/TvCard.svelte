<script>
	export let show;
</script>

<div class="movie-card">
	<a href={'/tv/' + show.id}>
		<img src={'https://image.tmdb.org/t/p/w500' + show.poster_path} alt={show.name} />
		<div class="description">
			<h2>{show.name}</h2>
		</div>
	</a>
</div>

<style>
	img {
		width: 100%;
		height: 40vh;
		object-fit: cover;
		border-radius: 0.6rem;
		margin-bottom: 0.75rem;
		box-shadow: 0px 7.5px 2vh rgba(25, 25, 25, 0.5);
		transform: scale(1, 1);
		transition: transform 0.5s ease;
	}
	img:hover {
		transform: scale(1.075, 1.075);
	}
	h2 {
		font-size: 1.1rem;
		font-weight: bold;
	}
	.description {
		display: flex;
		flex-direction: column;
		gap: 0.2rem;
		height: 5vh;
		font-size: 0.9rem;
		margin-bottom: 2rem;
	}
	.movie-card {
		display: flex;
		flex-direction: column;
		justify-content: space-around;
		padding: 0.75rem;
		margin: 0 auto;
	}
	@media only screen and (max-width: 640px) {
		img {
			height: 40vh;
		}
		img:hover {
			transform: scale(1, 1);
		}
		.movie-card {
			width: 310px;
		}
	}
	@media only screen and (min-height: 1000px) {
		img {
			height: 30vh;
		}
	}
</style>
