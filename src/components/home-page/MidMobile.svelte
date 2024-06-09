<script lang="ts">
	import TestimonialsMobile from './TestimonialsMobile.svelte';
    import ServicesMobile from './ServicesMobile.svelte';
</script>

<section id="mid-section-mobile">
	<TestimonialsMobile />
    <ServicesMobile />
</section>

<style>
	/* DESKTOP */
	@media only screen and (min-width: 6.9in) {
		#mid-section-mobile {
			display: none;
		}
	}

    /* MOBILE */
	@media only screen and (max-width: 6.9in) {
		#mid-section-mobile {
			/* height: 60vh; */
			width: 95vw;
			margin-block: 5vh;
			margin-inline: 2.5vw;
		}
    }
</style>
