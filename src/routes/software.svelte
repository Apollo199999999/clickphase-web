<script>
	import "fluent-svelte/theme.css";
	import HeroSection from "/src/sections/software/HeroSection.svelte";
	import AllSoftware from "/src/sections/software/AllSoftware.svelte";
</script>

<svelte:head>
	<title>ClickPhase - Software</title>
</svelte:head>

<HeroSection/>
<div class="content">
	<AllSoftware/>
</div>

<style>
	.content {
		padding: 2em;
	}
</style>
