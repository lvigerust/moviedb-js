<script>
	import { page } from '$app/stores';

	let routeId = $page.route.id.substring(1);

	let route = {
		media_type: '',
		media_collection: '',
		media_title: '',
		media_id: '',
		collection_id: '',
		seasons: false,
		season_number: ''
	};

	function getRouteInfo() {
		if (routeId.includes('movie') || routeId.includes('collection')) {
			route.media_type = 'movie';

			if ($page.data.collectionDetails) {
				if ($page.data.collectionDetails.backdrop_path) {
					route.media_collection = $page.data.collectionDetails.name;
					route.collection_id = $page.data.collectionDetails.id;
				}
			} else if ($page.data.movieDetails) {
				route.media_title = $page.data.movieDetails.title;
				route.media_id = $page.data.movieDetails.id;
				if (
					$page.data.movieDetails.belongs_to_collection &&
					$page.data.movieDetails.belongs_to_collection.backdrop_path
				) {
					route.media_collection = $page.data.movieDetails.belongs_to_collection.name;
					route.collection_id = $page.data.movieDetails.belongs_to_collection.id;
				}
			}
		} else if (routeId.includes('tv')) {
			route.media_type = 'tv';
			if ($page.data.tvDetails) {
				route.media_title = $page.data.tvDetails.name;
				route.media_id = $page.data.tvDetails.id;
				if (routeId.includes('seasons')) {
					route.seasons = true;
				} else if ($page.data.seasonDetails) {
					route.season_number = $page.data.seasonDetails.season_number;
				}
			}
		}
	}

	getRouteInfo();

	let {
		media_type,
		media_id,
		media_title,
		media_collection,
		seasons,
		season_number,
		collection_id
	} = route;
</script>

<div class="text-sm breadcrumbs flex justify-center py-8">
	<ul class="flex flex-wrap justify-center">
		<li><a href="/">Home</a></li>

		{#if media_type === 'tv'}
			<li><a href="/{media_type}" class="uppercase">{media_type}</a></li>

			{#if media_title}
				<li><a href="/{media_type}/{media_id}">{media_title}</a></li>
			{/if}

			{#if seasons}
				<li><a href="/{media_type}/{media_id}/seasons">Seasons</a></li>
			{:else if season_number}
				<li><a href="/{media_type}/{media_id}/seasons">Season</a></li>
				<li>
					<a href="/{media_type}/{media_id}/season/{season_number}">{season_number}</a>
				</li>
			{/if}

			<!-- ----- Movie Route ----- -->
		{:else if media_type === 'movie'}
			<li><a href="/{media_type}" class="capitalize">{route.media_type}</a></li>
			{#if media_collection}
				<li><a href="/collection/{collection_id}">{media_collection}</a></li>

				{#if media_title}
					<li>
						<a href="/{media_type}/{media_id}">{media_title}</a>
					</li>
				{/if}
			{:else if media_title}
				<li>
					<a href="/{media_type}/{media_id}">{media_title}</a>
				</li>
			{/if}
		{/if}

		{#if $page.params.searchQuery}
			<li><a href="/">Search</a></li>
			<li><a href={''} class="capitalize">{$page.params.searchQuery}</a></li>
		{/if}
	</ul>
</div>
