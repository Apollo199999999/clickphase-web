<script>
  import "fluent-svelte/theme.css";
  import SvelteSeo from "svelte-seo";
  import AboutTyperacer from "/src/sections/typeracer/AboutTyperacer.svelte";
  import Features from "/src/sections/typeracer/Features.svelte";
  import Links from "/src/sections/typeracer/Links.svelte";
</script>

<svelte:head>
  <meta name="author" content="ClickPhase" />
</svelte:head>

<SvelteSeo
  title="Typeracer - ClickPhase"
  description="A simple typeracing game made for a school project."
  keywords="Microsoft, microsoft, windows, app, program, click, phase, software, launcher, launcherX, cool, cool apps, clickphase, granny keyboard, launcherx, dynawin, DynaWin, p5js, p5.js, redditvideogenerator, reddit, video, generator, bot, api, youtube"
  canonical="https://clickphase.vercel.app/typeracer"
  openGraph={{
    title: "Typeracer - ClickPhase",
    description: "A simple typeracing game made for a school project.",
    url: "https://clickphase.vercel.app/typeracer",
    type: "website",
    images: [
      {
        url: "https://clickphase.vercel.app/open-graph-images/TyperacerImage.png",
        width: 1200,
        height: 630,
        alt: "Typeracer - ClickPhase",
      },
    ],
  }} />

<AboutTyperacer />
<Features />
<Links />
