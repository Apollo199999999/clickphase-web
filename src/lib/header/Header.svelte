<script>
	import { page } from "$app/stores";
	import logo from "./svelte-logo.svg";
	import "fluent-svelte/theme.css";
	import { Button } from "fluent-svelte";

</script>

<header>
	<nav>
		<div class="corner">
			<a href="https://kit.svelte.dev">
				<img src={logo} alt="SvelteKit" />
			</a>
		</div>

		<div>
			<ul id="menu">
				<li class:active={$page.url.pathname === "/"}>
					<a sveltekit:prefetch href="/">Home</a>
				</li>
				<li
					class:active={$page.url.pathname === "/about"}>
					<a sveltekit:prefetch href="/about">About</a>
				</li>
			</ul>
		</div>
	</nav>
	<div class="corner"/>
</header>

<style>
	@import url("https://unpkg.com/fluent-svelte/theme.css");

	header {
		display: flex;
		justify-content: space-between;
	}

	.corner {
		width: 3em;
		height: 3em;
	}

	.corner a {
		display: flex;
		align-items: center;
		justify-content: center;
		width: 100%;
		height: 100%;
	}

	.corner img {
		width: 2em;
		height: 2em;
		object-fit: contain;
	}

	nav {
		display: flex;
		justify-content: center;
		position: relative;
	}

	ul {
		position: relative;
		padding: 0px;
		margin: 0px;
		height: 3em;
		display: flex;
		justify-content: center;
		align-items: center;
		list-style: none;
	}
	li a {
		margin-left: 20px;
		text-decoration: none;
		color: var(--fds-accent-default);
		font-family: var(--fds-font-family-text)
		
	}
	li a:hover{
		color: var(--fds-accent-secondary);
		font-family: var(--fds-font-family-text);
	}


</style>
