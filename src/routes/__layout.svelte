<script>
	import Header from "/src/header/Header.svelte";
	import "fluent-svelte/theme.css";
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
