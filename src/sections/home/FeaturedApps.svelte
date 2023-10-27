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
      headerText="Orbit Simulator"
      subtitleText="Simulate the orbits of planets, moons, and stars in space"
      clickEvent="window.location.href = '/orbit-simulator';">
      <img
        class="card-image"
        alt="Orbit Simulator"
        src="/app-images/orbit-simulator/OrbitSimulatorImage.png" />
    </Card>

    <Card
      headerText="Typeracer"
      subtitleText="A simple typeracing game made for a school project"
      clickEvent="window.location.href = '/typeracer';">
      <picture>
        <source
          srcset="/app-images/typeracer/TyperacerImageDark.png"
          media="(prefers-color-scheme: dark)" />
        <img
          class="card-image"
          alt="Typeracer"
          src="/app-images/typeracer/TyperacerImageLight.png" />
      </picture>
    </Card>

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
  </CardContainer>
</PageSection>

<style>
  .card-image {
    width: 100%;
    max-height: 20vh;
    object-fit: contain;
  }
</style>
