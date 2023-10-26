<script>
  import "fluent-svelte/theme.css";
  import "../app.css";
  import { webVitals } from "/src/vitals";
  import { browser } from "$app/environment";
  import { page } from "$app/stores";
  import { inject } from "@vercel/analytics";
  import NavBar from "../sections/NavBar.svelte";
  import LogoBar from "../sections/LogoBar.svelte";
  import { onMount } from "svelte";

  // Make sure to call this only once in your app
  // Ignore the "script.js" not being found error, it will work once deployed to Vercel.
  inject();

  let analyticsId = import.meta.env.VERCEL_ANALYTICS_ID;
  $: if (browser && analyticsId) {
    webVitals({
      path: $page.url.pathname,
      params: $page.params,
      analyticsId,
    });
  }

  let container;

  onMount(() => {
    //Acts as a failsafe in case device doesnt support dvh units
    container.style.height = "calc(" + window.innerHeight.toString() + "px" + " - 2em)"
  });

  //Window resize event
  function onWindowResize() {
    //Change the width and height of container
    container.style.width = "calc(100vw - 2em)";
    container.style.height = "calc(" + window.innerHeight.toString() + "px" + " - 2em)"
  }
</script>

<svelte:window on:resize={onWindowResize}/>

<meta name="viewport" content="width=device-width, initial-scale=1.0" />
<main>
  <!-- Mica background -->
  <div class="mica-div">
    <div class="mica-image" />
  </div>

  <!-- Main page -->
  <div class="container" bind:this={container}>
    <LogoBar />
    <div class="content">
      <slot />
    </div>
    <NavBar />
  </div>
</main>

<style>
  /* Some base styles to get things looking right. */
  :global(body) {
    background-color: var(--fds-solid-background-base);
    color: var(--fds-text-primary);
    margin: 0%;
    padding: 0%;
    width: 100%;
  }

  :global(h1, h2, h3, h4, h5, h6, p, span) {
    font-family: var(--fds-font-family-display) !important;
  }

  :global(h1) {
    font-weight: 600;
  }

  :global(h2) {
    font-size: 18px;
    font-weight: 400;
  }

  .mica-div {
    width: 100%;
    height: 100vh;
    overflow: hidden;
  }

  @media (prefers-color-scheme: dark) {
    .mica-image {
      background-image: url("/MicaDark.png");
    }
  }

  @media (prefers-color-scheme: light) {
    .mica-image {
      background-image: url("/MicaLight.png");
    }
  }

  .mica-image {
    width: 100%;
    height: 100%;
    filter: saturate(160%);
    transform: scale(1.7);
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
  }

  @media (prefers-color-scheme: dark) {
    .container {
      background-color: hsla(0, 0%, 13%, 0.8);
    }
  }

  @media (prefers-color-scheme: light) {
    .container {
      background-color: hsla(0, 0%, 95%, 0.8);
    }
  }

  .container {
    word-wrap: break-word;
    align-items: center;
    justify-content: center;
    text-align: center;
    /* 1em margin all around */
    width: calc(100vw - 2em);
    height: calc(100dvh - 2em);
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 999;
    overflow: hidden;
    box-shadow: 0 0 15px rgba(0, 0, 0, 0.5);
    border-radius: 8px;
    border: 1px solid var(--fds-control-stroke-default);
  }

  .container::before {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    backdrop-filter: blur(6px);
    z-index: -1;
  }

  .content {
    box-sizing: border-box;
    /* 4em vertical padding to account for nav and logo bars */
    height: 100%;
    padding: 4em 5% 4em 5%;
    /* Shift content to under the logo bar */
    margin-top: -4em;
    overflow: auto;
  }

  :global(.hyperlinks) {
    margin: 0.2em 0.5em !important;
  }

</style>
