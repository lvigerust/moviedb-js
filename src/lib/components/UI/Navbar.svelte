<script>
	import { enhance } from '$app/forms';
	import { onMount } from 'svelte';
	import { page } from '$app/stores';

	import DarkmodeToggle from '$lib/icons/DarkmodeToggle.svelte';
	import { clickOutside } from '$functions';

	let previousY = 0;
	let currentY = 0;
	let clientHeight = 0;

	const deriveDirection = (y) => {
		const direction = !previousY || previousY < y ? 'down' : 'up';
		previousY = y;
		return direction;
	};

	$: scrollDirection = deriveDirection(currentY);
	$: offscreen = scrollDirection === 'down' && currentY > clientHeight * 2;

	let currentTheme = '';
	let lightTheme = 'garden';
	let darkTheme = 'night';

	onMount(() => {
		if (document.documentElement.dataset.theme) {
			currentTheme = document.documentElement.dataset.theme;
		} else {
			currentTheme = darkTheme;
		}
	});

	const submitUpdateTheme = ({ action }) => {
		const theme = action.searchParams.get('theme');
		if (theme) {
			document.documentElement.setAttribute('data-theme', theme);
		}
		currentTheme = theme;
	};
	export {};
</script>

<svelte:window bind:scrollY={currentY} />

<div
	class="sticky-glass-navbar"
	class:motion-safe:-translate-y-[var(--header-with-margin)]={offscreen}
	bind:clientHeight
>
	<div class="container navbar">
		<div class="navbar-start">
			<div class="dropdown md:hidden">
				<!-- svelte-ignore a11y-no-noninteractive-tabindex -->
				<label for="" tabindex="0" class="btn-ghost btn-circle btn opacity-80">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						class="h-5 w-5"
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor"
						><path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M4 6h16M4 12h16M4 18h7"
						/></svg
					>
				</label>
				<!-- svelte-ignore a11y-no-noninteractive-tabindex -->
				<ul
					use:clickOutside
					tabindex="0"
					class="dropdown-content menu rounded-box menu-compact mt-3.5 w-52 bg-base-300/75 p-2 font-[Poppins] shadow backdrop-blur-md"
				>
					<div>
						<li><a class="opacity-80" href="/movie">Movies</a></li>
						<li><a class="opacity-80" href="/tv">TV Shows</a></li>
						<!-- <li><a href="/login">Login</a></li> -->
					</div>
				</ul>
			</div>
			<a
				title="Home"
				href="/"
				class="btn-ghost btn hidden flex-col gap-4 rounded-full normal-case opacity-80 md:flex lg:text-lg "
			>
				<p>STINKMEANER</p>
			</a>
		</div>
		<div class="navbar-center flex w-1/3 justify-center opacity-80 md:hidden">
			<a href="/" class="btn-ghost btn flex flex-col  gap-3 rounded-full normal-case">
				<p>STINKMEANER</p>
			</a>
		</div>
		<div class="navbar-end opacity-80">
			<ul class="menu menu-horizontal hidden p-0 font-[Poppins] normal-case md:flex">
				<li>
					<a class="btn-ghost btn rounded-md  font-normal normal-case" title="Movies" href="/movie"
						>Movies</a
					>
				</li>
				<li>
					<a class="btn-ghost btn rounded-md font-normal normal-case" title="TV Shows" href="/tv"
						>TV Shows</a
					>
				</li>
				<!-- <li>
					<a class="btn btn-ghost rounded-md font-normal normal-case" href="/login">Login</a>
				</li> -->
			</ul>

			<div class="ml-4 w-12">
				<form method="post" use:enhance={submitUpdateTheme}>
					{#if currentTheme == lightTheme}
						<button
							title="Darkmode"
							aria-label="Toggle dark theme"
							class="btn-ghost btn-circle btn"
							formaction="/?/setTheme&theme={darkTheme}&redirectTo={$page.url.pathname}"
						>
							<DarkmodeToggle symbol={'sun'} />
						</button>
					{:else if currentTheme == darkTheme}
						<button
							title="Lightmode"
							aria-label="Toggle light theme"
							class="btn-ghost btn-circle btn"
							formaction="/?/setTheme&theme={lightTheme}&redirectTo={$page.url.pathname}"
						>
							<DarkmodeToggle symbol={'moon'} />
						</button>
					{/if}
				</form>
			</div>
		</div>
	</div>
</div>
