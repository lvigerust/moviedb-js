<script>
	import '../app.css';
	import { Navbar, Footer } from '$components';
	import { page } from '$app/stores';

	console.log($page.data);
</script>

<svelte:head>
	<title>{$page.data.head ? `${$page.data.head.title}` : 'Home | Stinkmeaner'}</title>

	<meta name="description" content={$page.data.head ? `${$page.data.head.description}` : ''} />
</svelte:head>

<Navbar />
<main class="pt-10 sm:pt-12">
	<slot />
</main>
<Footer />
