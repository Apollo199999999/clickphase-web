<script>
	import "fluent-svelte/theme.css";
	import HeroSection from "/src/sections/dynawin/HeroSection.svelte";
	import AboutDynaWin from "/src/sections/dynawin/AboutDynaWin.svelte";
import Aboutcontact from "./aboutcontact.svelte";
</script>

<svelte:head>
	<title>DynaWin - ClickPhase</title>
</svelte:head>

<HeroSection/>
<div class="content">
	<AboutDynaWin/>
</div>

<style>
	.content {
		padding: 2em 5vw 2em 5vw;
	}
</style>
