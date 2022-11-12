<script>
	import "fluent-svelte/theme.css";
	import HeroSection from "/src/sections/launcherx/HeroSection.svelte";
	import AboutLauncherX from "/src/sections/launcherx/AboutLauncherX.svelte";
	import Compatibility from "/src/sections/launcherx/Compatibility.svelte";
	import AccessAnything from "/src/sections/launcherx/AccessAnything.svelte";
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
<AccessAnything/>