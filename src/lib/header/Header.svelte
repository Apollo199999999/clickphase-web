<script>
	import { page } from '$app/stores';
	import logo from './logo-img.png';
	import "fluent-svelte/theme.css";
	import { TextBlock, Button } from "fluent-svelte";
</script>

<header>
	<div class="corner">
		<a sveltekit:prefetch href="/">
			<img src={logo} alt="ClickPhase" />
			<TextBlock variant="title">ClickPhase</TextBlock>
		</a>
	</div>

	<nav>
		<ul>
			<li class:active={$page.url.pathname === '/'}>
				<Button sveltekit:prefetch href="/">Home</Button>
			</li>
			<li class:active={$page.url.pathname === '/about'}>
				<Button sveltekit:prefetch href="/about">About</Button>
			</li>
		</ul>
	</nav>

	<div class="corner">
		<!-- TODO put something else here? github link? -->
	</div>
</header>

<style>
	@import url("https://unpkg.com/fluent-svelte/theme.css");
	header {
		display: flex;
		background-color: var(--fds-card-background-default);
	}

	.corner {
		height: 4em;
	}

	.corner a {
		display: flex;
		align-items: center;
		justify-content: center;
		width: 100%;
		height: 100%;
		text-decoration: none;
		color: inherit;
		margin-right: 1em;
		
	}

	.corner img {
		width: 2.5em;
		height: 2.5em;
		object-fit: contain;
		margin-right: 0.5em;
	}

	nav {
		display: flex;
		justify-content: center;
		margin-left: 1.5em;
	}


	ul {
		position: relative;
		padding: 0;
		margin: auto;
		display: flex;
		justify-content: center;
		align-items: center;
		list-style: none;
		background-size: contain;
	}

	li {
		position: relative;
		height: 100%;
		margin-right: 0.5em;
	}

</style>
