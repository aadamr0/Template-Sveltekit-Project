<script lang="ts">
	export let isOpen;
	export let toggleNavScreen: () => void;
</script>

<!-- Fullscreen mobile NAVSCREEN -->
<nav class:open={isOpen}>
	<button id="close-button" on:click={toggleNavScreen}>Close menu</button>
	<a on:click={toggleNavScreen} href="/">Home</a>
	<a on:click={toggleNavScreen} href="/programme">THE PROGRAMME</a>
	<a on:click={toggleNavScreen} href="/about">About me</a>
	<a on:click={toggleNavScreen} href="/book">Booking page</a>
</nav>

<style>
	/* MOBILE */
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
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		gap: 3rem;
	}
	.open {
		visibility: visible;
		opacity: 1;
	}
	#close-button {
		position: absolute;
		top: 1rem;
		right: 1rem;
	}

	/* DESKTOP */
	@media only screen and (min-width: 6.9in) {
		nav {
			display: none;
		}
	}
</style>
