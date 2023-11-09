<script>
	import "fluent-svelte/theme.css";
	import SvelteSeo from "svelte-seo";
    import AboutRedditVideoGenerator from "/src/sections/redditvideogenerator/AboutRedditVideoGenerator.svelte";
	import DownloadLinks from "/src/sections/redditvideogenerator/DownloadLinks.svelte";
</script>

<svelte:head>
	<meta name="author" content="ClickPhase" />
</svelte:head>

<SvelteSeo
	title="RedditVideoGenerator - ClickPhase"
	description="RedditVideoGenerator - Generate r/AskReddit Reddit videos and upload them to YouTube automatically"
	keywords="Microsoft, microsoft, windows, app, program, click, phase, software, launcher, launcherX, cool, cool apps, clickphase, granny, launcherx, dynawin, DynaWin, p5js, p5.js, redditvideogenerator, reddit, video, generator, bot, api, youtube, typeracer, typing, game, keyboard, visualisation, minimal, muted, mountains, modern, orbits, space, ksp, kerbal, simulator, physics, educational, linux, distro, os, operating, system, ubuntu, mate, grannyos"
	canonical="https://clickphase.vercel.app/redditvideogenerator"
	openGraph={{
		title: "RedditVideoGenerator - ClickPhase",
		description: "RedditVideoGenerator - Generate r/AskReddit Reddit videos and upload them to YouTube automatically",
		url: "https://clickphase.vercel.app/redditvideogenerator",
		type: "website",
		images: [
			{
				url: "https://clickphase.vercel.app/open-graph-images/RVGImage.png",
				width: 1200,
				height: 630,
				alt: "RedditVideoGenerator - ClickPhase",
			},
		],
	}}
/>

<AboutRedditVideoGenerator/>
<DownloadLinks/>
