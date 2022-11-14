<script>
	import "fluent-svelte/theme.css";
	import HeroSection from "/src/sections/launcherx/HeroSection.svelte";
	import AboutLauncherX from "/src/sections/launcherx/AboutLauncherX.svelte";
	import Compatibility from "/src/sections/launcherx/Compatibility.svelte";
	import GroupedFeatures from "/src/sections/launcherx/GroupedFeatures.svelte";
	import RedesignedUI from "/src/sections/launcherx/RedesignedUI.svelte";
	import DownloadLinks from "/src/sections/launcherx/DownloadLinks.svelte";
</script>

<svelte:head>
	<title>LauncherX - ClickPhase</title>
	<meta name="description" content="LauncherX - Modern app launcher for Windows" />
	<meta name="keywords" content="Microsoft, microsoft, windows, app, program, click, phase, software, launcher, launcherX, cool, cool apps, clickphase, granny keyboard, launcherx, dynawin, DynaWin, p5js, p5.js" />
	<meta name="author" content="ClickPhase" />
</svelte:head>

<HeroSection/>
<AboutLauncherX/>
<Compatibility/>
<GroupedFeatures/>
<RedesignedUI/>
<DownloadLinks/>