<script>
	import { Search } from '$components';
	import { fly } from 'svelte/transition';
</script>

<div in:fly={{ y: 500, delay: 400 }} out:fly={{ y: -500 }} class="full-hero">
	<div class="flex h-full w-full flex-col sm:container">
		<div class="center hero-content flex h-full flex-col gap-20 text-center">
			<div class="py-40 text-start">
				<a href="/" class="">
					<h1 class="inline  text-4xl font-bold sm:text-5xl ">Velkommen</h1>
				</a>
				<h4 class="py-6 text-2xl font-semibold sm:text-3xl">
					Millioner av filmer, TV-serier og personer å oppdage. Utforsk nå.
				</h4>
				<Search />
			</div>
		</div>
	</div>
</div>
