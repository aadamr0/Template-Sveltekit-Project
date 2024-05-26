<script lang="ts">
	export let isOpen;
	export let toggleNavScreen;
</script>

<!-- Fullscreen mobile NAVSCREEN -->
<nav class:open={isOpen}>
	<button id="close-button" on:click={toggleNavScreen}>Close menu</button>
	<a on:click={toggleNavScreen} href="/">Home</a>
	<a on:click={toggleNavScreen} href="/page-1">Page 1</a>
</nav>

<style>
	nav {
		visibility: hidden;
		position: fixed;
		top: 0;
		left: 0;
		height: 100%;
		width: 100%;
		background-color: grey;
		z-index: 1000;
		transition-duration: 250ms;
		opacity: 0;
	}
	.open {
		visibility: visible;
		opacity: 1;
	}

	@media only screen and (min-width: 6.9in) {
		nav {
			display: none;
		}
	}
</style>
