<script>
	import "fluent-svelte/theme.css";
	import SvelteSeo from "svelte-seo";
	import HeroSection from "/src/sections/animationsvideos/HeroSection.svelte";
	import VideoChannels from "/src/sections/animationsvideos/VideoChannels.svelte";
</script>

<svelte:head>
	<meta name="author" content="ClickPhase" />
</svelte:head>

<SvelteSeo
	title="Animations & Videos - ClickPhase"
	description="Animations and Videos from ClickPhase and others."
	keywords="Microsoft, microsoft, windows, app, program, click, phase, software, launcher, launcherX, cool, cool apps, clickphase, granny keyboard, launcherx, dynawin, DynaWin, p5js, p5.js, redditvideogenerator, reddit, video, generator, bot, api, youtube"
	canonical="https://clickphase.vercel.app/animationsvideos"
	openGraph={{
		title: "Animations & Videos - ClickPhase",
		description: "Animations and Videos from ClickPhase and others.",
		url: "https://clickphase.vercel.app/animationsvideos",
		type: "website",
		images: [
			{
				url: "https://clickphase.vercel.app/open-graph-images/ClickPhaseImage.png",
				width: 1200,
				height: 630,
				alt: "Animations & Videos - ClickPhase",
			},
		],
	}}
/>

<HeroSection/>
<VideoChannels/>