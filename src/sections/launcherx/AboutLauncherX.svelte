<script>
  import "fluent-svelte/theme.css";
  import CardContainer from "../../components/cards/CardContainer.svelte";
  import Card from "../../components/cards/Card.svelte";
  import PageSection from "../../components/PageSection.svelte";
</script>

<PageSection isTopSection={true}>
  <picture>
    <source
      srcset="/app-images/launcherx/logoDark.png"
      media="(prefers-color-scheme: dark)" />
    <img
      class="logo"
      alt="LauncherX"
      src="/app-images/launcherx/logoLight.png" />
  </picture>

  <h2>Modern app launcher for Windows.</h2>

  <CardContainer>
    <Card
      headerText="About"
      subtitleText="LauncherX is a Windows Program used to conveniently access all of your most-used files, folders, websites.">
      <iframe
        src="https://www.youtube-nocookie.com/embed/8qYBaD5-O0c"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen />
    </Card>

    <Card
      headerText="Compatibility"
      subtitleText="LauncherX is compatible with Windows 7, 8.1, 10 and 11, although it has not been tested extensively with Windows 7 and 8.1. Therefore, use LauncherX with these Windows versions at your own risk.">
      <picture>
        <source
          srcset="/screenshots/launcherx/LauncherXDesktopDark.png"
          media="(prefers-color-scheme: dark)" />
        <img
          class="compat-img"
          alt="LauncherX Window"
          src="/screenshots/launcherx/LauncherXDesktopLight.png" />
      </picture>
    </Card>
  </CardContainer>
</PageSection>

<style>
  .logo {
    width: 100%;
    max-width: 450px;
  }

  iframe,
  .compat-img {
    width: 100%;
    height: unset;
    aspect-ratio: 16 / 9;
  }

</style>
