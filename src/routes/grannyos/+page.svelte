<script>
  import "fluent-svelte/theme.css";
  import SvelteSeo from "svelte-seo";
  import AboutGrannyOS from "../../sections/grannyos/AboutGrannyOS.svelte";
  import AboutGrannyOs from "../../sections/grannyos/AboutGrannyOS.svelte";
</script>

<svelte:head>
  <meta name="author" content="ClickPhase" />
</svelte:head>

<SvelteSeo
  title="GrannyOS - ClickPhase"
  description="GrannyOS - The best operating system in the world™"
  keywords="Microsoft, microsoft, windows, app, program, click, phase, software, launcher, launcherX, cool, cool apps, clickphase, granny, launcherx, dynawin, DynaWin, p5js, p5.js, redditvideogenerator, reddit, video, generator, bot, api, youtube, typeracer, typing, game, keyboard, visualisation, minimal, muted, mountains, modern, orbits, space, ksp, kerbal, simulator, physics, educational, linux, distro, os, operating, system, ubuntu, mate, grannyos"
  canonical="https://clickphase.vercel.app/grannyos"
  openGraph={{
    title: "GrannyOS - ClickPhase",
    description: "GrannyOS - The best operating system in the world™",
    url: "https://clickphase.vercel.app/grannyos",
    type: "website",
    images: [
      {
        url: "https://clickphase.vercel.app/open-graph-images/GrannyOSImage.png",
        width: 1200,
        height: 630,
        alt: "GrannyOS - ClickPhase",
      },
    ],
  }} />

<AboutGrannyOS />
