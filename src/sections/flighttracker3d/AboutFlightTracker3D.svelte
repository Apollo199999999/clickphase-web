<script>
  import "fluent-svelte/theme.css";
  import CardContainer from "../../components/cards/CardContainer.svelte";
  import Card from "../../components/cards/Card.svelte";
  import PageSection from "../../components/PageSection.svelte";
  import Carousel from "svelte-carousel";
  import { browser } from "$app/environment";
</script>

<PageSection isTopSection={true}>
  <h1>FlightTracker3D</h1>

  <h2>Track the real-time location of any aircraft, all in 3D.</h2>
  <CardContainer>
    <Card
      headerText="About"
      subtitleText="FlightTracker3D is a 3D flight tracker made in Unreal Engine that allows you to visualise the
      real-time location and movement of any aircraft.">
      {#if browser}
        <Carousel>
          <iframe
            src="https://www.youtube-nocookie.com/embed/x4OLYf_L1s8"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen />
          <img
            alt="Screenshot of FlightTracker3D"
            src="/screenshots/flighttracker3d/MainImage1.png" />
          <img
            alt="Screenshot of FlightTracker3D"
            src="/screenshots/flighttracker3d/MainImage2.png" />
          <img
            alt="Screenshot of FlightTracker3D"
            src="/screenshots/flighttracker3d/MainImage3.png" />
        </Carousel>
      {/if}
    </Card>

    <Card
      headerText="Compatibility"
      subtitleText="FlightTracker3D is compatible with both 64-bit Windows and Linux operating systems.">
      <img
        alt="Screenshot of FlightTracker3D"
        src="/screenshots/flighttracker3d/CompatibilityImage.png" />
    </Card>
  </CardContainer>
</PageSection>

<style>
  iframe,
  img {
    width: 100%;
  }
</style>
