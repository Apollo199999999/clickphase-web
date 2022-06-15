<script>
	import Header from "/src/header/Header.svelte";
	import "fluent-svelte/theme.css";
	import { TextBlock } from "fluent-svelte";
</script>

<Header />

<meta name="viewport" content="width=device-width, initial-scale=1.0" />
<main>
	<slot />
</main>

<style>
	/* Some base styles to get things looking right. */
	:global(body) {
		background-color: var(--fds-solid-background-base);
		color: var(--fds-text-primary);
		margin: 0%;
		padding: 0%;
		width: 100%;
	}

	
	:global(h1, h2, h3, h4, h5, h6, p, span){
		font-family: var(--fds-font-family-display) !important;
	}

	main {
		flex: 1;
		display: flex;
		flex-direction: column;
		width: 100%;
		margin: 0, auto;
		padding: 0%;
		box-sizing: border-box;
		overflow-x: hidden;
	}

</style>
