<script lang="ts">
	import BookCallButton from '../../components/reusable/BookCallButton.svelte';
	import BookSessionButton from '../../components/reusable/BookSessionButton.svelte';
	import BuyBulkButton from '../../components/reusable/BuyBulkButton.svelte';
</script>

<section>
	<h2>Book now</h2>
	<BookCallButton width="70%" height="" fontSize="1.5rem" />
	<br />
	<BookSessionButton width="70%" height="" fontSize="1.5rem" />
	<br />
	<BuyBulkButton width="70%" height="" fontSize="1.5rem" />
</section>

<style>
    @media only screen and (max-width: 6.9in) {
        section {
            width: 95vw;
            margin-block: 5vh;
            margin-inline: 2.5vw;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            gap: 1rem
        }
    }
</style>