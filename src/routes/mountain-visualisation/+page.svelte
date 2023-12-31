<script>
  import "fluent-svelte/theme.css";
  import SvelteSeo from "svelte-seo";
  import AboutVisualisation from "../../sections/mountain-visualisation/AboutVisualisation.svelte";
  import Links from "/src/sections/mountain-visualisation/Links.svelte";
</script>

<svelte:head>
  <meta name="author" content="ClickPhase" />
</svelte:head>

<SvelteSeo
  title="Mountain Visualisation - ClickPhase"
  description="A procedual, muted mountain landscape generator created in p5.js."
  keywords="Microsoft, microsoft, windows, app, program, click, phase, software, launcher, launcherX, cool, cool apps, clickphase, granny, launcherx, dynawin, DynaWin, p5js, p5.js, redditvideogenerator, reddit, video, generator, bot, api, youtube, typeracer, typing, game, keyboard, visualisation, minimal, muted, mountains, modern, orbits, space, ksp, kerbal, simulator, physics, educational, linux, distro, os, operating, system, ubuntu, mate, grannyos, flight, plane, aircraft, tracking, 3d, unreal, game, flightradar24, adsbexchange, adsb, steam"
  canonical="https://clickphase.vercel.app/mountain-visualisation"
  openGraph={{
    title: "Mountain Visualisation - ClickPhase",
    description:
      "A procedual, muted mountain landscape generator created in p5.js.",
    url: "https://clickphase.vercel.app/mountain-visualisation",
    type: "website",
    images: [
      {
        url: "https://clickphase.vercel.app/open-graph-images/VisualisationImage.png",
        width: 1200,
        height: 630,
        alt: "Mountain Visualisation - ClickPhase",
      },
    ],
  }} />

<AboutVisualisation />
<Links />
