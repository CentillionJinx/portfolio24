<script lang="ts">
	import { onMount } from 'svelte';

	// Improved mobile device detection (choose one)
	// const isMobile = 'ontouchstart' in window;
	let isMobile = false; // Default to false if not in browser
	if (typeof navigator !== 'undefined') {
		// Only execute this block if navigator is defined (in the browser)
		isMobile =
			/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini|Windows Phone|Kindle|Silk|PlayBook|BB10|Tizen|Sailfish|Mobile Safari|Mobile/i.test(
				navigator.userAgent
			);
	}

	// Desktop momentum scrolling
	function scroller(node: HTMLElement) {
		if (isMobile) return;

		let startX = 0,
			startY = 0;
		let destX = 0,
			destY = 0;
		let requestId: number | null = null;

		node.style.position = 'fixed';
		// Add top, left, width if needed
		// node.style.top = '0';
		// node.style.left = '0';
		// node.style.width = '100%';

		// Set body height initially
		document.body.style.height = `${node.scrollHeight}px`;

		const resizeObserver = new ResizeObserver(() => {
			document.body.style.height = `${node.scrollHeight}px`;
		});
		resizeObserver.observe(node);

		const easeScroll = () => {
			startX = window.scrollX;
			startY = window.scrollY;
		};
		window.addEventListener('scroll', easeScroll, { passive: true });

		function render() {
			destX += (startX - destX) * 0.07;
			destY += (startY - destY) * 0.07;
			node.style.transform = `translate3d(${-destX}px, ${-destY}px, 0)`;
			requestId = window.requestAnimationFrame(render);
		}

		function handleAnchorClick(event: MouseEvent) {
			const target = event.target;
			if (!(target instanceof HTMLAnchorElement) || !target.href.startsWith('#')) return;

			event.preventDefault();
			const anchorTarget = document.querySelector(target.hash);

			if (anchorTarget) {
				const targetRect = anchorTarget.getBoundingClientRect();
				window.scrollTo({
					top: window.scrollY + targetRect.top,
					behavior: 'smooth'
				});
			}
		}

		document.addEventListener('click', handleAnchorClick);
		render();

		return {
			destroy() {
				if (requestId !== null) window.cancelAnimationFrame(requestId);
				window.removeEventListener('scroll', easeScroll);
				document.removeEventListener('click', handleAnchorClick);
				resizeObserver.disconnect();
			}
		};
	}
</script>

<div use:scroller role="region" aria-label="Main Content">
	<slot />
</div>

<style>
</style>
