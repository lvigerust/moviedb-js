<script>
	import '../app.css';
	import { Navbar, Footer, Breadcrumbs } from '$components';
	import { page } from '$app/stores';
</script>

<svelte:head>
	<title>{$page.data.head ? `${$page.data.head.title}` : 'Home | Stinkmeaner'}</title>
	<meta name="description" content={$page.data.head ? `${$page.data.head.description}` : ''} />
</svelte:head>

<Navbar />
<main class="layout-padding">
	<slot />
	<Breadcrumbs />
</main>
<Footer />
