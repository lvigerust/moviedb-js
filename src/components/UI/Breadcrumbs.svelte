<script>
	import { page } from '$app/stores';

	let route = $page.route.id.substring(1);
	let subRoute = false;

	if (route.includes('movie')) {
		route = 'movie';
	} else if (route.includes('tv')) {
		if (route.includes('seasons')) {
			route = 'tv';
			subRoute = true;
		} else route = 'tv';
	}
</script>

<div class="text-sm breadcrumbs flex justify-center py-8">
	<ul class="flex flex-wrap justify-center">
		<!-- ---------- ROOT ---------- -->
		<li><a href="/">Home</a></li>

		<!-- ---------- MOVIE ROUTE ---------- -->
		{#if route === 'movie'}
			<li><a href="/{route}" class="capitalize">{route}</a></li>

			{#if $page.data.movieDetails}
				{#if $page.data.movieDetails.belongs_to_collection && $page.data.movieDetails.belongs_to_collection.backdrop_path}
					<li>
						<a href="/collection/{$page.data.movieDetails.belongs_to_collection.id}"
							>{$page.data.movieDetails.belongs_to_collection.name}</a
						>
					</li>
				{/if}

				<li>
					<a href="/{route}/{$page.data.movieDetails.id}">{$page.data.movieDetails.title}</a>
				</li>
			{/if}

			<!-- ---------- TV ROUTE ---------- -->
		{:else if route === 'tv'}
			<li><a href="/{route}" class="uppercase">{route}</a></li>
			{#if $page.data.tvDetails}
				<li>
					<a href="/{route}/{$page.data.tvDetails.id}">{$page.data.tvDetails.name}</a>
				</li>

				{#if subRoute}
					<li><a href="/{route}/{$page.data.tvDetails.id}/seasons">Seasons</a></li>
				{/if}

				{#if $page.data.seasonDetails}
					<li><a href="/{route}/{$page.data.tvDetails.id}/seasons">Season</a></li>
					<li>
						<a href={''}> {$page.data.seasonDetails.season_number}</a>
					</li>
				{/if}
			{/if}
		{:else if $page.data.collectionDetails}
			<li><a href="/movie">Movie</a></li>
			<li><a href="/{route}">{$page.data.collectionDetails.name}</a></li>
		{/if}
	</ul>
</div>
