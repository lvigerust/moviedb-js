<script>
	export let request;
</script>

<div class="hero min-h-[calc(100vh-200px)] bg-base-100 overflow-hidden">
	<div class="hero-content text-center">
		<div class="max-w-4xl">
			<div class="carousel w-full rounded-box shadow-xl">
				{#each request as media, index}
					<div id={`item${index}`} class="carousel-item relative w-full">
						<img
							src={'https://image.tmdb.org/t/p/w1280/' + media.backdrop_path}
							alt={media.title || media.name}
							class="w-full"
						/>
						<h1 class="text-white text-xl drop-shadow-md  absolute bottom-4 right-5">
							{media.title || media.name}
						</h1>
					</div>
				{/each}
			</div>
			<div class="flex justify-center w-full py-4 gap-2">
				{#each request as media, index}
					<a href={`#item${index}`} class="btn btn-xs">{index + 1}</a>
				{/each}
			</div>
		</div>
	</div>
</div>
