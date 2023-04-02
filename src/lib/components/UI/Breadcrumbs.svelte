<script>
	import { page } from '$app/stores';
	import { slugify } from '$functions';
</script>

<div class="sm-px-2 breadcrumbs flex justify-center py-8 px-4 text-sm">
	<ul class="flex flex-wrap justify-center">
		<li><a href="/">Home</a></li>

		{#if $page.route.id.includes('movie')}
			<li><a href="/movie">Movie</a></li>

			{#if $page.params.movieId}
				{#if $page.data.movieDetails.belongs_to_collection && $page.data.movieDetails.belongs_to_collection.backdrop_path}
					<li>
						<a
							href={`/collection/${$page.data.movieDetails.belongs_to_collection.id}-${slugify(
								$page.data.movieDetails.belongs_to_collection.name
							)}`}>{$page.data.movieDetails.belongs_to_collection.name}</a
						>
					</li>
				{/if}
				<li><a href={$page.url.pathname}>{$page.data.movieDetails.title}</a></li>
			{/if}
		{/if}

		{#if $page.route.id.includes('tv')}
			<li><a href="/tv">TV</a></li>

			{#if $page.params.tvId}
				<li>
					<a href={`/tv/${$page.data.tvDetails.id}-${slugify($page.data.tvDetails.name)}`}
						>{$page.data.tvDetails.name}</a
					>
				</li>
			{/if}

			{#if $page.route.id.includes('seasons')}
				<li><a href={$page.url.pathname}>Seasons</a></li>
			{:else if $page.route.id.includes('season/')}
				<li>
					<a href={`/tv/${$page.data.tvDetails.id}-${slugify($page.data.tvDetails.name)}/seasons`}
						>Season</a
					>
				</li>
				<li><a href={''}>{$page.params.season_number}</a></li>
			{/if}
		{/if}

		{#if $page.route.id.includes('collection')}
			<li><a href="/movie">Movie</a></li>

			<li><a href={$page.url.pathname}>{$page.data.collectionDetails.name}</a></li>
		{/if}

		{#if $page.route.id.includes('search')}
			<li><a href={`/search/${$page.params.searchQuery}`}>Search</a></li>
			<li>
				<a href={`/search/${$page.params.searchQuery}`} class="capitalize"
					>{$page.params.searchQuery}</a
				>
			</li>
		{/if}
	</ul>
</div>
