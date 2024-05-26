<script lang="ts">
	import '../styles/globals.css';

	import Navbar from '../components/Navbar.svelte';
	import MobileMenu from '../components/MobileMenu.svelte';
	import Content from '../components/Content.svelte';

	export let data;
</script>

<div id="app">
	<div id="navbar-div"><Navbar /></div>
	<div id="mobile-menu-div"><MobileMenu /></div>
	<Content currentUrl={data.url}>
		<slot />
	</Content>
</div>

<style>
	/* MOBILE  */
	@media only screen and (max-width: 6.9in) {
		#navbar-div {
			display: none;
		}
	}

	/* DESKTOP */
	@media only screen and (min-width: 6.9in) {
		#mobile-menu-div {
			display: none;
		}
	}
</style>
