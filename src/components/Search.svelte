<script>
	import { goto } from '$app/navigation';

	function submitSearch() {
		goto('/search/' + searchTerm);
		loading = true;
		buttonText = '';
	}

	let buttonText = 'Search';
	let loading = false;
	let searchTerm = '';
</script>

<div class="search flex flex-col items-center gap-4">
	<form on:submit|preventDefault={submitSearch} class="form-control search">
		<label for="search" />
		<input
			bind:value={searchTerm}
			type="text"
			placeholder="Search for movie or TV show"
			class="input input-bordered w-64 sm:w-80 text-sm"
		/>
	</form>
	<button
		on:click={submitSearch}
		aria-label="Press button to make a search"
		class="btn btn-warning w-64 sm:w-80"
		class:btn-disabled={searchTerm.length < 3}
		class:loading>{buttonText}</button
	>
</div>
