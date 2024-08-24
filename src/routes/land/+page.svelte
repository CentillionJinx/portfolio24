<script lang="ts">
	import Layout from '../+layout.svelte';
	import Uno from './partitions/uno.svelte';
	import Dos from './partitions/dos.svelte';
	import Tres from './partitions/tres.svelte';
	let sections = [Uno, Dos, Tres];
</script>

<Layout>
	<section class="bg-secondary rounded-2xl">
		<div class="slider">
			{#each sections as section}
				<div class="section rounded-2xl">
					<svelte:component this={section} />
				</div>
			{/each}
		</div>
	</section>
</Layout>

<style>
	section {
		height: 98vh;
		width: 98vw;
		justify-content: center;
		align-items: center;
		overflow-y: scroll;
		scroll-snap-type: y mandatory;
		scrollbar-width: none;
	}
	section::-webkit-scrollbar {
		display: none;
	}
	.slider {
		display: flex;
		align-items: center;
		flex-direction: column;
		width: 100%;
	}
	.section {
		width: 95vw;
		height: 95vh;
		display: flex;
		justify-content: center;
		align-items: center;
		scroll-snap-align: center;
		margin-top: 3vh;
		margin-bottom: 3vh;
	}
</style>
