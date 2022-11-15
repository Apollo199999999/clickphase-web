<script>
	import "fluent-svelte/theme.css";
	import SvelteSeo from "svelte-seo";
	import HeroSection from "/src/sections/software/HeroSection.svelte";
	import AllSoftware from "/src/sections/software/AllSoftware.svelte";
</script>

<svelte:head>
	<meta name="author" content="ClickPhase" />
</svelte:head>

<SvelteSeo
	title="Software - ClickPhase"
	description="Software made by ClickPhase. LauncherX, DynaWin, and others."
	keywords="Microsoft, microsoft, windows, app, program, click, phase, software, launcher, launcherX, cool, cool apps, clickphase, granny keyboard, launcherx, dynawin, DynaWin, p5js, p5.js"
	canonical="https://clickphase.vercel.app/software"
	openGraph={{
		title: "Software - ClickPhase",
		description: "Software made by ClickPhase. LauncherX, DynaWin, and others.",
		url: "https://clickphase.vercel.app/software",
		type: "website",
		images: [
			{
				url: "https://clickphase.vercel.app/ClickPhaseImage.png",
				width: 1200,
				height: 630,
				alt: "Software - ClickPhase",
			},
		],
	}}
/>

<HeroSection/>
<AllSoftware/>