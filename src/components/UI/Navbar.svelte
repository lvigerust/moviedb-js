<script>
	import { clickOutside } from '$lib/functions/clickOutside.js';
	import { page } from '$app/stores';
	import { enhance } from '$app/forms';
	import { onMount } from 'svelte';

	import DarkmodeToggle from '$lib/icons/DarkmodeToggle.svelte';

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
	class:lg:motion-safe:-translate-y-[var(--header-with-margin-lg)]={offscreen}
	bind:clientHeight
>
	<div class="navbar px-4 lg:px-8 lg:min-h-[5rem]">
		<div class="navbar-start">
			<div class="dropdown md:hidden">
				<!-- svelte-ignore a11y-no-noninteractive-tabindex -->
				<label for="" tabindex="0" class="btn btn-ghost btn-circle opacity-75">
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
					class="menu menu-compact dropdown-content mt-3.5 p-2 shadow bg-base-300/75 backdrop-blur-md font-[Poppins] rounded-box w-52"
				>
					<div>
						<li><a class="opacity-75" href="/movie">Movies</a></li>
						<li><a class="opacity-75" href="/tv">TV Shows</a></li>
						<!-- <li><a href="/login">Login</a></li> -->
					</div>
				</ul>
			</div>
			<a
				href="/"
				class="btn btn-ghost rounded-full hidden md:flex flex-col gap-4 normal-case lg:text-lg "
			>
				<p>VIGERUST</p>
			</a>
		</div>
		<div class="navbar-center w-1/3 flex justify-center md:hidden opacity-75">
			<a href="/" class="btn btn-ghost rounded-full normal-case  flex flex-col gap-3">
				<p>VIGERUST</p>
			</a>
		</div>
		<div class="navbar-end opacity-75">
			<ul class="menu menu-horizontal p-0 hidden md:flex font-[Poppins] normal-case">
				<li>
					<a class="btn btn-ghost rounded-md  font-normal normal-case" href="/movie">Movies</a>
				</li>
				<li>
					<a class="btn btn-ghost rounded-md font-normal normal-case" href="/tv">TV Shows</a>
				</li>
				<!-- <li>
					<a class="btn btn-ghost rounded-md font-normal normal-case" href="/login">Login</a>
				</li> -->
			</ul>

			<div class="ml-4 w-12">
				<form method="post" use:enhance={submitUpdateTheme}>
					{#if currentTheme == lightTheme}
						<button
							data-sveltekit-noscroll
							aria-label="Toggle dark theme"
							class="btn btn-ghost btn-circle"
							formaction="/?/setTheme&theme={darkTheme}&redirectTo={$page.url.pathname}"
						>
							<DarkmodeToggle symbol={'sun'} />
						</button>
					{:else if currentTheme == darkTheme}
						<button
							data-sveltekit-noscroll
							aria-label="Toggle light theme"
							class="btn btn-ghost btn-circle"
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
