<script>
	import Header from "/src/header/Header.svelte";
	import Footer from "/src/sections/Footer.svelte";
	import "fluent-svelte/theme.css";
	import { TextBlock } from "fluent-svelte";
	import { webVitals } from "/src/vitals";
	import { browser } from "$app/environment";
	import { page } from "$app/stores";
	import { inject } from "@vercel/analytics";

	// Make sure to call this only once in your app
	// Ignore the "script.js" not being found error, it will work once deployed to Vercel.
	inject();

	let analyticsId = import.meta.env.VERCEL_ANALYTICS_ID;
	$: if (browser && analyticsId) {
		webVitals({
			path: $page.url.pathname,
			params: $page.params,
			analyticsId,
		});
	}
</script>

<Header />

<meta name="viewport" content="width=device-width, initial-scale=1.0" />
<main>
	<slot />
</main>

<Footer />

<style>
	/* Some base styles to get things looking right. */
	:global(body) {
		background-color: var(--fds-solid-background-base);
		color: var(--fds-text-primary);
		margin: 0%;
		padding: 0%;
		width: 100%;
	}

	:global(h1, h2, h3, h4, h5, h6, p, span) {
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
