<script>
  import "fluent-svelte/theme.css";
  import CardContainer from "../../components/cards/CardContainer.svelte";
  import Card from "../../components/cards/Card.svelte";
  import PageSection from "../../components/PageSection.svelte";
  import Carousel from "svelte-carousel";
  import { browser } from "$app/environment";
</script>

<PageSection>
  <h1>Features</h1>

  <CardContainer>
    <Card
      headerText="High quality 3D models"
      subtitleText="FlightTracker3D provides high quality models and custom liveries for over 50 unique aircraft, to ensure that the aircraft being tracked is rendered accurately and realistically.">
      {#if browser}
        <Carousel>
          <img
            alt="Boeing C-17 Globemaster III"
            src="/screenshots/flighttracker3d/ModelImage1.png" />
          <img
            alt="FedEx Boeing 777"
            src="/screenshots/flighttracker3d/ModelImage2.png" />
          <img
            alt="Japan Airlines Boeing 787"
            src="/screenshots/flighttracker3d/ModelImage3.png" />
        </Carousel>
      {/if}
    </Card>

    <Card
      headerText="High quality 3D terrain"
      subtitleText="FlightTracker3D also provides highly detailed 3D terrain data while tracking a plane, which includes surrounding buildings, airports, and structures.">
      {#if browser}
        <Carousel>
          <img
            alt="Plane approaching Newark Airport, New York"
            src="/screenshots/flighttracker3d/TerrainImage1.png" />
          <img
            alt="Plane approaching Newark Airport, New York"
            src="/screenshots/flighttracker3d/TerrainImage2.png" />
          <img
            alt="Plane approaching Newark Airport, New York"
            src="/screenshots/flighttracker3d/TerrainImage3.png" />
          <img
            alt="Plane taxiing at Newark Airport, New York"
            src="/screenshots/flighttracker3d/TerrainImage4.png" />
        </Carousel>
      {/if}
    </Card>
  </CardContainer>

  <CardContainer>
    <Card
      headerText="Realistic plane movement"
      subtitleText="FlightTracker3D automatically calculates the roll, pitch, and yaw of the aircraft being tracked based on its flight path, allowing the plane to move more realistically.">
      {#if browser}
        <Carousel>
          <img
            alt="Etihad Boeing 787 near London"
            src="/screenshots/flighttracker3d/RollImage1.png" />
          <img
            alt="Etihad Boeing 787 near London"
            src="/screenshots/flighttracker3d/RollImage2.png" />
          <img
            alt="Etihad Boeing 787 near London"
            src="/screenshots/flighttracker3d/RollImage3.png" />
        </Carousel>
      {/if}
    </Card>

    <Card
      headerText="Wide coverage"
      subtitleText="Flight data used by FlightTracker3D is provided by https://airplanes.live/, ensuring that FlightTracker3D is able to track a wide variety of flights around the world.">
      {#if browser}
        <Carousel>
          <img
            alt="Airplanes.live globe view"
            src="/screenshots/flighttracker3d/GlobeImage1.png" />
          <img
            alt="Airplanes.live globe view"
            src="/screenshots/flighttracker3d/GlobeImage2.png" />
          <img
            alt="Airplanes.live globe view"
            src="/screenshots/flighttracker3d/GlobeImage3.png" />
        </Carousel>
      {/if}
    </Card>
  </CardContainer>
</PageSection>

<style>
  img {
    width: 100%;
  }
</style>
