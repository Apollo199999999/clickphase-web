<script>
	import "fluent-svelte/theme.css";
	import HeroSection from "/src/sections/software/HeroSection.svelte";
	import AllSoftware from "/src/sections/software/AllSoftware.svelte";
</script>

<svelte:head>
	<title>Software - ClickPhase</title>
</svelte:head>

<HeroSection/>
<div class="content">
	<AllSoftware/>
</div>

<style>
	.content {
		padding: 5vw;
	}
</style>
