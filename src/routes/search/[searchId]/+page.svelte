<script>
	export let data;
	export let { search } = data;
</script>

<svelte:head>
	<title>Search</title>
</svelte:head>

<div
	class="container min-h-[calc(100vh-64px-1rem-2.5rem)] lg:min-h-[calc(100vh-80px-3rem-3rem)] pb-12 flex flex-col  gap-8 justify-center items-center"
>
	{#each search as result}
		<h1>{result.id}</h1>
	{/each}
</div>
