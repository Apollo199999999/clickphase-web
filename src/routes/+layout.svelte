<script>
  import "fluent-svelte/theme.css";
  import "../app.css";
  import { webVitals } from "/src/vitals";
  import { browser } from "$app/environment";
  import { page } from "$app/stores";
  import { inject } from "@vercel/analytics";
  import NavBar from "../sections/NavBar.svelte";
  import LogoBar from "../sections/LogoBar.svelte";

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
</script>

<meta name="viewport" content="width=device-width, initial-scale=1.0" />
<main>
  <!-- Mica background -->
  <div class="mica-div">
    <div class="mica-image" />
  </div>

  <!-- Main page -->
  <div class="container">
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
    margin-left: 1em;
    margin-right: 1em;
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
    width: calc(100% - 4em);
    height: calc(100% - 4em);
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 999;
    overflow: auto;
    box-shadow: 0 0 15px rgba(0, 0, 0, 0.5);
    border-radius: 8px;
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
    /* To force the bottom nav bar to be at the bottom */
    min-height: calc(100% - 10em);
  }
</style>
