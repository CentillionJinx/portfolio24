<script lang="ts">
	import { cubicOut } from 'svelte/easing';
	import { onMount } from 'svelte';
	import { spring, tweened } from 'svelte/motion';
	import { cn } from './utils.js';
	export let value = 100;
	export let initial = 0;
	export let duration = 6000;
	let num = tweened(initial, {
		duration: duration,
		easing: cubicOut
	});
	let className: any = '';
	export { className as class };

	onMount(() => {
		const observer = new IntersectionObserver((entries) => {
			entries.forEach((entry) => {
				if (entry.isIntersecting) {
					num.set(value);
					observer.disconnect(); // Stop observing after the first intersection
				}
			});
		});

		const tickerElement = document.querySelector('.ticker');
		if (tickerElement) {
			observer.observe(tickerElement);
		}
	});
</script>

<div class={cn('inline-block text-primary tracking-normal ticker', className)} {...$$restProps}>
	{$num.toFixed(0)}
</div>
