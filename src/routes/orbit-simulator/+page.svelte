<script>
  import "fluent-svelte/theme.css";
  import SvelteSeo from "svelte-seo";
  import AboutSimulator from "/src/sections/orbit-simulator/AboutSimulator.svelte";
  import Features from "/src/sections/orbit-simulator/Features.svelte";
  import Links from "/src/sections/orbit-simulator/Links.svelte";
</script>

<svelte:head>
  <meta name="author" content="ClickPhase" />
</svelte:head>

<SvelteSeo
  title="Orbit Simulator - ClickPhase"
  description="Simulate the orbits of planets, moons, and stars in space."
  keywords="Microsoft, microsoft, windows, app, program, click, phase, software, launcher, launcherX, cool, cool apps, clickphase, granny, launcherx, dynawin, DynaWin, p5js, p5.js, redditvideogenerator, reddit, video, generator, bot, api, youtube, typeracer, typing, game, keyboard, visualisation, minimal, muted, mountains, modern, orbits, space, ksp, kerbal, simulator, physics, educational, linux, distro, os, operating, system, ubuntu, mate, grannyos, flight, plane, aircraft, tracking, 3d, unreal, game, flightradar24, adsbexchange, adsb, steam, chat, server, messaging, robot, vacuum cleaner, vacuum, cellular, automata, conway, game of life, escape room, escape, saboteur, card game, button, idle game, idle, youre the os, p5play, chat server, notion, cep, school, computer, elective"
  canonical="https://clickphase.vercel.app/orbit-simulator"
  openGraph={{
    title: "Orbit Simulator - ClickPhase",
    description: "Simulate the orbits of planets, moons, and stars in space.",
    url: "https://clickphase.vercel.app/orbit-simulator",
    type: "website",
    images: [
      {
        url: "https://clickphase.vercel.app/open-graph-images/OrbitSimulatorImage.png",
        width: 1200,
        height: 630,
        alt: "Orbit Simulator - ClickPhase",
      },
    ],
  }} />

<AboutSimulator />
<Features />
<Links />
