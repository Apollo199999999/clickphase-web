<script>
  import "fluent-svelte/theme.css";
  import { TextBlock } from "fluent-svelte";
</script>

<header>
  <div class="logo">
    <a sveltekit:prefetch href="/">
      <img src="/logo-img.png" alt="ClickPhase" />
      <TextBlock variant="title">ClickPhase</TextBlock>
    </a>
  </div>
</header>

<style>
  @font-face {
    font-family: "FluentUIIcons";
    src: url("/FluentSystemIcons-Regular.ttf"); /*URL to font*/
  }

  header {
    position: sticky;
    top: 0;
    width: 100%;
    height: 4em;
    z-index: 999999;
    display: flex;
    overflow: auto;
    backdrop-filter: blur(100px) saturate(200%);
    border-bottom: 1px solid var(--fds-control-stroke-default);
  }

  @media (prefers-color-scheme: dark) {
    header {
      background-color: hsla(0, 0%, 13%, 0.7);
    }
  }

  @media (prefers-color-scheme: light) {
    header {
      background-color: hsla(0, 0%, 100%, 0.7);
    }
  }

  .logo {
    height: 4em;
    margin: 0 auto;
  }

  .logo a {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    text-decoration: none;
    color: inherit;
  }

  .logo img {
    width: 2.5em;
    height: 2.5em;
    object-fit: contain;
    margin-right: 0.5em;
  }
</style>
