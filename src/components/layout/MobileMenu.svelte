<script lang="ts">
	import { anchor } from '$lib/utils';

	// Components
	import NavScreen from './NavScreen.svelte';

	// Toggle navscreen logic
	let navScreenIsOpen: boolean = false;
	const toggleNavScreen = () => (navScreenIsOpen = !navScreenIsOpen);
</script>

<!-- MOBILE header -->
<div id="mobile-menu-div">
	<a href="/" on:click={anchor} class="logo-a">Home</a>
	<button on:click={toggleNavScreen} id="open-button">Menu</button>
</div>

<!-- NAVSCREEN (full screen, fixed position, toggled with open/close button) -->
<NavScreen isOpen={navScreenIsOpen} {toggleNavScreen} />

<style>
	/* DESKTOP */
	@media only screen and (min-width: 6.9in) {
		#mobile-menu-div {
			display: none;
			border: 1px solid grey;
		}
	}

	/* MOBILE */
	@media only screen and (max-width: 6.9in) {
		#mobile-menu-div {
			display: flex;
			justify-content: space-between;
			background-color: var(--second-bg-colour);
		}
	}
</style>
