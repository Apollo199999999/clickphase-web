<script>
	import "fluent-svelte/theme.css";
	import HeroSection from "/src/sections/software/HeroSection.svelte";
	import AllSoftware from "/src/sections/software/AllSoftware.svelte";
</script>

<svelte:head>
	<title>Software - ClickPhase</title>
	<meta name="description" content="Software made by ClickPhase. LauncherX, DynaWin, and others." />
	<meta name="keywords" content="Microsoft, microsoft, windows, app, program, click, phase, software, launcher, launcherX, cool, cool apps, clickphase, granny keyboard, launcherx, dynawin, DynaWin, p5js, p5.js" />
	<meta name="author" content="ClickPhase" />
</svelte:head>

<HeroSection/>
<div class="content">
	<AllSoftware/>
</div>

<style>
	.content {
		padding: 2em 5vw 2em 5vw;
	}
</style>
