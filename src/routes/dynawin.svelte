<script>
	import "fluent-svelte/theme.css";
	import HeroSection from "/src/sections/dynawin/HeroSection.svelte";
	import AboutDynaWin from "/src/sections/dynawin/AboutDynaWin.svelte";
	import Compatibility from "/src/sections/dynawin/Compatibility.svelte";
	import DynamicThemeFeature from "/src/sections/dynawin/DynamicThemeFeature.svelte";
	import DynamicWallpaperFeature from "/src/sections/dynawin/DynamicWallpaperFeature.svelte";
	import AutomaticUpdates from "/src/sections/dynawin/AutomaticUpdates.svelte";
	import DownloadLinks from "/src/sections/dynawin/DownloadLinks.svelte";
</script>

<svelte:head>
	<title>DynaWin - ClickPhase</title>
</svelte:head>

<HeroSection/>
<AboutDynaWin/>
<Compatibility/>
<DynamicThemeFeature/>
<DynamicWallpaperFeature/>
<AutomaticUpdates/>
<DownloadLinks/>


