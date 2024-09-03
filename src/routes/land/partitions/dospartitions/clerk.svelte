<script>
	import Ticker from '$lib/functions/ticker.svelte';
</script>
<div class="flex h-full flex-col items-center justify-evenly">
	<div class="flex flex-col items-center">
		<img
			src="https://avatars.githubusercontent.com/u/49538330?s=200&v=4"
			alt="Clerk Icon"
			width="96"
			height="96"
		/>
		<span class=" mb-2"></span>
		<p class=" text-primary text-3xl royalText">Clerk</p>
	</div>
	<div class="flex flex-row items-center justify-center text-primary text-2xl slimText">
		<Ticker value={200} />
		<p>h+</p>
	</div>
</div>
