<script>
	import '../app.css';
	import { Navbar, Footer } from '$components';
</script>

<Navbar />
<main class="pt-10 sm:pt-12">
	<slot />
</main>
<Footer />
