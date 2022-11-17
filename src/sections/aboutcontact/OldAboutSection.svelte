<script>
	import { TextBlock } from "fluent-svelte";
	import "fluent-svelte/theme.css";
	import { onMount } from "svelte";
	import HeaderChip from "/src/components/HeaderChip.svelte";

	
</script>

<div class="container">
	<HeaderChip>About</HeaderChip>
	<TextBlock variant="titleLarge">About ClickPhase</TextBlock>

	<div class="logo">
		<a href={void 0}>
			<img src="/logo-img.png" alt="ClickPhase" />
			<TextBlock variant="display">ClickPhase</TextBlock>
		</a>
	</div>

	<TextBlock class="bodyText" variant="bodyLarge"
		>Hi! I am Matthias from ClickPhase, the only person here. I make
		software and animations during my free time and I hope you like using my
		software and watching my animations as much as I enjoy making them :)</TextBlock
	>

</div>

<style>
	.container {
		margin-top: 1em;
		padding: 3em 5vw 4.5em 5vw;
		background: var(--fds-solid-background-base);
		word-wrap: break-word;
		align-items: center;
		justify-content: center;
		text-align: center;
	}

	.logo {
		max-width: 450px;
		margin-top: 4em;
		margin-bottom: 4em;
		margin-left: auto;
		margin-right: auto;
	}

	.logo a {
		display: flex;
		align-items: center;
		justify-content: center;
		width: 100%;
		height: 100%;
		text-decoration: none;
		color: inherit;
		margin-right: 3em;
	}

	.logo img {
		width: 6em;
		height: 6em;
		object-fit: contain;
		margin-right: 1.2em;
	}

	.container :global(.bodyText) {
		display: block;
		text-align: center;
		max-width: 1100px;
		margin: auto;
	}

</style>
