<script>
	export let collectionDetails = {};
	export let movieDetails = {};
	export let tvDetails = {};
	export let seasonDetails = {};
	export let popularMovies = {};
	export let popularTv = {};
	export let query = '';

	const queryFormatted = query.charAt(0).toUpperCase() + query.slice(1);
</script>

<div class="text-sm breadcrumbs flex justify-center my-8">
	<ul class="flex flex-wrap justify-center">
		<li><a href="/">Home</a></li>

		{#if query}
			<li>Search</li>

			<li><a href={'#'}>{queryFormatted}</a></li>
		{/if}

		{#if popularMovies.length > 0}
			<li><a href="/movie">Movie</a></li>
			<li>Popular</li>
		{/if}
		{#if popularTv.length > 0}
			<li><a href="/tv">TV</a></li>
			<li>Popular</li>
		{/if}

		{#if movieDetails.title}
			<li><a href="/movie">Movie</a></li>
			{#if movieDetails.belongs_to_collection}
				<li>
					<a href={`/collection/` + movieDetails.belongs_to_collection.id}
						>{movieDetails.belongs_to_collection.name}</a
					>
				</li>
			{/if}
			<li>{movieDetails.title}</li>
		{/if}

		{#if collectionDetails.name}
			<li><a href="/movie">Movie</a></li>
			<li>{collectionDetails.name}</li>
		{/if}

		{#if tvDetails.name}
			<li><a href="/tv">TV</a></li>
			{#if seasonDetails.name}
				<li>
					<a href={`/tv/` + tvDetails.id}>{tvDetails.name}</a>
				</li>
				<li>{seasonDetails.name}</li>
			{:else}
				<li>
					{tvDetails.name}
				</li>
			{/if}
		{/if}
	</ul>
</div>
