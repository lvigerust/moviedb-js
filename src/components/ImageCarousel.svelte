<script>
	export let request;
</script>

<div class="bg-base-200 w-screen mt-4 py-6 sm:pl-52">
	<ul
		class="carousel flex overflow-x-auto gap-6 snap-x snap-mandatory 
		before:shrink-0 before:w-[30vw] sm:before:w-0 
		after:shrink-0 after:w-[30vw] sm:after:w-0 "
	>
		{#each request.slice(0, 10) as item}
			<li class="shrink-0 snap-center my-2">
				<div class="carousel-item flex flex-col items-center gap-3 shadow-md">
					<div class="w-72">
						<img
							src={'https://image.tmdb.org/t/p/original/' + item.file_path}
							alt={item.id}
							class="w-full rounded-xl "
						/>
					</div>
					<!-- <p class="font-light ">{item.id}</p> -->
				</div>
			</li>
		{/each}
	</ul>
</div>
