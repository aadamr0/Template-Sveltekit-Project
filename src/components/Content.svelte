<script lang="ts">
	// Import component and animation
	import Footer from './Footer.svelte';
	import { fade } from 'svelte/transition';
	
	// Get the transition duration from the store
	import { transitionDuration } from '../stores/transition';
	import { onDestroy } from 'svelte';
	let transitionSpeed: number;
	const unsubscribeTransitionDuration = transitionDuration.subscribe((value) => {
		transitionSpeed = value;
	});
	onDestroy(unsubscribeTransitionDuration);

	// Props
	export let currentUrl: string | null;
</script>

<!-- CONTENT -->
<div id="content-div">
	<!-- MAIN content, based off pages & routing, with a fading transition animation between pages -->
	{#key currentUrl}
		<main
			in:fade={{ duration: transitionSpeed, delay: 2 * transitionSpeed }}
			out:fade={{ duration: transitionSpeed }}
		>
			<slot />
		</main>
	{/key}

	<!-- FOOTER -->
	<Footer />
</div>

<style>
	/* MOBILE  */
	@media only screen and (max-width: 6.9in) {
		#content-div {
			overflow: scroll;
			display: grid;
			grid-template-rows: 1fr auto;
		}
	}

	/* DESKTOP */
	@media only screen and (min-width: 6.9in) {
		#content-div {
			overflow: scroll;
			height: 100%;
			display: grid;
			grid-template-rows: 1fr auto;
		}
	}
</style>
