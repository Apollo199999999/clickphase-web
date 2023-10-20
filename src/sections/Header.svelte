<script>
  import { page } from "$app/stores";
  import "fluent-svelte/theme.css";
  import { TextBlock } from "fluent-svelte";
</script>

<svelte:head>
  <link
    rel="preload"
    href="/FluentSystemIcons-Regular.ttf"
    as="font"
    crossorigin="anonymous" />
</svelte:head>

<header>
  <div class="logo">
    <a sveltekit:prefetch href="/">
      <img src="/logo-img.png" alt="ClickPhase" />
      <TextBlock variant="title">ClickPhase</TextBlock>
    </a>
  </div>

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
    position: sticky;
    top: 0;
    z-index: 2147483647;
    display: flex;
    overflow: auto;
    background-color: var(--fds-control-fill-default);
    backdrop-filter: blur(100px) saturate(200%);
  }

  .logo {
    height: 4em;
  }

  .logo a {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    text-decoration: none;
    color: inherit;
    margin-right: 3em;
  }

  .logo img {
    width: 2.5em;
    height: 2.5em;
    object-fit: contain;
    margin-right: 0.5em;
  }

  nav {
    display: flex;
    justify-content: center;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
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
    width: 80%;
    height: 3px;
    border-radius: 999px;
    background: var(--fds-accent-default);
    position: absolute;
    top: 100%;
    left: 10%;
    transform: scaleX(0);
    transition: transform 0.25s ease-out;
  }

  li a:hover {
    color: var(--fds-text-primary);
  }

  li a:hover::after {
    transform: scaleX(1);
    transform-origin: bottom center;
  }

  .active a {
    color: var(--fds-text-primary);
  }

  .active a::after {
    transform: scaleX(1);
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
