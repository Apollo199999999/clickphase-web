<script>
	import "fluent-svelte/theme.css";
	import SvelteSeo from "svelte-seo";
	import HeroSection from "/src/sections/home/HeroSection.svelte";
	import CardsSection from "/src/sections/home/CardsSection.svelte";
	import FeaturedApps from "/src/sections/home/FeaturedApps.svelte";
</script>

<svelte:head>
	<title>Home - ClickPhase</title>
	<meta
		name="description"
		content="The official site of ClickPhase. ClickPhase specialises in desktop software and utlities."
	/>
	<meta
		name="keywords"
		content="Microsoft, microsoft, windows, app, program, click, phase, software, launcher, launcherX, cool, cool apps, clickphase, granny keyboard, launcherx, dynawin, DynaWin, p5js, p5.js"
	/>
	<meta name="author" content="ClickPhase" />
</svelte:head>

<SvelteSeo
	title="Home - ClickPhase"
	description="The official site of ClickPhase. ClickPhase specialises in desktop software and utlities."
	keywords="Microsoft, microsoft, windows, app, program, click, phase, software, launcher, launcherX, cool, cool apps, clickphase, granny keyboard, launcherx, dynawin, DynaWin, p5js, p5.js"
	canonical="https://clickphase.vercel.app"
	openGraph={{
		title: "Home - ClickPhase",
		description: "The official site of ClickPhase. ClickPhase specialises in desktop software and utlities.",
		url: "https://clickphase.vercel.app",
		type: "website",
		images: [
			{
				url: "https://www.example.com/images/og-image.jpg",
				width: 850,
				height: 650,
				alt: "Og Image Alt",
			},
		],
	}}
/>

<p class="hidden-text">
	The official site of ClickPhase. ClickPhase specialises in desktop software
	and utlities.
</p>

<HeroSection />
<CardsSection />
<FeaturedApps />

<style>
	.hidden-text {
		display: none;
	}
</style>
