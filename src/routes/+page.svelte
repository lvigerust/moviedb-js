<script>
	import { Search, Breadcrumbs } from '$components';

	export let data;
	let { movieDetails } = data;
</script>

<div class="hero full-hero">
	<div class="sm:container w-full h-full flex flex-col">
		<div class="hero h-full">
			<div class="hero-content text-center h-full flex flex-col center gap-20">
				<div class="text-start py-40">
					<a href="/" class="">
						<h1 class="text-4xl  sm:text-5xl font-bold inline ">Velkommen</h1>
					</a>
					<h4 class="text-2xl sm:text-3xl font-semibold py-6">
						Millioner av filmer, TV-serier og personer å oppdage. Utforsk nå.
					</h4>
					<Search />
				</div>
			</div>
		</div>

		<Breadcrumbs />
	</div>
</div>
