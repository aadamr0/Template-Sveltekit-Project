<script lang="ts">
	export let width;
	export let height;
	export let fontSize;
</script>

<div style="font-size: {fontSize}; width: {width}; height: {height};" class="book-call-button">
	<a href="">Scehdule a call with Hasan</a>
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
	.button {
    background-color: var(--splash-highlight);
    color: var(--bg-colour);
    border: none;
    padding: 15px 30px;
    font-size: 1em;
    font-family: 'Oswald', sans-serif;
    font-weight: 700;
    text-transform: uppercase;
    cursor: pointer;
    border-radius: 5px;
    transition: background-color 0.3s ease;
}

.button:hover {
    background-color: #00cccc;
}
</style>
