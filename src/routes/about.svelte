<script context="module">
	import { browser, dev } from '$app/env';
	import { TextBlock, Button, Checkbox } from "fluent-svelte";
</script>

<svelte:head>
	<title>About</title>
</svelte:head>

<div class="rainbow-background">	
	
	<Button>Click me!</Button>
	<Checkbox>Check me!</Checkbox>
</div>

<style lang="scss">
		@use "about.scss";
</style>
