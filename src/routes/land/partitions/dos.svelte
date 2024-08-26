<script>
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
</script>

<div class="contain">
	<div class="grid-container">
		<div class="grid-item grid-item-1">
			<svelte:component this={Python} />
		</div>
		<div class="grid-item grid-item-2">
			<svelte:component this={CProg} />
		</div>
		<div class="grid-item grid-item-3">
			<svelte:component this={Verilog} />
		</div>
		<div class="grid-item grid-item-4">
			<svelte:component this={CHashProg} />
		</div>
		<div class="grid-item grid-item-5">
			<svelte:component this={Vsc} />
		</div>
		<div class="grid-item grid-item-6">
			<svelte:component this={Figma} />
		</div>
		<div class="grid-item grid-item-7">
			<svelte:component this={Blender} />
		</div>
		<div class="grid-item grid-item-8">
			<svelte:component this={React} />
		</div>
		<div class="grid-item grid-item-9">
			<svelte:component this={Expressjs} />
		</div>
		<div class="grid-item grid-item-10">
			<svelte:component this={Clerk} />
		</div>
		<div class="grid-item grid-item-11">
			<svelte:component this={Info} />
		</div>
		<div class="grid-item grid-item-12">
			<svelte:component this={Bun} />
		</div>
		<div class="grid-item grid-item-13">
			<svelte:component this={Trpc} />
		</div>
		<div class="grid-item grid-item-14">
			<svelte:component this={Svelte} />
		</div>
		<div class="grid-item grid-item-15">
			<svelte:component this={Mongodb} />
		</div>
	</div>
</div>

<style>
	.contain {
		display: flex;
		width: 80%;
		height: 80%;
		justify-content: center;
		align-items: center;
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
	.grid-item {
		padding: 0.5rem 1rem;
		text-align: center;
		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: column;
		border-radius: 1rem;
        border: 2px solid #83a598;
		overflow: hidden;
		transition: all 0.3s ease-in-out;
		background: rgba(40, 40, 40, 0.45);
		box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
		backdrop-filter: blur(20px);
		-webkit-backdrop-filter: blur(20px);
	}
    .grid-item:hover {
        transform: scale(1.05);
        background: rgba(40, 40, 40, 0.75);
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
</style>
