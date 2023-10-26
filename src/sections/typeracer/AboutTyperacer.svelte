<script>
  import "fluent-svelte/theme.css";
  import CardContainer from "../../components/cards/CardContainer.svelte";
  import Card from "../../components/cards/Card.svelte";
  import PageSection from "../../components/PageSection.svelte";
  import ImageComparison from "../../components/ImageComparison.svelte";
</script>

<PageSection isTopSection={true}>
  <h1>Typeracer</h1>

  <h2>A simple typeracing game made for a school project.</h2>

  <CardContainer>
    <Card
      headerText="About"
      subtitleText="Typeracer is a simple, single-player typeracing game created in SvelteKit. It comes with multiple passage types and difficulty settings." />

    <Card
      headerText="Compatibility"
      subtitleText="Typeracer is available on the web, without the need to download anything. Typeracer is compatible with both desktop and mobile." />
  </CardContainer>

  <ImageComparison
    srcLeft="/screenshots/typeracer/WindowLight.png"
    altLeft="Light Theme"
    srcRight="/screenshots/typeracer/WindowDark.png"
    altRight="Dark Theme" />

  <!-- Force a bottom margin of 2em using a div as ImageComparisonControl doesn't come with bottom margin of 2em-->
  <div class="bottom-margin" />
</PageSection>

<style>
  .bottom-margin {
    height: 2em;
  }
</style>
