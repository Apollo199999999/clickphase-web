<script lang="ts">
	import { TextBlock } from "fluent-svelte";
	import "fluent-svelte/theme.css";
	import { onMount } from "svelte";

	onMount(() => {
		//function to change the scale of the logo div
		function changeLogoScale() {
			//scale logo
			let logo = <HTMLElement>document.querySelector(".logo");
			let width = logo.clientWidth;
			let scale = width / 450;
			logo.style.transform = "scale(" + scale + ")";
		}

		//change the logo scale everytime the window resizes
		window.addEventListener("resize", changeLogoScale);
		changeLogoScale();
	});
</script>

<div class="container">
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

	<div class="divider" />

	<TextBlock class="contactHeader" variant="titleLarge"
		>Contact ClickPhase</TextBlock
	>

	<ul>
		<li>
			<TextBlock class="linkTextBlock" variant="bodyLarge">
				Email:
				<a class="links" href="mailto:clickphasehelp@gmail.com">
					clickphasehelp@gmail.com
				</a>
			</TextBlock>
		</li>
		<li>
			<TextBlock class="linkTextBlock" variant="bodyLarge"
				>GitHub Account:
				<a
					class="links"
					target="_blank"
					rel="noopener noreferrer"
					href="https://github.com/Apollo199999999"
				>
					https://github.com/Apollo199999999
				</a>
			</TextBlock>
		</li>
		<li>
			<TextBlock class="linkTextBlock" variant="bodyLarge"
				>YouTube Channel:
				<a
					class="links"
					target="_blank"
					rel="noopener noreferrer"
					href="https://www.youtube.com/channel/UCUy3erIflkjOWYsfGPVIM6g"
				>
					https://www.youtube.com/channel/UCUy3erIflkjOWYsfGPVIM6g
				</a>
			</TextBlock>
		</li>
		<li>
			<TextBlock class="linkTextBlock" variant="bodyLarge"
				>Personal YouTube Channel:
				<a
					class="links"
					target="_blank"
					rel="noopener noreferrer"
					href="https://www.youtube.com/channel/UCyx7JU3eigRv4A9HnxRWAIQ"
				>
					https://www.youtube.com/channel/UCyx7JU3eigRv4A9HnxRWAIQ
				</a>
			</TextBlock>
		</li>
	</ul>

	<TextBlock class="contactText" variant="bodyLarge"
		>If you need support or want to leave feedback, 
		you may tell us on the designated GitHub repository for each software. 
		Alternatively, you may email us. We will respond within 5 business days.</TextBlock
	>
</div>

<style>
	.container {
		width: 100%;
		word-wrap: break-word;
		align-items: center;
		justify-content: center;
		text-align: center;
		margin-top: 1em;
	}

	/* TODO: set logo scale */
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
		max-width: 900px;
		margin: auto;
		margin-bottom: 2em;
	}

	.divider {
		border-top: 1px solid var(--fds-divider-stroke-default);
		margin: auto;
		max-width: 1200px;
	}

	.container :global(.contactHeader) {
		display: block;
		margin-top: 1em;
		margin-bottom: 1em;
		text-align: center;
	}

	.container :global(.linkTextBlock) {
		text-align: center;
	}

	.links {
		color: var(--fds-accent-text-primary);
		text-align: center;
		/* These are technically the same, but use both */
		overflow-wrap: break-word;
		word-wrap: break-word;

		-ms-word-break: break-all;
		/* This is the dangerous one in WebKit, as it breaks things wherever */
		word-break: break-all;
		/* Instead use this non-standard one: */
		word-break: break-word;

		/* Adds a hyphen where the word breaks, if supported (No Blink) */
		-ms-hyphens: auto;
		-moz-hyphens: auto;
		-webkit-hyphens: auto;
		hyphens: auto;
	}

	.container ul{
		padding: 0;
		-webkit-padding-start: 0;
    	list-style-type: none;
	}

	.container ul li {
		margin-bottom: 0.2em;
	}

	.container :global(.contactText) {
		display: block;
		text-align: center;
		max-width: 900px;
		margin: auto;
		margin-top: 2.8em;
		margin-bottom: 2em;
	}
</style>
