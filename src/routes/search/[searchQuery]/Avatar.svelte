<script>
	export let data;
</script>

<div class="avatar">
	<div class="w-24 rounded-full">
		<img src={`http://image.tmdb.org/t/p/w185/${data.profile_path}`} alt={data.name} />
	</div>
</div>
