<script>
	import "fluent-svelte/theme.css";
	import HeroSection from "/src/sections/aboutcontact/HeroSection.svelte";
	import InfoSection from "/src/sections/aboutcontact/InfoSection.svelte";
</script>

<svelte:head>
	<title>About & Contact - ClickPhase</title>
	<meta name="description" content="About ClickPhase and how to contact ClickPhase." />
	<meta name="keywords" content="Microsoft, microsoft, windows, app, program, click, phase, software, launcher, launcherX, cool, cool apps, clickphase, granny keyboard, launcherx, dynawin, DynaWin, p5js, p5.js" />
	<meta name="author" content="ClickPhase" />
</svelte:head>

<HeroSection/>
<div class="content">
	<InfoSection/>
</div>

<style>
	.content {
		padding: 2em 5vw 2em 5vw;
	}
</style>
