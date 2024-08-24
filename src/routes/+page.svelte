<script lang="ts">
	import Layout from './+layout.svelte';
	let isBlurred = false;
</script>

<Layout>
	<section class={isBlurred ? 'blurred' : ''}>
		<button
			class="btn btn-outline btn-lg btn-secondary royalText tracking-widest text-2xl"
			on:mouseover={() => (isBlurred = true)}
			on:focus={() => (isBlurred = true)}
			on:mouseout={() => (isBlurred = false)}
			on:blur={() => (isBlurred = false)}
		>
			Welcome
		</button>
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
			background 0.3s ease,
			border-radius 0.3s ease,
			box-shadow 0.3s ease,
			backdrop-filter 0.3s ease,
			-webkit-backdrop-filter 0.3s ease;
	}
	.blurred {
		background: rgba(40, 40, 40, 0.43);
		border-radius: 16px;
		box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
		backdrop-filter: blur(13.5px);
		-webkit-backdrop-filter: blur(13.5px);
	}
</style>
