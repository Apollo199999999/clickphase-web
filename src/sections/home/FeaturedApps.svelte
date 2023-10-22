<script>
  import "fluent-svelte/theme.css";
  import CardContainer from "../../components/cards/CardContainer.svelte";
  import Card from "../../components/cards/Card.svelte";
  import PageSection from "../../components/PageSection.svelte";
</script>

<PageSection>
  <h1>Featured Software</h1>

  <CardContainer>
    <Card
      headerText="LauncherX"
      subtitleText="Modern app launcher for Windows"
      clickEvent="window.location.href = '/launcherx';">
      <picture>
        <source
          srcset="/app-images/launcherx/LauncherXImageDark.png"
          media="(prefers-color-scheme: dark)" />
        <img
          class="card-image"
          alt="LauncherX"
          src="/app-images/launcherx/LauncherXImageLight.png" />
      </picture>
    </Card>
    
    <Card
      headerText="DynaWin"
      subtitleText="Dynamic Desktop for Windows 10 and Windows 11"
      clickEvent="window.location.href = '/dynawin';">
      <picture>
        <source
          srcset="/app-images/dynawin/DynaWinImageDark.png"
          media="(prefers-color-scheme: dark)" />
        <img
          class="card-image"
          alt="DynaWin"
          src="/app-images/dynawin/DynaWinImageLight.png" />
      </picture>
    </Card>
  </CardContainer>
</PageSection>

<style>
  .card-image {
    width: 80%;
    max-width: 260px;
    height: 120px;
    object-fit: contain;
  }
</style>
