<script lang="ts">
	import { anchor } from "$lib/utils";
</script>

<section id="services-div-mobile">
	<h2>Services</h2>
	<p>I offer just one killer comprehensive package to level up your strength, endurance, and technique. <br>Sessions are tailored to get the most out of you - no one else. <br>Satisfaction and results are guaranteed, or your money back. </p>
	<a on:click={anchor} href="/programme">Find out more -></a>
</section>

<style>
	/* MOBILE */
	@media only screen and (max-width: 6.9in) {
		#services-div-mobile {
			height: 50%;
			width: 100%;
			display: flex;
			flex-direction: column;
			padding-inline: 1rem;
		}
		h2 {
			text-align: center;
		}
		p {
			font-size: 1.5rem;
			text-align: left;
			line-height: 100%;
			flex-grow: 1;
		}
		a {
			font-size: 1.5rem;
			display: flex;
			justify-content: center;
			align-items: center;
			flex-grow: 1;
		}
		.splash {
			color: var(--splash-highlight);
		}
	}
</style>
