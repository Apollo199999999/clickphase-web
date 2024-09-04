<script>
  import "fluent-svelte/theme.css";
  import SvelteSeo from "svelte-seo";
  import AboutLauncherX from "/src/sections/launcherx/AboutLauncherX.svelte";
  import Features from "/src/sections/launcherx/Features.svelte";
  import RedesignedUI from "/src/sections/launcherx/RedesignedUI.svelte";
  import DownloadLinks from "/src/sections/launcherx/DownloadLinks.svelte";
</script>

<svelte:head>
  <meta name="author" content="ClickPhase" />
</svelte:head>

<SvelteSeo
  title="LauncherX - ClickPhase"
  description="LauncherX - Modern app launcher for Windows"
  keywords="Microsoft, microsoft, windows, app, program, click, phase, software, launcher, launcherX, cool, cool apps, clickphase, granny, launcherx, dynawin, DynaWin, p5js, p5.js, redditvideogenerator, reddit, video, generator, bot, api, youtube, typeracer, typing, game, keyboard, visualisation, minimal, muted, mountains, modern, orbits, space, ksp, kerbal, simulator, physics, educational, linux, distro, os, operating, system, ubuntu, mate, grannyos, flight, plane, aircraft, tracking, 3d, unreal, game, flightradar24, adsbexchange, adsb, steam, chat, server, messaging, robot, vacuum cleaner, vacuum, cellular, automata, conway, game of life, escape room, escape, saboteur, card game, button, idle game, idle, youre the os, p5play, chat server, notion, cep, school, computer, elective"
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
  }} />
<AboutLauncherX />
<Features />
<RedesignedUI />
<DownloadLinks />
