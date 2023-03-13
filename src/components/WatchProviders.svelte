<script>
	export let providers;

	function getProviders(providers) {
		let norwegianProviders = providers.results.NO;
		let provider;

		if (norwegianProviders) {
			if (norwegianProviders.flatrate) {
				provider = norwegianProviders.flatrate;
			} else if (norwegianProviders.rent) {
				provider = norwegianProviders.rent;
			} else {
				provider = norwegianProviders.buy;
			}
		}
		return provider[0];
	}

	const link = providers.results.NO.link;
	const provider = getProviders(providers);
</script>

<div class="w-fit">
	<a href={link} target="_blank" rel="noreferrer">
		<div class="providers">
			<div class="p-2 shadow-md pb-1 rounded-md my-3 bg-base-200 lg:mt-7 lg:mr-4 w-fit">
				<div class="flex flex-col-reverse justify-center gap-[0.25rem]">
					<p class="text-[8px] font-light text-center border-t border-base-300 ">
						Provided by JustWatch
					</p>
					<div class="flex items-center justify-between gap-2">
						<div class="logo">
							<img
								class="w-10 h-10 rounded-md"
								src={'http://image.tmdb.org/t/p/w500/' + provider.logo_path}
								alt={provider.provider_name}
							/>
						</div>
						<div class="text text-start leading-5 text-sm">
							<p class="font-light">Watch on</p>
							<p class="font-bold">{provider.provider_name}</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	</a>
</div>
