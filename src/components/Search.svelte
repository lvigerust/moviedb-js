<script>
	import { goto } from '$app/navigation';

	function submitSearch() {
		goto('/search/' + searchTerm);
		searchTerm = '';
	}

	let searchTerm = '';
</script>

<div class="search">
	<form on:submit|preventDefault={submitSearch} class="form-control search">
		<label for="search" />
		<!-- svelte-ignore a11y-autofocus -->
		<input
			bind:value={searchTerm}
			type="text"
			placeholder="Search for movie, TV-show, person..."
			class="input input-bordered w-80 text-sm"
			class:input-accent={searchTerm != ''}
			autofocus
		/>
	</form>
</div>
