<script lang="ts">
	// Global styles
	import '../styles/globals.css';

	// Components
	import Navbar from '../components/Navbar.svelte';
	import MobileMenu from '../components/MobileMenu.svelte';
	import Content from '../components/Content.svelte';

	// Get data
	export let data;
</script>

<!-- APP LAYOUT -->
<div id="app">
	<!-- NAVBAR OR MOBILE MENU (navigation) -->
	<Navbar />
	<MobileMenu />

	<!-- REST OF CONTENT -->
	<Content currentUrl={data.url}>
		<slot />
	</Content>
</div>

<style>
	/* MOBILE */
	@media only screen and (max-width: 6.9in) {
		#app {
			display: grid;
			grid-template-rows: 10% auto;
		}
	}

	/* DESKTOP */
	@media only screen and (min-width: 6.9in) {
		#app {
			display: grid;
			grid-template-rows: 10% auto;
		}
	}
</style>
