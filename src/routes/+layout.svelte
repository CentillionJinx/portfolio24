<script>
	import '../app.css';
</script>

<div class="bg-primary">
	<main>
		<slot />
	</main>
</div>

<style>
	main {
		display: flex;
		height: 100vh;
		width: 100vw;
		justify-content: center;
		align-items: center;
		flex-direction: column;
		margin: 0 auto;
		box-sizing: border-box;
	}
</style>
