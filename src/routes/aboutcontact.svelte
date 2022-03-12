<script>
	import Hero from "/src/sections/aboutcontact/Hero.svelte";
</script>

<svelte:head>
	<title>About/Contact</title>
</svelte:head>

<div class="content">
	<Hero/>
</div>

<style>
	.content {
		width: 100%;
		max-width: var(--column-width);
		margin: var(--column-margin-top) auto 0 auto;
	}
</style>
