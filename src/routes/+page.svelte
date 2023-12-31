<script>
	import "fluent-svelte/theme.css";
	import SvelteSeo from "svelte-seo";
	import CardsSection from "/src/sections/home/CardsSection.svelte";
	import FeaturedApps from "/src/sections/home/FeaturedApps.svelte";
</script>

<svelte:head>
	<meta name="author" content="ClickPhase" />
</svelte:head>

<SvelteSeo
	title="Home - ClickPhase"
	description="The official site of ClickPhase. ClickPhase specialises in desktop software and utlities."
	keywords="Microsoft, microsoft, windows, app, program, click, phase, software, launcher, launcherX, cool, cool apps, clickphase, granny, launcherx, dynawin, DynaWin, p5js, p5.js, redditvideogenerator, reddit, video, generator, bot, api, youtube, typeracer, typing, game, keyboard, visualisation, minimal, muted, mountains, modern, orbits, space, ksp, kerbal, simulator, physics, educational, linux, distro, os, operating, system, ubuntu, mate, grannyos, flight, plane, aircraft, tracking, 3d, unreal, game, flightradar24, adsbexchange, adsb, steam"
	canonical="https://clickphase.vercel.app"
	openGraph={{
		title: "Home - ClickPhase",
		description: "The official site of ClickPhase. ClickPhase specialises in desktop software and utlities.",
		url: "https://clickphase.vercel.app",
		type: "website",
		images: [
			{
				url: "https://clickphase.vercel.app/open-graph-images/ClickPhaseImage.png",
				width: 1200,
				height: 630,
				alt: "Home - ClickPhase",
			},
		],
	}}
/>

<p class="hidden-text">
	The official site of ClickPhase. ClickPhase specialises in desktop software
	and utlities.
</p>

<CardsSection />
<FeaturedApps />

<style>
	.hidden-text {
		display: none;
	}
</style>
