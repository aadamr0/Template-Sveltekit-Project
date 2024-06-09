<script lang="ts">
	import BookCallButton from '../../components/reusable/BookCallButton.svelte';
    import BookSessionButton from '../../components/reusable/BookSessionButton.svelte';
    import BuyBulkButton from '../../components/reusable/BuyBulkButton.svelte';

	import { anchor } from '../../lib/utils';
</script>

<section id="programme-section">
	<h1>THE PROGRAMME Explained</h1>
	<h2>Outline</h2>
	<p>
		My programme is designed to be a straightforward, comprehensive, killer solution to improving
		fitness.
	</p>
    <br>
    <br>
	<p>
		I have designed the session to span 2 hours and work on a range of areas. One session works on:
	</p>
	<ul>
		<li><p>Increasing cardio performance</p></li>
		<li><p>Increasing strength and conditioning</p></li>
		<li><p>Improving technique</p></li>
		<li><p>Nutrition plans</p></li>
		<li><p>Accountability</p></li>
	</ul>
    <br>
	<p>
		Sessions will be tailored around your goals and needs. A more heavily targeted plan is possible,
		and just requires prior consultation.
	</p>
    <br>
    <br>
	<h2>Booking options and Pricing</h2>
	<p>Sessions are bookable in two forms:</p>
	<ul>
		<li>
			<p class="splash">Pay as you go</p>
			<p class="splash">£30 per 2 hour session</p>
		</li>
		<li>
			<p class="splash">(Recommended) Bulk (10 sessions)</p>
			<p class="splash">£20 per 2 hour session</p>
		</li>
	</ul>
	<p>
		To arrange a talk or a session with me, just follow the links below, or visit the <a on:click={anchor} href="/book">booking page</a> on the website.
	</p>
    <br>
    <br>
	<h2>BOOK NOW</h2>
    <div id="booking-buttons">
        <BookCallButton width="100%" height="" fontSize="1.5rem" />
        <BookSessionButton width="100%" height="" fontSize="1.5rem" />
        <BuyBulkButton width="100%" height="" fontSize="1.5rem" />
    </div>
</section>

<style>
	/* DESKTOP */
	@media only screen and (min-width: 6.9in) {
	}

	/* MOBILE */
	@media only screen and (max-width: 6.9in) {
		#programme-section {
			width: 95vw;
			margin-block: 5vh;
			margin-inline: 2.5vw;
		}
        li {
            list-style: disc;
            list-style-position: inside;
        }
        p {
            display: inline;
        }
        .splash {
			color: var(--splash-highlight);
		}
	}

</style>
