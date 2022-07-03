<script>
	import "fluent-svelte/theme.css";
	import HeroSection from "/src/sections/home/HeroSection.svelte";
	import CardsSection from "/src/sections/home/CardsSection.svelte";
	import FeaturedApps from "/src/sections/home/FeaturedApps.svelte";
</script>

<svelte:head>
	<title>Home - ClickPhase</title>
	<meta name="description" content="The official site of ClickPhase. ClickPhase specialises in desktop software and utlities." />
	<meta name="keywords" content="Microsoft, microsoft, windows, app, program, click, phase, software, launcher, launcherX, cool, cool apps, clickphase, granny keyboard, launcherx, dynawin, DynaWin, p5js, p5.js" />
	<meta name="author" content="ClickPhase" />
</svelte:head>

<HeroSection/>
<CardsSection/>
<FeaturedApps/>


