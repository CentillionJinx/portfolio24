<script lang="ts">
	import Layout from './+layout.svelte';
	import { setFavicon, setTitle } from '$lib/functions/favicon.js';
	import { goto } from '$app/navigation';
	import { onMount } from 'svelte';
	let isBlurred = false;
	let showText = false;

	// Function to handle hover and focus events
	function handleMouseOver() {
		if (window.innerWidth > 1400) {
			// Adjust the width as per your mobile breakpoint
			isBlurred = true;
			showText = true;
		}
	}

	// Function to handle mouseout and blur events
	function handleMouseOut() {
		if (window.innerWidth > 1400) {
			// Adjust the width as per your mobile breakpoint
			isBlurred = false;
			showText = false;
		}
	}

	function handleClick() {
		goto('/land'); // Navigate using goto
	}
	onMount(() => {
		setFavicon('/src/lib/images/welcome.ico'); // Set the favicon for this page
		setTitle('initiate'); // Set the title for this page
	});
</script>

<Layout>
	<section class={isBlurred ? 'blurred' : ''}>
		<div class="overlap-container">
			<p
				class="text-[22rem] blur-sm {showText
					? 'fade-in'
					: 'fade-out'} text-primary vertical-text MobileHidden"
			>
				エ&nbsp;&nbsp;&nbsp;ゴ
			</p>
			<button
				class="btn btn-outline btn-lg btn-secondary royalText tracking-widest text-2xl hover:tracking-[0.5em]"
				on:click={handleClick}
				on:mouseover={handleMouseOver}
				on:focus={handleMouseOver}
				on:mouseout={handleMouseOut}
				on:blur={handleMouseOut}
			>
				<span class=" hover:text-primary">Welcome</span>
			</button>
		</div>
	</section>
</Layout>

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
	.blurred {
		animation: pulsate-bg 2s infinite ease-in-out;
		border-radius: 1rem;
		box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
		backdrop-filter: blur(13.5px);
		-webkit-backdrop-filter: blur(13.5px);
	}
	button {
		transition: letter-spacing 0.7s ease;
	}
	.overlap-container {
		position: relative;
		display: flex;
		justify-content: center;
		align-items: center;
		height: 100%;
		width: 100%;
	}
	.fade-in {
		animation: fadeIn 0.7s ease-in-out forwards;
	}

	.fade-out {
		animation: fadeOut 0.7s ease-in-out forwards;
	}
	.overlap-container p,
	.overlap-container button {
		position: absolute;
	}
	.vertical-text {
		display: inline-block;
	}
	@keyframes fadeIn {
		from {
			opacity: 0;
		}
		to {
			opacity: 1;
		}
	}

	@keyframes fadeOut {
		from {
			opacity: 1;
		}
		to {
			opacity: 0;
		}
	}
	@keyframes pulsate-bg {
		0% {
			background: rgba(40, 40, 40, 0);
		}
		35% {
			background: rgba(40, 40, 40, 0.75);
		}
		65% {
			background: rgba(40, 40, 40, 0.75);
		}
		100% {
			background: rgba(40, 40, 40, 0);
		}
	}
</style>
