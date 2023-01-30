<script>
	export let providersNO;
	export let streamProvidersNO;
	export let buyProvidersNO;
	// export let rentProvidersNO;
</script>

<a href={providersNO.link} target="_blank" rel="noreferrer">
	<div class="providers">
		<div class="p-2 shadow-md pb-1 rounded-md my-3 bg-base-200 lg:mt-7 lg:mr-4 w-fit">
			<div class="flex flex-col-reverse justify-center gap-[0.25rem]">
				<p class="text-[8px] font-light text-center border-t border-base-300 ">
					Provided by JustWatch
				</p>
				{#if streamProvidersNO != ''}
					{#each streamProvidersNO.slice(0, 1) as streamProvidersNO}
						<div class="flex items-center justify-between gap-2">
							<div class="logo">
								<img
									class="w-10 h-10 rounded-md"
									src={'http://image.tmdb.org/t/p/w500/' + streamProvidersNO.logo_path}
									alt={streamProvidersNO.provider_name}
								/>
							</div>
							<div class="text text-start leading-5 text-sm">
								<p class="font-light">Stream on</p>
								<p class="font-bold">{streamProvidersNO.provider_name}</p>
							</div>
						</div>
					{/each}
				{:else if buyProvidersNO != ''}
					{#each buyProvidersNO.slice(0, 1) as buyProvidersNO}
						<div class="flex items-center justify-between gap-2">
							<div class="logo">
								<img
									class="w-10 h-10 rounded-md"
									src={'http://image.tmdb.org/t/p/w500/' + buyProvidersNO.logo_path}
									alt={buyProvidersNO.provider_name}
								/>
							</div>
							<div class="text text-start leading-5 text-sm">
								<p class="font-light">Available on</p>
								<p class="font-bold">{buyProvidersNO.provider_name}</p>
							</div>
						</div>
					{/each}
				{/if}
			</div>
		</div>
	</div>
</a>
