<script>
	import Ticker from '$lib/functions/ticker.svelte';
</script>
<div class="flex h-full flex-col items-center justify-evenly">
	<div class="flex flex-col items-center">
		<img
			src="https://img.icons8.com/fluent/200/express-js.png"
			alt="ExpressJS Icon"
			width="96"
			height="96"
		/>
		<p class=" text-primary text-3xl royalText">ExpressJS</p>
	</div>
	<span class=" mb-2"></span>
	<div class="flex flex-row items-center justify-center text-primary text-2xl slimText">
		<Ticker value={50} />
		<p>h+</p>
	</div>
</div>
