<script>
	import "fluent-svelte/theme.css";
	import SvelteSeo from "svelte-seo";
    import P5jsFrameSection from "/src/sections/p5js-paint-app/p5jsFrameSection.svelte";
</script>

<svelte:head>
	<meta name="author" content="ClickPhase" />
</svelte:head>

<SvelteSeo
	title="p5.js Paint App - ClickPhase"
	description="p5.js Paint App - A lightweight, online, and minimal paint app made in p5.js"
	keywords="Microsoft, microsoft, windows, app, program, click, phase, software, launcher, launcherX, cool, cool apps, clickphase, granny, launcherx, dynawin, DynaWin, p5js, p5.js, redditvideogenerator, reddit, video, generator, bot, api, youtube, typeracer, typing, game, keyboard, visualisation, minimal, muted, mountains, modern, orbits, space, ksp, kerbal, simulator, physics, educational, linux, distro, os, operating, system, ubuntu, mate, grannyos, flight, plane, aircraft, tracking, 3d, unreal, game, flightradar24, adsbexchange, adsb, steam, chat, server, messaging, robot, vacuum cleaner, vacuum, cellular, automata, conway, game of life, escape room, escape, saboteur, card game, button, idle game, idle, youre the os, p5play, chat server, notion, cep, school, computer, elective"
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

<P5jsFrameSection/>
