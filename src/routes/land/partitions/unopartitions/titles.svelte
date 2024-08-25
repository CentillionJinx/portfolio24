<script>
	import { onDestroy, onMount } from 'svelte';

	let phrases = [
		'Cyber Strategist',
		'Security Lead', // Kept 'Security' for clarity
		'Infrastructure Architect',
		'Threat Analyst',
		'Security Engineer', // Kept 'Security' for clarity
		'Cyber Consultant',
		'Vulnerability Manager',
		'Incident Responder',
		'Forensics Investigator',
		'Operations Manager',
		'Application Specialist',
		'Cloud Architect',
		'Network Specialist',
		'Compliance Expert',
		'Researcher',
		'Cryptographer',
		'Penetration Tester',
		'Ethical Hacker',
		'Data Protector',
		'Privacy Officer',
		'Risk Manager',
		'Code Auditor',
		'Digital Guardian',
		'Cybersecurity Advocate',
		'Information Defender',
		'Cybersecurity Champion'
	];
	let currentPhrase = '';
	let displayPhrase = '';
	let typingSpeedRange = [25, 50]; // Adjust range here
	let backspaceSpeed = 30; // Adjust speed here
	let pauseDuration = 1000; // Adjust duration here
	let pauseAfterBackspace = 500; // Adjust duration here
	// @ts-ignore
	let pauseTimeout;
	// @ts-ignore
	let typingInterval;
	// @ts-ignore
	let backspaceInterval;
	function startTyping() {
		typingInterval = setInterval(() => {
			if (displayPhrase === '') {
				// Select a random phrase from the list
				currentPhrase = phrases[Math.floor(Math.random() * phrases.length)];
			}

			if (displayPhrase === currentPhrase) {
				// Start pause before backspacing
				pauseTimeout = setTimeout(() => {
					startBackspace();
				}, pauseDuration);
				// @ts-ignore
				clearInterval(typingInterval);
			} else {
				// Start typing
				displayPhrase = currentPhrase.slice(0, displayPhrase.length + 1);
			}
		}, getRandomSpeed(typingSpeedRange));
	}
	function startBackspace() {
		backspaceInterval = setInterval(() => {
			if (displayPhrase === '') {
				// Start pause after backspacing before typing new phrase
				// @ts-ignore
				clearInterval(backspaceInterval);
				pauseTimeout = setTimeout(() => {
					// Reset cursor and select a new phrase
					currentPhrase = phrases[Math.floor(Math.random() * phrases.length)];
					startTyping();
				}, pauseAfterBackspace);
			} else {
				// Start backspacing
				displayPhrase = displayPhrase.slice(0, -1);
			}
		}, backspaceSpeed);
	}

	// @ts-ignore
	function getRandomSpeed(range) {
		return Math.floor(Math.random() * (range[1] - range[0] + 1) + range[0]);
	}

	function stopTyping() {
		// @ts-ignore
		clearInterval(typingInterval);
		// @ts-ignore
		clearInterval(backspaceInterval);
		// @ts-ignore
		clearTimeout(pauseTimeout);
	}

	onMount(startTyping);
	onDestroy(stopTyping);
</script>

<div class=" border-4 blurred border-[#fe8019] hover:scale-105">
	<p
		class="text-info text-4xl slimText flex tracking-widest h-6 my-6 after:animate-blinking before:content-['»'] after:content-['«']"
	>
		&nbsp;{displayPhrase}&nbsp;
	</p>
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
