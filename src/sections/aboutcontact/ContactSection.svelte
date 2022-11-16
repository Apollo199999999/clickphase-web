<script>
	import { TextBlock } from "fluent-svelte";
	import "fluent-svelte/theme.css";
	import HeaderChip from "/src/components/HeaderChip.svelte";
</script>

<div class="container">
	<HeaderChip>Contact</HeaderChip>

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
		you may tell us on the designated GitHub repository for each piece of software. 
		Alternatively, you may email us. We will respond within 5 business days.</TextBlock
	>
</div>

<style>
	.container {
		margin-top: 1em;
		padding: 3em 5vw 4.5em 5vw;
        background: var(--fds-solid-background-secondary);
		word-wrap: break-word;
		align-items: center;
		justify-content: center;
		text-align: center;
	}

	.container :global(.contactHeader) {
		display: block;
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
		max-width: 1100px;
		margin: auto;
		margin-top: 2.8em;
		margin-bottom: 2em;
	}
</style>
