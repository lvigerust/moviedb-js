<script>
	export let details;
	export let type;

	let typeFormatted = type;
	if (typeFormatted == 'tv') {
		typeFormatted = type.toUpperCase();
	} else {
		typeFormatted = type.charAt(0).toUpperCase() + type.slice(1);
	}
</script>

<div class="text-sm breadcrumbs flex justify-center my-8">
	<ul class="flex flex-wrap justify-center">
		<li><a href="/">Home</a></li>
		<li><a href="/{type}">{typeFormatted}</a></li>

		{#if details}
			{#if details.belongs_to_collection}
				<li>
					<a href={'/collection/' + details.belongs_to_collection.id}
						>{details.belongs_to_collection.name}</a
					>
				</li>
			{/if}
			{#if details.episodes}
				<li>{details.episodes[0].show_id}</li>
			{/if}
			<li>{details.name || details.title}</li>
		{/if}
	</ul>
</div>
