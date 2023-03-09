<script>
	import '../app.css';
	import { Navbar, Footer } from '$components';

	import { page } from '$app/stores';
</script>

<svelte:head>
	<title>{$page.data.title ? `${$page.data.title}` : 'TITLE'}</title>
</svelte:head>

<Navbar />
<main class="pt-10 sm:pt-12">
	<slot />
</main>
<Footer />
