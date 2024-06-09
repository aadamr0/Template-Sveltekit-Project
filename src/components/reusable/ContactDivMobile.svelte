<script lang="ts">
	import BookCallButton from './BookCallButton.svelte';
</script>

<div id="contact-div-mobile">
	<h2>Get in touch</h2>
	<p>Get in touch with me</p>
	<ul>
		<li>
			<p>Phone/WhatsApp</p>
			<a href="">0123456789</a>
		</li>
		<li>
			<p>Email</p>
			<a href="">email@hasansemail.com</a>
		</li>
		<li id="buttons-li">
			<BookCallButton width="100%" height="100%" fontSize="1.5rem" />
		</li>
	</ul>
</div>

<style>
	#contact-div-mobile {
		text-align: center;
		width: 100%;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}
	p {
		display: inline;
	}
	ul {
		list-style: none;
		width: 80%;
		margin-top: 1rem;
	}
	li {
		display: flex;
		justify-content: space-between;
		margin-bottom: .5rem;
	}
	#buttons-li {
		display: flex;
		justify-content: center;
	}
	a {
		font-size: 1.25rem;
		text-decoration: none;
	}
</style>
