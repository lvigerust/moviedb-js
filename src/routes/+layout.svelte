<script>
	import '../app.css';
	import Footer from '../components/Footer.svelte';
	import Navbar from '../components/Navbar.svelte';
</script>

<Navbar />
<main class="pt-10 sm:pt-12">
	<slot />
</main>
<Footer />
