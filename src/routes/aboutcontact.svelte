<script>
	import "fluent-svelte/theme.css";
	import SvelteSeo from "svelte-seo";
	import HeroSection from "/src/sections/aboutcontact/HeroSection.svelte";
	import AboutSection from "/src/sections/aboutcontact/AboutSection.svelte";	
	import OldAboutSection from "/src/sections/aboutcontact/OldAboutSection.svelte";
	import ContactSection from "/src/sections/aboutcontact/ContactSection.svelte";
</script>

<svelte:head>
	<meta name="author" content="ClickPhase" />
</svelte:head>

<SvelteSeo
	title="About & Contact - ClickPhase"
	description="About ClickPhase and how to contact ClickPhase."
	keywords="Microsoft, microsoft, windows, app, program, click, phase, software, launcher, launcherX, cool, cool apps, clickphase, granny keyboard, launcherx, dynawin, DynaWin, p5js, p5.js"
	canonical="https://clickphase.vercel.app/aboutcontact"
	openGraph={{
		title: "About & Contact - ClickPhase",
		description: "About ClickPhase and how to contact ClickPhase.",
		url: "https://clickphase.vercel.app/aboutcontact",
		type: "website",
		images: [
			{
				url: "https://clickphase.vercel.app/open-graph-images/ClickPhaseImage.png",
				width: 1200,
				height: 630,
				alt: "About & Contact - ClickPhase",
			},
		],
	}}
/>

<HeroSection/>
<AboutSection/>
<ContactSection/>