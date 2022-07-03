<script>
	import "fluent-svelte/theme.css";
	import HeroSection from "/src/sections/animationsvideos/HeroSection.svelte";
	import VideoChannels from "/src/sections/animationsvideos/VideoChannels.svelte";
</script>

<svelte:head>
	<title>Animations & Videos - ClickPhase</title>
	<meta name="description" content="Animations and Videos from ClickPhase and others." />
	<meta name="keywords" content="Microsoft, microsoft, windows, app, program, click, phase, software, launcher, launcherX, cool, cool apps, clickphase, granny keyboard, launcherx, dynawin, DynaWin, p5js, p5.js" />
	<meta name="author" content="ClickPhase" />
</svelte:head>

<HeroSection/>
<div class="content">
	<VideoChannels/>
</div>

<style>
	.content {
		padding: 2em 5vw 2em 5vw;
	}
</style>
