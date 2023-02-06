<script>
	import { goto } from '$app/navigation';

	function submitSearch() {
		goto('/search/' + searchTerm);
		loading = true;
		buttonText = '';
	}

	let searchTerm = '';
	let loading = false;
	let buttonText = 'Search';
</script>

<div class="search flex flex-col items-center gap-3">
	<form on:submit|preventDefault={submitSearch} class="form-control search">
		<label for="search" />
		<input
			bind:value={searchTerm}
			type="text"
			placeholder="Search movie or TV show"
			autocomplete="off"
			class="input input-bordered rounded-xl text-sm w-64 sm:w-80"
		/>
	</form>

	<button
		on:click={submitSearch}
		aria-label="Press button to make a search"
		class="btn btn-warning rounded-xl w-64 sm:w-80"
		class:btn-disabled={searchTerm.length < 3}
		class:loading>{buttonText}</button
	>
</div>
