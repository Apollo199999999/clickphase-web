<script>
	import "fluent-svelte/theme.css";
	import SvelteSeo from "svelte-seo";
	import HeroSection from "/src/sections/launcherx/HeroSection.svelte";
	import AboutLauncherX from "/src/sections/launcherx/AboutLauncherX.svelte";
	import Compatibility from "/src/sections/launcherx/Compatibility.svelte";
	import GroupedFeatures from "/src/sections/launcherx/GroupedFeatures.svelte";
	import RedesignedUI from "/src/sections/launcherx/RedesignedUI.svelte";
	import DownloadLinks from "/src/sections/launcherx/DownloadLinks.svelte";
</script>

<svelte:head>
	<meta name="author" content="ClickPhase" />
</svelte:head>

<SvelteSeo
	title="LauncherX - ClickPhase"
	description="LauncherX - Modern app launcher for Windows"
	keywords="Microsoft, microsoft, windows, app, program, click, phase, software, launcher, launcherX, cool, cool apps, clickphase, granny keyboard, launcherx, dynawin, DynaWin, p5js, p5.js, redditvideogenerator, reddit, video, generator, bot, api, youtube"
	canonical="https://clickphase.vercel.app/launcherx"
	openGraph={{
		title: "LauncherX - ClickPhase",
		description: "LauncherX - Modern app launcher for Windows",
		url: "https://clickphase.vercel.app/launcherx",
		type: "website",
		images: [
			{
				url: "https://clickphase.vercel.app/open-graph-images/LauncherXImage.png",
				width: 1200,
				height: 630,
				alt: "LauncherX - ClickPhase",
			},
		],
	}}
/>

<HeroSection/>
<AboutLauncherX/>
<Compatibility/>
<GroupedFeatures/>
<RedesignedUI/>
<DownloadLinks/>