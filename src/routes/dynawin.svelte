<script>
	import "fluent-svelte/theme.css";
	import HeroSection from "/src/sections/dynawin/HeroSection.svelte";
	import AboutDynaWin from "/src/sections/dynawin/AboutDynaWin.svelte";
	import DynamicThemeFeature from "/src/sections/dynawin/DynamicThemeFeature.svelte";
	import DynamicWallpaperFeature from "/src/sections/dynawin/DynamicWallpaperFeature.svelte";
</script>

<svelte:head>
	<title>DynaWin - ClickPhase</title>
</svelte:head>

<HeroSection/>
<div class="content">
	<AboutDynaWin/>
</div>

<DynamicThemeFeature/>
<DynamicWallpaperFeature/>

<style>
	.content {
		padding: 2em 5vw 2em 5vw;
	}
</style>
