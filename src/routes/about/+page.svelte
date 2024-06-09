<script lang="ts">
	import BookCallButton from '../../components/reusable/BookCallButton.svelte';
</script>

<section id="about-section">
	<h2>About Hasan</h2>
	<p>
		Welcome - I am Coach Hasan, a dedicated boxing instructor with over 6 years of experience in
		boxing and various martial arts. I offer specialised training and coaching sessions. I offer
		quality, personalised training at an incredibly competative price.
	</p>
	<br />
	<BookCallButton width="100%" height="" fontSize="1.5rem" />
</section>

<style>
	/* DESKTOP */
	@media only screen and (min-width: 6.9in) {
	}

	/* MOBILE */
	@media only screen and (max-width: 6.9in) {
		#about-section {
			width: 95vw;
			margin-block: 5vh;
			margin-inline: 2.5vw;
		}
	}
</style>
