<script lang="ts">
	import '../app.css';
	import { onNavigate } from '$app/navigation';
	onNavigate((navigation) => {
		if (!(document as any).startViewTransition) return;

		return new Promise((resolve) => {
			(document as any).startViewTransition(async () => {
				resolve();
				await navigation.complete;
			});
		});
	});
</script>

<div class="bg-primary">
	<main>
		<slot/>
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
		overflow-x: hidden;
	}
</style>
