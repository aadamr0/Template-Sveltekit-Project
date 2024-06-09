<script lang="ts">
    import ContactDivMobile from "../reusable/ContactDivMobile.svelte";
</script>

<section id="bottom-section">
    <ContactDivMobile />
</section>

<style>
    /* DESKTOP */
    @media only screen and (min-width: 6.9in) {
        #bottom-section {
            display: none;
        }
    }

    /* MOBILE */
    @media only screen and (max-width: 6.9in) {
        #bottom-section {
            height: 40vh;
            width: 95vw;
            margin-block: 3rem;
            margin-inline: 2.5vw;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            gap: 1rem;
        }
    }
</style>
