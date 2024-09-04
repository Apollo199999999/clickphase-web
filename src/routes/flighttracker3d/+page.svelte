<script>
  import "fluent-svelte/theme.css";
  import SvelteSeo from "svelte-seo";
  import AboutFlightTracker3D from "/src/sections/flighttracker3d/AboutFlightTracker3D.svelte";
  import Features from "/src/sections/flighttracker3d/Features.svelte";
  import DownloadLinks from "/src/sections/flighttracker3d/DownloadLinks.svelte";
</script>

<svelte:head>
  <meta name="author" content="ClickPhase" />
</svelte:head>

<SvelteSeo
  title="FlightTracker3D - ClickPhase"
  description="FlightTracker3D - Track the real-time location of any aircraft, all in 3D."
  keywords="Microsoft, microsoft, windows, app, program, click, phase, software, launcher, launcherX, cool, cool apps, clickphase, granny, launcherx, dynawin, DynaWin, p5js, p5.js, redditvideogenerator, reddit, video, generator, bot, api, youtube, typeracer, typing, game, keyboard, visualisation, minimal, muted, mountains, modern, orbits, space, ksp, kerbal, simulator, physics, educational, linux, distro, os, operating, system, ubuntu, mate, grannyos, flight, plane, aircraft, tracking, 3d, unreal, game, flightradar24, adsbexchange, adsb, steam, chat, server, messaging, robot, vacuum cleaner, vacuum, cellular, automata, conway, game of life, escape room, escape, saboteur, card game, button, idle game, idle, youre the os, p5play, chat server, notion, cep, school, computer, elective"
  canonical="https://clickphase.vercel.app/flighttracker3d"
  openGraph={{
    title: "FlightTracker3D - ClickPhase",
    description:
      "FlightTracker3D - Track the real-time location of any aircraft, all in 3D.",
    url: "https://clickphase.vercel.app/flighttracker3d",
    type: "website",
    images: [
      {
        url: "https://clickphase.vercel.app/open-graph-images/FlightTracker3DImage.png",
        width: 1200,
        height: 630,
        alt: "FlightTracker3D - ClickPhase",
      },
    ],
  }} />

<AboutFlightTracker3D />
<Features />
<DownloadLinks />