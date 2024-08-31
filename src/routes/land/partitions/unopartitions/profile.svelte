<script>
	import portrait from '../../../../lib/images/portrait.webp';
</script>

<div class="border-4 blurred border-none pic-container hover:scale-105">
	<img src={portrait} alt="profile" class="blur-sm" />
	<p class=" text-primary royalText text-9xl">Gururam</p>
</div>

<style>
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
	.pic-container {
		position: relative;
		box-shadow: inset 7px 7px 100px #202020,
            inset -7px -7px 100px #303030;
		/* width: 100%; */
	}
	.pic-container img {
		position: absolute;
		top: 1%;
		left: 1%;
		width: 98%;
		height: 98%;
		object-fit: cover; /* Ensures the image covers the entire area */
	}
	.pic-container p {
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
	}
	img {
		border-radius: 1rem;
	}
	div {
		flex: 1;
		display: flex;
		justify-content: center;
		align-items: center;
	}
	.hover\:scale-105 {
		transition: transform 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
	}
</style>
