<script>
	import { Search } from '$components';
	import { fly } from 'svelte/transition';
</script>

<div in:fly={{ y: 500, delay: 400 }} out:fly={{ y: -500 }} class="full-hero flex items-center">
	<div class="px-4 sm:container">
		<div class="mx-auto max-w-4xl py-40 text-start">
			<h1 class="inline text-4xl font-semibold sm:text-5xl ">Velkommen</h1>
			<h4 class="py-6 text-2xl font-medium sm:text-3xl">
				Millioner av filmer, TV-serier og personer å oppdage. Utforsk nå. testcommit
			</h4>
			<Search />
		</div>
	</div>
</div>
