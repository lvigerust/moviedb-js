<script>
	export let providers;

	const link = providers.link;
	let provider;
	let message;

	if (providers.flatrate) {
		provider = providers.flatrate[0];
		message = 'Stream on';
	} else if (providers.rent) {
		provider = providers.rent[0];
		message = 'Rent on';
	} else {
		provider = providers.buy[0];
		message = 'Buy on';
	}
</script>

<div class="w-fit">
	<a href={link} target="_blank" rel="noreferrer">
		<div class="providers">
			<div class="my-3 w-fit rounded-md bg-base-200 p-2 pb-1 shadow-md lg:mt-7 lg:mr-4">
				<div class="flex flex-col-reverse justify-center gap-[0.25rem]">
					<p class="border-t border-base-300 text-center text-[8px] font-light ">
						Provided by JustWatch
					</p>
					<div class="flex items-center justify-between gap-2">
						<div class="logo">
							<img
								class="h-10 w-10 rounded-md"
								src={'http://image.tmdb.org/t/p/w500/' + provider.logo_path}
								alt={provider.provider_name}
							/>
						</div>
						<div class="text text-start text-sm leading-5">
							<p class="font-light">{message}</p>
							<p class="font-bold">{provider.provider_name}</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	</a>
</div>
