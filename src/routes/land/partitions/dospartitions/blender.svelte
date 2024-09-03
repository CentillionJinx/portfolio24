<script>
	import Ticker from '$lib/functions/ticker.svelte';
</script>
<div class="flex h-full flex-col items-center justify-evenly">
	<div class="flex flex-col items-center">
		<img
			src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/Blender_logo_no_text.svg/2503px-Blender_logo_no_text.svg.png"
			alt="Blender Icon"
			width="96"
			height="96"
		/>
		<span class=" mb-4"></span>
		<p class=" text-primary text-3xl royalText">Blender</p>
	</div>
	<div class="flex flex-row items-center justify-center text-primary text-2xl slimText">
		<Ticker value={100} />
		<p>h+</p>
	</div>
</div>
