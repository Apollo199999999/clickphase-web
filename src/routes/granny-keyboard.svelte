<script>
	import "fluent-svelte/theme.css";
	import SvelteSeo from "svelte-seo";
	import HeroSection from "/src/sections/granny-keyboard/HeroSection.svelte";
	import AboutGrannyKeyboard from "/src/sections/granny-keyboard/AboutGrannyKeyboard.svelte";
	import DownloadLinks from "/src/sections/granny-keyboard/DownloadLinks.svelte";
</script>

<svelte:head>
	<meta name="author" content="ClickPhase" />
</svelte:head>

<SvelteSeo
	title="Granny Keyboard - ClickPhase"
	description="Granny Keyboard - Your keys will start worshipping Granny"
	keywords="Microsoft, microsoft, windows, app, program, click, phase, software, launcher, launcherX, cool, cool apps, clickphase, granny keyboard, launcherx, dynawin, DynaWin, p5js, p5.js"
	canonical="https://clickphase.vercel.app/granny-keyboard"
	openGraph={{
		title: "Granny Keyboard - ClickPhase",
		description: "Granny Keyboard - Your keys will start worshipping Granny",
		url: "https://clickphase.vercel.app/granny-keyboard",
		type: "website",
		images: [
			{
				url: "https://clickphase.vercel.app/open-graph-images/GrannyKeyboardImage.png",
				width: 1200,
				height: 630,
				alt: "Granny Keyboard - ClickPhase",
			},
		],
	}}
/>

<HeroSection/>
<AboutGrannyKeyboard/>
<DownloadLinks/>

