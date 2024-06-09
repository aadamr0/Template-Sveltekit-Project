<script lang="ts">
	export let width;
	export let height;
	export let fontSize;
</script>

<div style="font-size: {fontSize}; width: {width}; height: {height};" class="book-call-button">
	<a href="">Buy the 10 session plan now</a>
</div>

<style>
	.book-call-button {
		background-color: rgb(0, 0, 0);
		color: white;
		border: 1px solid white;
		border-radius: 2.5%;
	}

	.book-call-button a {
		text-decoration: none;
		color: white;
		width: 100%;
		height: 100%;
		display: block;
		display: flex;
		justify-content: center;
		align-items: center;
	}
</style>
