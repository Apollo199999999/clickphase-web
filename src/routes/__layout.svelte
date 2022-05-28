<script>
	import Header from "/src/header/Header.svelte";
	import "fluent-svelte/theme.css";
	import { ContentDialog, Button } from "fluent-svelte";

	//variable to control state of ContentDialog
	let open = true;

	//function to close dialog and make webpage scrollable
	function enableWebpage() {
		open = false;
		document.getElementsByTagName("body")[0].style = "position: absolute";
	}
</script>

<Header />

<meta name="viewport" content="width=device-width, initial-scale=1.0" />
<main>
	<slot />
</main>

<ContentDialog class="info-dialog" bind:open title="Information">
	The website you are currently on is the new website for ClickPhase, and is
	still under progress. To visit the old website, go to <a
		href="https://clickphase.weebly.com"
		target="_blank"
		rel="noopener noreferrer"
		class="dialog-hyperlink">clickphase.weebly.com</a
	>
	<Button slot="footer" variant="accent" on:click={() => enableWebpage()}
		>Okay</Button
	>
</ContentDialog>

<style>
	/* Some base styles to get things looking right. */
	:global(body) {
		background-color: var(--fds-solid-background-base);
		color: var(--fds-text-primary);
		margin: 0%;
		padding: 0%;
		width: 100%;
		position: fixed;
	}

	:global(.info-dialog) {
		z-index: 2147483647;
	}

	.dialog-hyperlink {
		font-family: var(--fds-font-family-text);
		color: var(--fds-accent-text-primary);
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
