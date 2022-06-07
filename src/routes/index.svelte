<script>
	import "fluent-svelte/theme.css";
	import HeroSection from "/src/sections/home/HeroSection.svelte";
	import CardsSection from "/src/sections/home/CardsSection.svelte";
	import FeaturedApps from "/src/sections/home/FeaturedApps.svelte";
</script>

<svelte:head>
	<title>Home - ClickPhase</title>
</svelte:head>

<HeroSection/>

<div class="content">
	<CardsSection/>
	<FeaturedApps/>
</div>

<style>
	.content {
		padding: 2em 5vw 2em 5vw;
	}
</style>

