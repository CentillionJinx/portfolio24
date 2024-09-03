<script lang="ts">
	import { goto } from '$app/navigation';
	let isBlurred = false;
	let sectionElement: HTMLElement | null = null;

	// Function to handle hover and focus events
	function handleMouseOver() {
		if (window.innerWidth > 1400) {
			// Adjust the width as per your mobile breakpoint
			isBlurred = true;
		}
	}

	// Function to handle mouseout and blur events
	function handleMouseOut() {
		if (window.innerWidth > 1400) {
			// Adjust the width as per your mobile breakpoint
			isBlurred = false;
		}
	}

	async function handleClick() {
		const sectionElement = document.querySelector('section');
		if (sectionElement) {
			sectionElement.classList.add('slide-out-left');
		}
		setTimeout(() => {
			goto('/explore'); // Then navigate with replaceState
		}, 1000); // Match the duration of the animation
	}
</script>

<section>
	<div class="overlap-container">
		<button
			class="btn btn-outline btn-lg btn-primary royalText tracking-widest text-4xl hover:scale-150"
			on:click={handleClick}
			on:mouseover={handleMouseOver}
			on:focus={handleMouseOver}
			on:mouseout={handleMouseOut}
			on:blur={handleMouseOut}
		>
			<p class="text-center text-primary tracking-normal">►</p>
		</button>
	</div>
</section>

<style>
	section {
		height: 98vh;
		width: 98vw;
		display: flex;
		justify-content: center;
		align-items: center;
		transition:
			background 1.5s ease-in-out,
			border-radius 1.5s ease-in-out,
			box-shadow 1.5s ease-in-out,
			backdrop-filter 1.5s ease-in-out,
			-webkit-backdrop-filter 1.5s ease-in-out;
	}
	section > div {
		display: flex;
		justify-content: center;
		align-items: center;
		width: 100%;
	}
	button {
		transition: transform 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
	}
	.overlap-container {
		position: relative;
		display: flex;
		justify-content: center;
		align-items: center;
		height: 100%;
		width: 100%;
	}
</style>
