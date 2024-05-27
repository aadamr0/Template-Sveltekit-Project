<script lang="ts">
	// Import component and animation
	import Footer from './Footer.svelte';
	
</script>

<!-- CONTENT -->
<div id="content-div">
	<!-- MAIN content, based off pages & routing -->
	<main><slot /></main>

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
