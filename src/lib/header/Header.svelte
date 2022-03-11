<script>
	import { page } from '$app/stores';
	import logo from './logo-img.png';
	import "fluent-svelte/theme.css";
	import { TextBlock, Button } from "fluent-svelte";

</script>

<link rel="preload" href="./FluentSystemIcons-Regular.ttf" as="font" type="font/woff" crossorigin="anonymous">

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
				<a sveltekit:prefetch href="/" on:click="{this.addClass("active")}">Home</a>
			</li>
			<li class:active={$page.url.pathname === '/software'}>
				<a sveltekit:prefetch href="/software" on:click="{this.addClass("active")}">Software</a>
			</li>
			<li class:active={$page.url.pathname === '/videos'}>
				<a sveltekit:prefetch href="/videos" on:click="{this.addClass("active")}">Animations/Videos</a>
			</li>
			<li class:active={$page.url.pathname === '/about'}>
				<a sveltekit:prefetch href="/about" on:click="{this.addClass("active")}">About/Contact</a>
			</li>
		</ul>
	</nav>

	<div class="corner"/>
</header>

<style>
	@import url("https://unpkg.com/fluent-svelte/theme.css");

	.active{
		-webkit-appearance: button;
    	-moz-appearance: button;
    	appearance: button;
		border-radius: 5px;
		background-color: var(--fds-accent-default);
	}
	
	header {
		display: flex;
		background-color: var(--fds-card-background-default);
		overflow: auto;
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
		-webkit-appearance: button;
    	-moz-appearance: button;
    	appearance: button;
		padding: 5px 12px 5px 10px;
		border-radius: 5px;
    	text-decoration: none;
    	color: var(--fds-text-secondary);
		font-family: var(--fds-font-family-display);
	}

	li a:hover {
		-webkit-appearance: button;
    	-moz-appearance: button;
    	appearance: button;
		padding: 5px 12px 5px 10px;
		border-radius: 5px;
    	text-decoration: none;
		font-family: var(--fds-font-family-display);
		background-color: var(--fds-card-background-secondary);
	}

	li a[href="/"]::before{
		content: '\F480' ;
		font-family: "FluentSystemIcons-Regular";
		font-size: 18px;
   		float: left;
   		margin-right: 5px;
		margin-top: 3px;
	}

	li a[href="/software"]::before{
		content: '\02A7' ;
		font-family: "FluentSystemIcons-Regular";
		font-size: 18px;
   		float: left;
   		margin-right: 5px;
		margin-top: 3px;
	}

	li a[href="/videos"]::before{
		content: '\0378' ;
		font-family: "FluentSystemIcons-Regular";
		font-size: 18px;
   		float: left;
   		margin-right: 5px;
		margin-top: 3px;
	}

	li a[href="/about"]::before{
		content: '\F4A3' ;
		font-family: "FluentSystemIcons-Regular";
		font-size: 18px;
   		float: left;
   		margin-right: 5px;
		margin-top: 3px;
	}


</style>
