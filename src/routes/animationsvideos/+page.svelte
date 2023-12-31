<script>
  import "fluent-svelte/theme.css";
  import SvelteSeo from "svelte-seo";
  import VideoChannels from "/src/sections/animationsvideos/VideoChannels.svelte";
</script>

<svelte:head>
  <meta name="author" content="ClickPhase" />
</svelte:head>

<SvelteSeo
  title="Animations & Videos - ClickPhase"
  description="Animations and Videos from ClickPhase and others."
  keywords="Microsoft, microsoft, windows, app, program, click, phase, software, launcher, launcherX, cool, cool apps, clickphase, granny, launcherx, dynawin, DynaWin, p5js, p5.js, redditvideogenerator, reddit, video, generator, bot, api, youtube, typeracer, typing, game, keyboard, visualisation, minimal, muted, mountains, modern, orbits, space, ksp, kerbal, simulator, physics, educational, linux, distro, os, operating, system, ubuntu, mate, grannyos, flight, plane, aircraft, tracking, 3d, unreal, game, flightradar24, adsbexchange, adsb, steam"
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
  }} />

<VideoChannels />
