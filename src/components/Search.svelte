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

<div class="search flex flex-col items-center gap-3 w-full">
	<form on:submit|preventDefault={submitSearch} class="form-control search w-full">
		<label for="search" />
		<input
			bind:value={searchTerm}
			type="text"
			placeholder="Søk etter film eller TV-serie"
			autocomplete="off"
			class="input input-bordered rounded-full text-sm w-full"
		/>
	</form>

	<button
		on:click={submitSearch}
		aria-label="Press button to make a search"
		class="btn btn-warning rounded-full w-full"
		class:btn-disabled={searchTerm.length < 3}
		class:loading>{buttonText}</button
	>
</div>
