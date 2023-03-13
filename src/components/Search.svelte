<script>
	import { goto } from '$app/navigation';

	function submitSearch() {
		goto('/search/' + searchTerm);
		loading = true;
		buttonText = '';
	}

	let searchTerm = '';
	let loading = false;
	let buttonText = 'Søk';
</script>

<div class="search flex w-full flex-col items-center gap-3">
	<form on:submit|preventDefault={submitSearch} class="search form-control w-full">
		<label for="search" />
		<input
			bind:value={searchTerm}
			type="text"
			placeholder="Søk etter film eller TV-serie"
			autocomplete="off"
			class="input-bordered input w-full rounded-full text-sm"
		/>
	</form>

	<button
		on:click={submitSearch}
		aria-label="Press button to make a search"
		class="btn-warning btn w-full rounded-full"
		class:btn-disabled={searchTerm.length < 3}
		class:loading>{buttonText}</button
	>
</div>
