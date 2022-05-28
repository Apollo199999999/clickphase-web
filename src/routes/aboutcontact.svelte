<script>
	import "fluent-svelte/theme.css";
	import HeroSection from "/src/sections/aboutcontact/HeroSection.svelte";
	import InfoSection from "/src/sections/aboutcontact/InfoSection.svelte";
</script>

<svelte:head>
	<title>About & Contact - ClickPhase</title>
</svelte:head>

<HeroSection/>
<div class="content">
	<InfoSection/>
</div>

<style>
	.content {
		padding: 2em;
	}
</style>
