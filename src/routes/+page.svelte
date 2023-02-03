<script>
	import { fly } from 'svelte/transition';
	import { backIn, backOut } from 'svelte/easing';
	import Search from '../components/Search.svelte';

	function typewriter(node, { speed = 1.5 }) {
		const valid = node.childNodes.length === 1 && node.childNodes[0].nodeType === Node.TEXT_NODE;

		if (!valid) {
			throw new Error(`This transition only works on elements with a single text node child`);
		}

		const text = node.textContent;
		const duration = text.length / (speed * 0.01);

		return {
			duration,
			tick: (t) => {
				const i = ~~(text.length * t);
				node.textContent = text.slice(0, i);
			}
		};
	}
</script>

<svelte:head>
	<title>Home | Movie Database</title>
</svelte:head>

<div class="hero full-hero flex overflow-hidden">
	<div
		class="container flex flex-col gap-8 justify-center items-center pb-12"
		in:fly={{ y: 500, delay: 600, duration: 750, easing: backOut }}
		out:fly={{ x: 500, duration: 650, easing: backIn }}
	>
		<div class="prose">
			<Search />
		</div>
	</div>
</div>
