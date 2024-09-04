<script>
  import "fluent-svelte/theme.css";
  import SvelteSeo from "svelte-seo";
  import AboutChatProgram from "../../sections/saboteur-escape-room/AboutSaboteurEscapeRoom.svelte";
  import Links from "/src/sections/saboteur-escape-room/Links.svelte";
</script>

<svelte:head>
  <meta name="author" content="ClickPhase" />
</svelte:head>

<SvelteSeo
  title="Saboteur Escape Room - ClickPhase"
  description="A multiplayer escape room based on the card game Saboteur, made together with 2 other classmates."
  keywords="Microsoft, microsoft, windows, app, program, click, phase, software, launcher, launcherX, cool, cool apps, clickphase, granny, launcherx, dynawin, DynaWin, p5js, p5.js, redditvideogenerator, reddit, video, generator, bot, api, youtube, typeracer, typing, game, keyboard, visualisation, minimal, muted, mountains, modern, orbits, space, ksp, kerbal, simulator, physics, educational, linux, distro, os, operating, system, ubuntu, mate, grannyos, flight, plane, aircraft, tracking, 3d, unreal, game, flightradar24, adsbexchange, adsb, steam"
  canonical="https://clickphase.vercel.app/saboteur-escape-room"
  openGraph={{
    title: "Saboteur Escape Room - ClickPhase",
    description:
      "A multiplayer escape room based on the card game Saboteur, made together with 2 other classmates.",
    url: "https://clickphase.vercel.app/saboteur-escape-room",
    type: "website",
    images: [
      {
        url: "https://clickphase.vercel.app/open-graph-images/SaboteurImage.png",
        width: 1200,
        height: 630,
        alt: "Saboteur Escape Room - ClickPhase",
      },
    ],
  }} />

<AboutChatProgram />
<Links />
