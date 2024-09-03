<script>
	import Ticker from '$lib/functions/ticker.svelte';
</script>
<div class="flex h-full flex-col items-center justify-evenly">
	<div class="flex flex-col items-center">
		<img
			src="https://www.svgrepo.com/show/306824/svelte.svg"
			alt="Verilog Icon"
			width="96"
			height="96"
		/>
		<span class=" mb-2"></span>
		<p class=" text-primary text-3xl royalText">Svelte</p>
	</div>
	<div class="flex flex-row items-center justify-center text-primary text-2xl slimText">
		<Ticker value={500} />
		<p>h+</p>
	</div>
</div>
