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
      subtitleText="FlightTracker3D provides high quality models and custom liveries for over 50 unique aircraft. Each model also has fully animated landing gear and engines, to ensure that the aircraft being tracked is rendered accurately and realistically.">
      {#if browser}
        <Carousel>
          <img
            alt="Air Canada Airbus A330 on deploying landing gear"
            src="/screenshots/flighttracker3d/ModelImage1.png" />
          <img
            alt="Lufthansa Boeing 747 exiting runway after landing"
            src="/screenshots/flighttracker3d/ModelImage2.png" />
          <img
            alt="Thai Airways Boeing 777 taxiing at the airport"
            src="/screenshots/flighttracker3d/ModelImage3.png" />
        </Carousel>
      {/if}
    </Card>

    <Card
      headerText="High quality 3D terrain"
      subtitleText="FlightTracker3D also provides highly detailed 3D terrain data for surrounding buildings, airports, and structures for the aircraft being tracked.">
      {#if browser}
        <Carousel>
          <img
            alt="Helicopter flying among mountains"
            src="/screenshots/flighttracker3d/TerrainImage1.png" />
          <img
            alt="Plane flying among mountains near Innsbruck"
            src="/screenshots/flighttracker3d/TerrainImage2.png" />
          <img
            alt="Planes lining up for take-off at Haneda Airport, Tokyo"
            src="/screenshots/flighttracker3d/TerrainImage3.png" />
        </Carousel>
      {/if}
    </Card>
  </CardContainer>

  <CardContainer>
    <Card
      headerText="Realistic plane movement"
      subtitleText="FlightTracker3D automatically calculates the acceleration, deceleration, roll, pitch, and yaw of the aircraft being tracked based on its flight path, allowing the aircraft to move more realistically.">
      {#if browser}
        <Carousel>
          <img
            alt="Lufthansa A319 taking off"
            src="/screenshots/flighttracker3d/MoveImage1.png" />
          <img
            alt="Singapore Airlines A350 cruising"
            src="/screenshots/flighttracker3d/MoveImage2.png" />
          <img
            alt="Lufthansa A321 touching down"
            src="/screenshots/flighttracker3d/MoveImage3.png" />
        </Carousel>
      {/if}
    </Card>

    <Card
      headerText="Wide coverage"
      subtitleText="Flight data used by FlightTracker3D is provided by https://airplanes.live/, ensuring that FlightTracker3D is able to track a wide range of flights around the world.">
      {#if browser}
        <Carousel>
          <img
            alt="FlightTracker3D globe view"
            src="/screenshots/flighttracker3d/GlobeImage1.png" />
          <img
            alt="FlightTracker3D globe view"
            src="/screenshots/flighttracker3d/GlobeImage2.png" />
          <img
            alt="FlightTracker3D globe view"
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
