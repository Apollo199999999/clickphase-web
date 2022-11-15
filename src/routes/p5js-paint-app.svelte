<script>
	import "fluent-svelte/theme.css";
	import SvelteSeo from "svelte-seo";
	import HeroSection from "/src/sections/p5js-paint-app/HeroSection.svelte"
    import P5jsFrameSection from "/src/sections/p5js-paint-app/p5jsFrameSection.svelte";
</script>

<svelte:head>
	<meta name="author" content="ClickPhase" />
</svelte:head>

<SvelteSeo
	title="p5.js Paint App - ClickPhase"
	description="p5.js Paint App - A lightweight, online, and minimal paint app made in p5.js"
	keywords="Microsoft, microsoft, windows, app, program, click, phase, software, launcher, launcherX, cool, cool apps, clickphase, granny keyboard, launcherx, dynawin, DynaWin, p5js, p5.js"
	canonical="https://clickphase.vercel.app/p5js-paint-app"
	openGraph={{
		title: "p5.js Paint App - ClickPhase",
		description: "p5.js Paint App - A lightweight, online, and minimal paint app made in p5.js",
		url: "https://clickphase.vercel.app/p5js-paint-app",
		type: "website",
		images: [
			{
				url: "https://clickphase.vercel.app/open-graph-images/p5jsPaintAppImage.png",
				width: 1200,
				height: 630,
				alt: "p5.js Paint App - ClickPhase",
			},
		],
	}}
/>

<HeroSection/>
<P5jsFrameSection/>
