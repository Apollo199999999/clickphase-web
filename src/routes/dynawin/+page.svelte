<script>
  import "fluent-svelte/theme.css";
  import SvelteSeo from "svelte-seo";
  import AboutDynaWin from "/src/sections/dynawin/AboutDynaWin.svelte";
  import DynamicThemeFeature from "/src/sections/dynawin/DynamicThemeFeature.svelte";
  import DynamicWallpaperFeature from "/src/sections/dynawin/DynamicWallpaperFeature.svelte";
  import DownloadLinks from "/src/sections/dynawin/DownloadLinks.svelte";
</script>

<svelte:head>
  <meta name="author" content="ClickPhase" />
</svelte:head>

<SvelteSeo
  title="DynaWin - ClickPhase"
  description="DynaWin - Dynamic Desktop for Windows 10 and Windows 11"
  keywords="Microsoft, microsoft, windows, app, program, click, phase, software, launcher, launcherX, cool, cool apps, clickphase, granny, launcherx, dynawin, DynaWin, p5js, p5.js, redditvideogenerator, reddit, video, generator, bot, api, youtube, typeracer, typing, game, keyboard, visualisation, minimal, muted, mountains, modern, orbits, space, ksp, kerbal, simulator, physics, educational, linux, distro, os, operating, system, ubuntu, mate, grannyos, flight, plane, aircraft, tracking, 3d, unreal, game, flightradar24, adsbexchange, adsb, steam"
  canonical="https://clickphase.vercel.app/dynawin"
  openGraph={{
    title: "DynaWin - ClickPhase",
    description: "DynaWin - Dynamic Desktop for Windows 10 and Windows 11",
    url: "https://clickphase.vercel.app/dynawin",
    type: "website",
    images: [
      {
        url: "https://clickphase.vercel.app/open-graph-images/DynaWinImage.png",
        width: 1200,
        height: 630,
        alt: "DynaWin - ClickPhase",
      },
    ],
  }} />
<AboutDynaWin />
<DynamicThemeFeature />
<DynamicWallpaperFeature />
<DownloadLinks />
