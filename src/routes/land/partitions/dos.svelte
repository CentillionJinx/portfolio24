<script lang="ts">
	import Python from './dospartitions/python.svelte';
	import CProg from './dospartitions/cProg.svelte';
	import Verilog from './dospartitions/verilog.svelte';
	import CHashProg from './dospartitions/cHashProg.svelte';
	import Vsc from './dospartitions/vsc.svelte';
	import Figma from './dospartitions/figma.svelte';
	import Blender from './dospartitions/blender.svelte';
	import React from './dospartitions/react.svelte';
	import Expressjs from './dospartitions/expressjs.svelte';
	import Clerk from './dospartitions/clerk.svelte';
	import Svelte from './dospartitions/svelte.svelte';
	import Bun from './dospartitions/bun.svelte';
	import Trpc from './dospartitions/trpc.svelte';
	import Mongodb from './dospartitions/mongodb.svelte';
	import Info from './dospartitions/info.svelte';
	import { onMount } from 'svelte';

	onMount(() => {
		const gridItems = document.querySelectorAll('.grid-item');
		const observer = new IntersectionObserver((entries) => {
			entries.forEach((entry) => {
				if (entry.isIntersecting) {
					setTimeout(() => {
						requestAnimationFrame(() => {
							(entry.target as HTMLElement).style.border = '2px solid #83a598'; // Add your desired border style here
						});
					}, 6000); // Delay in milliseconds				} else {
				}
			});
		});

		gridItems.forEach((item) => observer.observe(item));
	});
</script>

<div class="contain">
	<div class="grid-container">
		<a href="https://www.python.org/" class="grid-item grid-item-1">
			<svelte:component this={Python} />
		</a>
		<a href="https://www.gnu.org/software/gnu-c-manual/" class="grid-item grid-item-2">
			<svelte:component this={CProg} />
		</a>
		<a href="https://www.verilog.com/" class="grid-item grid-item-3">
			<svelte:component this={Verilog} />
		</a>
		<a href="https://learn.microsoft.com/en-us/dotnet/csharp/" class="grid-item grid-item-4">
			<svelte:component this={CHashProg} />
		</a>
		<a href="https://code.visualstudio.com/" class="grid-item grid-item-5">
			<svelte:component this={Vsc} />
		</a>
		<a href="https://www.figma.com/" class="grid-item grid-item-6">
			<svelte:component this={Figma} />
		</a>
		<a href="https://www.blender.org/" class="grid-item grid-item-7">
			<svelte:component this={Blender} />
		</a>
		<a href="https://react.dev/" class="grid-item grid-item-8">
			<svelte:component this={React} />
		</a>
		<a href="https://expressjs.com/" class="grid-item grid-item-9">
			<svelte:component this={Expressjs} />
		</a>
		<a href="https://clerk.com/" class="grid-item grid-item-10">
			<svelte:component this={Clerk} />
		</a>
		<div
			class="grid-item grid-item-11 info animate-shine border border-white/10 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-4 py-5 transition-colors"
		>
			<svelte:component this={Info} />
		</div>
		<a href="https://bun.sh/" class="grid-item grid-item-12">
			<svelte:component this={Bun} />
		</a>
		<a href="https://trpc.io/" class="grid-item grid-item-13">
			<svelte:component this={Trpc} />
		</a>
		<a href="https://svelte.dev/" class="grid-item grid-item-14">
			<svelte:component this={Svelte} />
		</a>
		<a href="https://www.mongodb.com/" class="grid-item grid-item-15">
			<svelte:component this={Mongodb} />
		</a>
	</div>
</div>

<style>
	.contain {
		display: flex;
		width: 80%;
		height: 80%;
		justify-content: center;
		align-items: center;
		text-decoration: none !important;
	}
	.grid-container {
		width: 100%; /* Make sure the grid-container takes full width */
		height: 100%; /* Make sure the grid-container takes full height */
		margin: 1rem;
		display: grid;
		grid-auto-columns: 1fr;
		gap: 0.5rem;
		grid-template-areas:
			'box1  box2  box3  box4  box5  box6'
			'box1  box7  box11 box11 box8  box8'
			'box9  box7  box11 box11 box10 box12'
			'box13 box14 box15 box15 box15 box15';
	}

	a {
		text-decoration: none !important;
	}

	@media (max-width: 1400px) {
		.contain {
			width: 90%;
			height: 90%;
		}
		.grid-container {
			margin: 0rem;
			grid-template-areas:
				'box11  box11'
				'box1   box2'
				'box3   box4'
				'box5   box6'
				'box7   box8'
				'box9   box10'
				'box12  box13'
				'box14  box15';
		}
		:global(.grid-item span, .grid-item i, .grid-item img, .grid-item svg) {
			display: none;
		}
		:global(.grid-item div) {
			justify-content: center;
		}
		:global(.grid-item img, .grid-item svg) {
			width: 48px;
			height: 48px;
		}
	}
	.grid-item {
		padding: 0.5rem 1rem;
		text-align: center;
		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: column;
		border-radius: 1rem;
		/* border: 2px solid #83a598; */
		transition: border 2s ease-in-out;
		overflow: hidden;
		transition: all 0.3s ease-in-out;
		/* background: rgba(40, 40, 40, 0.45); */
		box-shadow:
			inset 7px 7px 100px #202020,
			inset -7px -7px 100px #303030;
		backdrop-filter: blur(20px);
		-webkit-backdrop-filter: blur(20px);
	}
	.info {
		border: none !important;
	}
	.grid-item-1 {
		grid-area: box1;
	}
	.grid-item-2 {
		grid-area: box2;
	}
	.grid-item-3 {
		grid-area: box3;
	}
	.grid-item-4 {
		grid-area: box4;
	}
	.grid-item-5 {
		grid-area: box5;
	}
	.grid-item-6 {
		grid-area: box6;
	}
	.grid-item-7 {
		grid-area: box7;
	}
	.grid-item-8 {
		grid-area: box8;
	}
	.grid-item-9 {
		grid-area: box9;
	}
	.grid-item-10 {
		grid-area: box10;
	}
	.grid-item-11 {
		grid-area: box11;
	}
	.grid-item-12 {
		grid-area: box12;
	}
	.grid-item-13 {
		grid-area: box13;
	}
	.grid-item-14 {
		grid-area: box14;
	}
	.grid-item-15 {
		grid-area: box15;
	}
	@keyframes shine {
		from {
			background-position: 0 0;
		}
		to {
			background-position: -200% 0;
		}
	}

	.animate-shine {
		animation: shine 2s linear infinite;
	}
</style>
