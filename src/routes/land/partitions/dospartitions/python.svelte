<script>
	import Ticker from '$lib/functions/ticker.svelte';
</script>

<div class="flex h-full flex-col items-center justify-evenly">
	<div class="flex flex-col items-center">
		<i class="fab fa-python h-24 w-24 text-primary"></i>
		<span class=" mb-4"></span>
		<p class=" text-primary text-3xl royalText">Python</p>
	</div>
	<div class="flex flex-row items-center justify-center text-primary text-2xl slimText">
		<Ticker value={650} />
		<p>h+</p>
	</div>
</div>
