<script>
	import { page } from '$app/stores';
	import "fluent-svelte/theme.css";
	import { TextBlock } from "fluent-svelte";
</script>

<svelte:head>
	<link rel="preload" href="/FluentSystemIcons-Regular.ttf" as="font" crossorigin="anonymous">
</svelte:head>

<header>
	<div class="corner">
		<a sveltekit:prefetch href="/">
			<img src="/logo-img.png" alt="ClickPhase" />
			<TextBlock variant="title">ClickPhase</TextBlock>
		</a>
	</div>

	<nav>
		<ul>
			<li class:active={$page.url.pathname === '/'}>
				<a sveltekit:prefetch href="/">
					<p class="linkIcon">&#xF480;</p>
					Home
				</a>
			</li>
			<li class:active={$page.url.pathname === '/software'}>
				<a sveltekit:prefetch href="/software">
					<p class="linkIcon">&#x02A7;</p>
						Software
				</a>
			</li>
			<li class:active={$page.url.pathname === '/animationsvideos'}>
				<a sveltekit:prefetch href="/animationsvideos">
					<p class="linkIcon">&#x0378;</p>
						Animations/Videos
				</a>
			</li>
			<li class:active={$page.url.pathname === '/aboutcontact'}>
				<a sveltekit:prefetch href="/aboutcontact">
					<p class="linkIcon">&#xF4A3;</p>
					About/Contact
				</a>
			</li>
		</ul>
	</nav>

	<div class="corner"/>
</header>

<style>
	@import url("https://unpkg.com/fluent-svelte/theme.css");

	@font-face {
    	font-family: 'FluentUIIcons';
    	src: url('/FluentSystemIcons-Regular.ttf'); /*URL to font*/
	}

	.active a {
		padding: 5px 11px 6px 7px;
		border-radius: var(--fds-control-corner-radius);
    	text-decoration: none;
		font-family: var(--fds-font-family-display);
		display: flex;
   		justify-content: space-around;
   		align-items: center;
		margin: auto;
		vertical-align: middle;
		background-color: var(--fds-accent-default) !important;
		color: var(--fds-text-on-accent-primary) !important;
	}
	
	header {
		position: sticky;
		top: 0;
		z-index: 2147483647;
		display: flex;
		overflow: auto;
		background-color: var(--fds-card-background-default);
		backdrop-filter: blur(60px) saturate(150%);
		-webkit-backdrop-filter: blur(60px) saturate(150%);
		border-bottom: 1px solid var(--fds-card-background-secondary);
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
		margin-right: 3em;
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
		margin-left: 1em;
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

	li a {
		padding: 5px 11px 6px 7px;
		border-radius: var(--fds-control-corner-radius);
    	text-decoration: none;
    	color: var(--fds-text-secondary);
		font-family: var(--fds-font-family-display);
		display: flex;
   		justify-content: space-around;
   		align-items: center;
		margin: auto;
		vertical-align: middle;
	}

	li a:hover {
		padding: 5px 11px 6px 7px;
		border-radius: var(--fds-control-corner-radius);
    	text-decoration: none;
		font-family: var(--fds-font-family-display);
		display: flex;
   		justify-content: space-around;
   		align-items: center;
		margin: auto;
		vertical-align: middle;
		color: var(--fds-accent-text-primary);
		background-color: var(--fds-card-background-secondary);
	}

	.linkIcon {
        font-family: "FluentUIIcons" ;
		font-size: 20px;
		vertical-align: middle;
		align-items: center;
		margin: auto;
		margin-right: 0.3em;
		margin-top: 0.125em;
  	}


</style>
