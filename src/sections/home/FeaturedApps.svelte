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
      headerText="FlightTracker3D"
      subtitleText="Track the real-time location of any aircraft, all in 3D"
      clickEvent="window.location.href = '/flighttracker3d';">
      <img
        class="card-image"
        alt="FlightTracker3D"
        src="/app-images/flighttracker3d/FlightTracker3DImage.png" />
    </Card>

    <Card
      headerText="GrannyOS"
      subtitleText="The world's best operating system™"
      clickEvent="window.location.href = '/grannyos';">
      <img
        class="card-image"
        alt="GrannyOS"
        src="/app-images/grannyos/GrannyOSImage.png" />
    </Card>

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
