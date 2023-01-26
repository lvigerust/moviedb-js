<script>
	import { onMount } from 'svelte';
	import DarkmodeToggle from '../lib/icons/DarkmodeToggle.svelte';

	function clickOutside(node) {
		const handleClick = (event) => {
			if (!node.contains(event.target)) {
				node.dispatchEvent(new CustomEvent('outclick'));
			}
		};
		document.addEventListener('click', handleClick, true);
		return {
			destroy() {
				document.removeEventListener('click', handleClick, true);
			}
		};
	}

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

	onMount(() => {
		currentTheme = document.documentElement.dataset.theme;
		// const userPrefersDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;

		// const hasUserSetDarkModeManually = document.documentElement.dataset.theme == 'dark';

		// if (!hasUserSetDarkModeManually) {
		// 	setTheme(userPrefersDarkMode ? 'dark' : 'light');
		// }
	});

	const setTheme = (theme) => {
		document.documentElement.dataset.theme = theme;
		document.cookie = `siteTheme=${theme};max-age=31536000;path="/"`;
		currentTheme = theme;
	};
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
				<label for="" tabindex="0" class="btn btn-ghost btn-circle opacity-80">
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
					<div class="opacity-80">
						<li><a href="/movies">Movies</a></li>
						<li><a href="/tv">TV Shows</a></li>
						<!-- <li><a href="/login">Login</a></li> -->
					</div>
				</ul>
			</div>
			<a
				href="/"
				class="btn btn-ghost rounded-full hidden md:flex flex-col gap-4 normal-case lg:text-lg opacity-75"
			>
				<p>VIGERUST</p>
			</a>
		</div>
		<div class="navbar-center w-1/3 flex justify-center md:hidden">
			<a href="/" class="btn btn-ghost rounded-full normal-case opacity-75 flex flex-col gap-3">
				<p>VIGERUST</p>
			</a>
		</div>
		<div class="navbar-end opacity-80">
			<ul class="menu menu-horizontal p-0 hidden md:flex font-[Poppins] normal-case">
				<li>
					<a class="btn btn-ghost rounded-md  font-normal normal-case" href="/movies">Movies</a>
				</li>
				<li>
					<a class="btn btn-ghost rounded-md font-normal normal-case" href="/tv">TV Shows</a>
				</li>
				<!-- <li>
					<a class="btn btn-ghost rounded-md font-normal normal-case" href="/login">Login</a>
				</li> -->
			</ul>

			<div class="ml-4">
				{#if currentTheme == 'light'}
					<a
						data-sveltekit-noscroll
						class="btn btn-ghost btn-circle"
						href={''}
						on:click={() => setTheme('dark')}
					>
						<DarkmodeToggle symbol={'moon'} />
					</a>
				{:else}
					<a
						data-sveltekit-noscroll
						class="btn btn-ghost btn-circle"
						href={''}
						on:click={() => setTheme('light')}
					>
						<DarkmodeToggle symbol={'sun'} />
					</a>
				{/if}
			</div>
		</div>
	</div>
</div>
