<script lang="ts">
	import Layout from './+layout.svelte';
	let isBlurred = false;
	let showText = false;
</script>

<Layout>
	<section class={isBlurred ? 'blurred' : ''}>
		<div class="overlap-container">
			<p
				class="text-[22rem] blur-sm {showText ? 'fade-in' : 'fade-out'} text-primary vertical-text"
			>
				エ&nbsp;&nbsp;&nbsp;ゴ
			</p>
			<a href="/land"
				><button
					class="btn btn-outline btn-lg btn-secondary royalText tracking-widest text-2xl hover:tracking-[0.5em]"
					on:mouseover={() => {
						isBlurred = true;
						showText = true;
					}}
					on:focus={() => {
						isBlurred = true;
						showText = true;
					}}
					on:mouseout={() => {
						isBlurred = false;
						showText = false;
					}}
					on:blur={() => {
						isBlurred = false;
						showText = false;
					}}
				>
					<span class=" hover:text-primary">Welcome</span>
				</button></a
			>
		</div>
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
			background 0.7s ease,
			border-radius 0.7s ease,
			box-shadow 0.7s ease,
			backdrop-filter 0.7s ease,
			-webkit-backdrop-filter 0.7s ease;
	}
	section > div {
		display: flex;
		justify-content: center;
		align-items: center;
		width: 100%;
	}
	.blurred {
		animation: pulsate-bg 1s infinite ease-in-out;
		border-radius: 1rem;
		box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
		backdrop-filter: blur(13.5px);
		-webkit-backdrop-filter: blur(13.5px);
	}
	button {
		transition: letter-spacing 0.7s ease;
	}
	.overlap-container {
		position: relative;
		display: flex;
		justify-content: center;
		align-items: center;
		height: 100%;
		width: 100%;
	}
	.fade-in {
		animation: fadeIn 0.7s ease-in-out forwards;
	}

	.fade-out {
		animation: fadeOut 0.7s ease-in-out forwards;
	}
	.overlap-container p,
	.overlap-container a {
		position: absolute;
	}
	.vertical-text {
		display: inline-block;
	}

	@media (max-width: 1060px) {
		.vertical-text {
			writing-mode: vertical-rl;
			transform: rotate(180deg);
			font-size: 12rem;
		}
	}
	@keyframes fadeIn {
		from {
			opacity: 0;
		}
		to {
			opacity: 1;
		}
	}

	@keyframes fadeOut {
		from {
			opacity: 1;
		}
		to {
			opacity: 0;
		}
	}
	@keyframes pulsate-bg {
    0% {
        background: rgba(40, 40, 40, 0.75);
    }
    50% {
        background: rgba(40, 40, 40, 0.55);
    }
    100% {
        background: rgba(40, 40, 40, 0.75);
    }
}
</style>
