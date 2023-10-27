<script>
  import "fluent-svelte/theme.css";
  import CardContainer from "../../components/cards/CardContainer.svelte";
  import Card from "../../components/cards/Card.svelte";
  import PageSection from "../../components/PageSection.svelte";
  import ImageComparison from "../../components/ImageComparison.svelte";
</script>

<PageSection>
  <h1>Features</h1>

  <CardContainer>
    <Card
      headerText="Graphs"
      subtitleText="Orbit Simulator provides speed and distance graphs for each body, allowing you to derive and interpret patterns in a body's movement as it moves around in space." >
      <img src="/screenshots/orbit-simulator/GraphImage.png" alt="Graphs" /></Card>

    <Card
      headerText="Simulation Presets"
      subtitleText="Orbit Simulator provides many simulation presets for common simulation configurations, such as a 'Sun, Planet, Moon' system, to help you get up and running quicker." >
      <img src="/screenshots/orbit-simulator/PresetImage.png" alt="Simulation Presets" />
    </Card>

    <Card
      headerText="Accuracy"
      subtitleText="Orbit Simulator uses the Runge-Kutta method (RK4) to derive a body's position and velocity from its acceleration, resulting in a more accurate simulation.">
      <img src="/screenshots/orbit-simulator/RK4Image.png" alt="RK4 Accuracy" />
    </Card>
  </CardContainer>
</PageSection>

<style>
  img {
    width: 100%;
  }
</style>
