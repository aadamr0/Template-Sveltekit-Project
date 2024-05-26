<script lang="ts">
	import { fade } from 'svelte/transition';
	import Footer from './Footer.svelte';

	export let currentUrl: string | null;

	const transitionSpeed = 125;
	const transitionPause = 125;
</script>

<div id="content-div">
	{#key currentUrl}
		<div
			in:fade={{ duration: transitionSpeed, delay: transitionSpeed + transitionPause }}
			out:fade={{ duration: transitionSpeed }}
		>
			<slot />
		</div>
	{/key}
	<Footer />
</div>

<style>
	#content-div {
		overflow: scroll;
	}
</style>
