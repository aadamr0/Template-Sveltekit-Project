<script lang="ts">
	import BookCallButton from '../reusable/BookCallButton.svelte';
</script>

<section id="hero-section-mobile">
	<div id="mobile-video-div">
		<video id="mobile-video" autoplay muted loop playsinline>
			<source src="/hero-video.mov" />
		</video>
	</div>
	<div id="mobile-headline-div">
		<h1>GET IN SHAPE WITH HASAN PT</h1>
		<h2>Personalised training, blah nlah blah</h2>
		<a href="">Book your consultation now</a>
	</div>
	<div id="mobile-cta-div">
		<div id="mobile-button-container">
			<BookCallButton width="100%" height="5rem" fontSize="1.5rem" />
		</div>
		<object data="/swipe-top-icon.svg" type=""></object>
	</div>
</section>

<style>
	/* DESKTOP */
	@media only screen and (min-width: 6.9in) {
		#hero-section-mobile {
			display: none;
		}
	}

	/* MOBILE */
	@media only screen and (max-width: 6.9in) {
		#hero-section-mobile {
			height: 80vh;
			width: 95vw;
			margin-block: 5vh;
			margin-inline: 2.5vw;
			/* border: 1px dotted white; */
			display: grid;
			grid-template-rows: 1fr 1fr 1fr;
		}
		#mobile-video-div,
		#mobile-cta-div,
		#mobile-headline-div {
			/* border: 1px solid grey; */
			position: relative;
		}
		video {
			position: absolute;
			top: 0;
			left: 0;
			width: 100%;
			height: 100%;
			object-fit: cover;
		}
		#mobile-headline-div {
			display: flex;
			flex-direction: column;
			justify-content: center;
			align-items: center;
		}
		h1 {
			font-size: 2.5rem;
			line-height: 100%;
			text-align: center;
			color: white;
		}
		h2 {
			line-height: 100%;
			text-align: center;
		}
		a {
			text-align: center;
			display: block;
			font-size: 1.5rem;
		}
		#mobile-cta-div {
			display: flex;
			justify-content: space-around;
			align-items: center;
			flex-direction: column;
		}
		#mobile-button-container {
			width: 80%;
		}
		object {
			width: 20%;
			height: 20%;
			background-color: var(--main-text);
		}
	}
</style>
