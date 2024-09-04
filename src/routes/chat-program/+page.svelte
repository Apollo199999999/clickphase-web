<script>
  import "fluent-svelte/theme.css";
  import SvelteSeo from "svelte-seo";
  import AboutChatProgram from "../../sections/chat-program/AboutChatProgram.svelte";
  import Links from "/src/sections/chat-program/Links.svelte";
</script>

<svelte:head>
  <meta name="author" content="ClickPhase" />
</svelte:head>

<SvelteSeo
  title="Chat Program - ClickPhase"
  description="A simple chat program that allows you to chat with others online in private rooms, made using Socket.IO."
  keywords="Microsoft, microsoft, windows, app, program, click, phase, software, launcher, launcherX, cool, cool apps, clickphase, granny, launcherx, dynawin, DynaWin, p5js, p5.js, redditvideogenerator, reddit, video, generator, bot, api, youtube, typeracer, typing, game, keyboard, visualisation, minimal, muted, mountains, modern, orbits, space, ksp, kerbal, simulator, physics, educational, linux, distro, os, operating, system, ubuntu, mate, grannyos, flight, plane, aircraft, tracking, 3d, unreal, game, flightradar24, adsbexchange, adsb, steam, chat, server, messaging, robot, vacuum cleaner, vacuum, cellular, automata, conway, game of life, escape room, escape, saboteur, card game, button, idle game, idle, youre the os, p5play, chat server, notion, cep, school, computer, elective"
  canonical="https://clickphase.vercel.app/chat-program"
  openGraph={{
    title: "Chat Program - ClickPhase",
    description:
      "A simple chat program that allows you to chat with others online in private rooms, made using Socket.IO.",
    url: "https://clickphase.vercel.app/chat-program",
    type: "website",
    images: [
      {
        url: "https://clickphase.vercel.app/open-graph-images/ChatProgramImage.png",
        width: 1200,
        height: 630,
        alt: "Chat Program - ClickPhase",
      },
    ],
  }} />

<AboutChatProgram />
<Links />
