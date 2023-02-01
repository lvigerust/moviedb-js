<script>
	export let type = '';
	export let list = 'Popular';
	export let parent = '';
	export let children = '';

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

		{#if list}
			<li><a href={'#'}>{list}</a></li>
		{/if}
		{#if parent}
			<li><a href={'#'}>{parent}</a></li>
		{/if}
		{#if children}
			<li><a href={'#'}>{children}</a></li>
		{/if}
	</ul>
</div>
