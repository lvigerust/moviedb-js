<script>
	import { onMount } from 'svelte';

	onMount(() => {
		document.addEventListener('click', (e) => {
			let handle;
			if (e.target.matches('.handle')) {
				handle = e.target;
			} else {
				handle = e.target.closest('.handle');
			}
			if (handle != null) onHandleClick(handle);
		});

		const throttleProgressBar = throttle(() => {
			document.querySelectorAll('.progress-bar').forEach(calculateProgressBar);
		}, 250);
		window.addEventListener('resize', throttleProgressBar);

		document.querySelectorAll('.progress-bar').forEach(calculateProgressBar);

		function calculateProgressBar(progressBar) {
			progressBar.innerHTML = '';

			const slider = progressBar.closest('.row').querySelector('.slider');

			const itemCount = slider.children.length;
			const itemsPerScreen = parseInt(
				getComputedStyle(slider).getPropertyValue('--items-per-screen')
			);
			let sliderIndex = parseInt(getComputedStyle(slider).getPropertyValue('--slider-index'));
			const progressBarItemCount = Math.ceil(itemCount / itemsPerScreen);

			if (sliderIndex >= progressBarItemCount) {
				slider.style.setProperty('--slider-index', progressBarItemCount - 1);
				sliderIndex = progressBarItemCount - 1;
			}

			for (let i = 0; i < progressBarItemCount; i++) {
				const barItem = document.createElement('div');
				barItem.classList.add('progress-item');

				if (i === sliderIndex) {
					barItem.classList.add('active');
				}
				progressBar.append(barItem);
			}
		}

		function onHandleClick(handle) {
			const progressBar = handle.closest('.row').querySelector('.progress-bar');
			const slider = handle.closest('.carousel-container').querySelector('.slider');
			const sliderIndex = parseInt(getComputedStyle(slider).getPropertyValue('--slider-index'));

			const progressBarItemCount = progressBar.children.length;

			if (handle.classList.contains('left-handle')) {
				if (sliderIndex - 1 < 0) {
					slider.style.setProperty('--slider-index', progressBarItemCount - 1);
				} else {
					slider.style.setProperty('--slider-index', sliderIndex - 1);
				}
			}

			if (handle.classList.contains('right-handle')) {
				if (sliderIndex + 1 >= progressBarItemCount) {
					slider.style.setProperty('--slider-index', 0);
				} else {
					slider.style.setProperty('--slider-index', sliderIndex + 1);
				}
			}
		}

		function throttle(cb, delay = 1000) {
			let shouldWait = false;
			let waitingArgs;
			const timeoutFunc = () => {
				if (waitingArgs == null) {
					shouldWait = false;
				} else {
					cb(...waitingArgs);
					waitingArgs = null;
					setTimeout(timeoutFunc, delay);
				}
			};

			return (...args) => {
				if (shouldWait) {
					waitingArgs = args;
					return;
				}

				cb(...args);
				shouldWait = true;
				setTimeout(timeoutFunc, delay);
			};
		}
	});

	export let data;
	export let name = 'Slider Name';
	export let posterSlider = false;
</script>

<div class="row bg-base-300 pt-2 pb-4">
	<div class="header">
		<h3 class="font-medium text-xl">{name}</h3>
		<div class="progress-bar" />
	</div>
	<div class="carousel-container flex justify-center overflow-hidden">
		<button class="handle left-handle">
			<div class="text">&#8249;</div>
		</button>

		<div class="slider flex grow">
			{#each data as movie, index}
				{#if posterSlider}
					{#if movie.poster_path}
						<img
							class="hover:scale-105 cursor-pointer transition-all h-72 object-cover"
							src={'https://image.tmdb.org/t/p/w780/' + movie.poster_path}
							alt={movie.title}
						/>
					{/if}
				{:else if movie.backdrop_path}
					<img
						class="hover:scale-105 cursor-pointer transition-all object-cover"
						src={'https://image.tmdb.org/t/p/w780/' + movie.backdrop_path}
						alt={movie.title}
					/>
				{/if}
			{/each}
		</div>

		<button class="handle right-handle">
			<div class="text">&#8250;</div>
		</button>
	</div>
</div>

<style>
	:root {
		--handle-size: 3rem;
		--img-gap: 0.4rem;
	}

	.slider {
		--items-per-screen: 5;
		--slider-index: 0;
		margin: 0 var(--img-gap);
		transform: translateX(calc(var(--slider-index) * -100%));
		transition: transform 250ms ease-in-out;
	}

	.slider > img {
		flex: 0 0 calc(100% / var(--items-per-screen));
		max-width: calc(100% / var(--items-per-screen));
		aspect-ratio: 16 / 9;
		padding: var(--img-gap);
		border-radius: 1rem;
	}

	.handle {
		border: none;
		border-radius: 1rem;
		flex-grow: 0;
		flex-shrink: 0;
		z-index: 10;
		margin: var(--img-gap) 0;
		width: var(--handle-size);
		cursor: pointer;
		font-size: 5rem;
		display: flex;
		align-items: center;
		justify-content: center;
		color: white;
		line-height: 0;
	}

	.left-handle {
		border-top-left-radius: 0;
		border-bottom-left-radius: 0;
	}

	.right-handle {
		border-top-right-radius: 0;
		border-bottom-right-radius: 0;
	}

	.text {
		transition: opacity 150ms ease-in-out;
		opacity: 0;
	}

	.handle:hover .text {
		opacity: 100;
	}

	.header {
		display: flex;
		justify-content: space-between;
		padding: 0.5rem calc(var(--img-gap) * 2 + var(--handle-size));
		align-items: center;
	}

	@media (max-width: 1000px) {
		.slider {
			--items-per-screen: 3;
		}
	}

	@media (max-width: 500px) {
		.slider {
			--items-per-screen: 2;
		}
	}
</style>
