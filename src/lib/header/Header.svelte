<script>
	import { page } from "$app/stores";
	import logo from "./svelte-logo.svg";
	import "fluent-svelte/theme.css";
	import { Button } from "fluent-svelte";
	import { onMount } from "svelte";

	let loaded = false;
	onMount(() => {
		loaded = true;
	});

	function checkList(ctrl) {
		if (loaded == true) {
			var list = document
				.getElementById("menu")
				.getElementsByTagName("li");

			for (i = 0; i < list.length; i++) {
				list[i].style.background = "#ffffff";
			}

			ctrl.style.background = "#ff0000";
		}
	}
</script>

<header>
	<div class="corner">
		<a href="https://kit.svelte.dev">
			<img src={logo} alt="SvelteKit" />
		</a>
	</div>

	<nav>
		<div class="container">
			<ul id="menu">
				<li class:active={$page.url.pathname === "/"}>
					<Button variant="hyperlink" sveltekit:prefetch href="/"
						>Home</Button>
				</li>
				<li
					class:active={$page.url.pathname === "/about"}
					click={checkList(this)}>
					<Button variant="hyperlink" sveltekit:prefetch href="/about"
						>About</Button>
				</li>
			</ul>
		</div>
	</nav>
	<div class="corner"/>
</header>

<style>
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

	li {
		position: relative;
		height: 32px;
	}

	.container {
		height: 32px;
		margin-top: 8px;
		vertical-align: middle;
	}

</style>
