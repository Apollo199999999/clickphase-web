<script>
  import "fluent-svelte/theme.css";
  import { page } from "$app/stores";
</script>

<svelte:head>
  <link
    rel="preload"
    href="/FluentSystemIcons-Regular.ttf"
    as="font"
    crossorigin="anonymous" />
</svelte:head>

<header>
  <nav>
    <ul>
      <li class:active={$page.url.pathname === "/"}>
        <a sveltekit:prefetch href="/">
          <p class="linkIcon">&#xF480;</p>
          <p class="linkText">Home</p>
        </a>
      </li>
      <li class:active={$page.url.pathname === "/software"}>
        <a sveltekit:prefetch href="/software">
          <p class="linkIcon">&#x02A7;</p>
          <p class="linkText">Software</p>
        </a>
      </li>
      <li class:active={$page.url.pathname === "/animationsvideos"}>
        <a sveltekit:prefetch href="/animationsvideos">
          <p class="linkIcon">&#x0378;</p>
          <p class="linkText">Animations/Videos</p>
        </a>
      </li>
      <li class:active={$page.url.pathname === "/aboutcontact"}>
        <a sveltekit:prefetch href="/aboutcontact">
          <p class="linkIcon">&#xF4A3;</p>
          <p class="linkText">About/Contact</p>
        </a>
      </li>
    </ul>
  </nav>
</header>

<style>
  @font-face {
    font-family: "FluentUIIcons";
    src: url("/FluentSystemIcons-Regular.ttf"); /*URL to font*/
  }

  header {
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 4em;
    z-index: 99999;
    display: flex;
    overflow: auto;
    backdrop-filter: blur(100px) saturate(200%);
    border-top: 1px solid var(--fds-control-stroke-default);
  }

  @media (prefers-color-scheme: dark) {
    header {
      background-color: var(--fds-card-background-secondary);
    }
  }

  @media (prefers-color-scheme: light) {
    header {
      background-color: var(--fds-card-background-default);
    }
  }

  @media (min-width: 660px) {
    nav {
      margin: 0 auto;
    }
  }
  @media (max-width: 659px) {
    nav {
      margin: 0 1em;
    }
  }

  nav {
    display: flex;
    justify-content: center;
  }

  ul {
    position: relative;
    padding: 0;
    margin: auto;
    display: flex;
    justify-content: center;
    align-items: center;
    list-style: none;
    background-size: contain;
  }

  li {
    position: relative;
    height: 100%;
    margin-right: 0.5em;
  }

  li a {
    padding: 5px 11px 5px 7px;
    border-radius: var(--fds-control-corner-radius);
    text-decoration: none;
    font-family: var(--fds-font-family-display);
    display: flex;
    color: var(--fds-text-secondary);
    font-weight: 500;
  }

  li a::after {
    content: "";
    display: block;
    width: 100%;
    height: 3px;
    border-radius: 999px;
    background: var(--fds-accent-default);
    position: absolute;
    top: 100%;
    left: 0;
    transform: scaleX(0);
    transition: transform 0.25s ease-out;
  }

  li a:hover::after {
    transform: scaleX(0.6);
    transform-origin: bottom center;
  }

  .active a {
    color: var(--fds-text-primary);
  }

  .active a::after {
    transform: scaleX(0.6);
  }

  .linkIcon {
    font-family: "FluentUIIcons" !important;
    font-size: 20px;
    margin: auto;
    margin-right: 0.3em;
    text-decoration: none !important;
  }

  .linkText {
    margin: auto;
    line-height: 100%;
  }
</style>
