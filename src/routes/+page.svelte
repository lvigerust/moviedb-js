<script>
	import { fly, fade, blur, scale } from 'svelte/transition';
	import { backIn, backInOut, backOut, bounceInOut, bounceOut, elasticOut } from 'svelte/easing';

	let startTyping = false;
	let removebutton = false;

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
		in:fly={{ y: 500, delay: 850, duration: 750, easing: backOut }}
		out:fly={{ x: 500, duration: 650, easing: backIn }}
	>
		<div class="flex flex-col prose w-full h-full gap-8 justify-center items-center">
			<div class="w-full text-center">
				<h1 class="m-0 mb-2">Hello</h1>
				<h4 class="m-0">I've been wondering...</h4>
			</div>
			<div class="w-full h-20">
				{#if startTyping}
					<h3 in:typewriter class="m-0">
						Imagine how gassed plumbers are... when shit goes wrong at their house?
					</h3>
				{/if}
			</div>
			<div class="h-20">
				<label>
					{#if removebutton == false}
						<button
							in:blur={{ duration: 2000, delay: 2000, easing: backOut }}
							out:scale={{ duration: 750, easing: backOut }}
							on:click={() => ((startTyping = true), (removebutton = true))}
							class="btn btn-warning w-36">...What?</button
						>
					{/if}
				</label>
			</div>
		</div>
	</div>
</div>
