<script>
	import { anchor } from '$lib/utils';
</script>

<!-- DESKTOP NAVBAR -->
<div id="navbar-div">
	<a on:click={anchor} href="/" class="logo-a">Home</a>
	<a on:click={anchor} href="/page-1" class="page-1-a">page 1</a>
	<a on:click={anchor} href="/" class="page-2-a">page 2</a>
	<a on:click={anchor} href="/" class="page-3-a">page 3</a>
</div>

<style>
	/* MOBILE  */
	@media only screen and (max-width: 6.9in) {
		#navbar-div {
			display: none;
		}
	}
</style>
