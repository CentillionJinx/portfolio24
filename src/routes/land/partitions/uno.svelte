<script>
	import Profile from './unopartitions/profile.svelte';
	import Titles from './unopartitions/titles.svelte';
	import Tldr from './unopartitions/tldr.svelte';
</script>

<div class="container">
	<div class="left rounded-2xl">
		<svelte:component this={Profile} />
		<svelte:component this={Titles} />
	</div>
	<div class="right border-4 blurred border-[#fe8019] hover:scale-105">
		<svelte:component this={Tldr} />
	</div>
</div>

<style>
	.container {
		display: flex;
		height: 100%; /* Full height of the viewport */
	}
	.blurred {
		background: rgba(40, 40, 40, 0.75);
		border-radius: 16px;
		box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
		backdrop-filter: blur(20px);
		-webkit-backdrop-filter: blur(20px);
	}
	.border-4 {
		margin: 1rem;
		border-radius: 1rem;
	}
	.left {
		display: flex;
		flex-direction: column;
		width: 50%;
	}
	.right {
		width: 50%;
		display: flex;
		justify-content: center;
		align-items: center;
	}
	.hover\:scale-105 {
		transition: transform 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
	}
	div {
		flex: 1;
	}
	 @media (max-width: 1540px) {
        .left {
            display: none;
        }
    }
</style>
