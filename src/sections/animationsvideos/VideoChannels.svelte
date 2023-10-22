<script>
  import "fluent-svelte/theme.css";
  import CardContainer from "../../components/cards/CardContainer.svelte";
  import Card from "../../components/cards/Card.svelte";
  import PageSection from "../../components/PageSection.svelte";
</script>

<PageSection isTopSection={true}>
  <h1>My animations & videos</h1>
  <h2>
    You can find all of my animations and videos on my 3 YouTube channels.
  </h2>

  <CardContainer>
    <Card
      headerText="ClickPhase"
      clickEvent="window.open('https://www.youtube.com/channel/UCUy3erIflkjOWYsfGPVIM6g', '_blank', 'noopener');">
      <img
        class="card-image"
        alt="ClickPhase"
        src="/youtube-profiles/clickphase.png" />
    </Card>

    <Card
      headerText="Matthias Wang"
      clickEvent="window.open('https://www.youtube.com/channel/UCyx7JU3eigRv4A9HnxRWAIQ', '_blank', 'noopener');">
      <img
        class="card-image"
        alt="Matthias Wang"
        src="/youtube-profiles/matthias-wang.jpg" />
    </Card>

    <Card
      headerText="Granny the Great"
      clickEvent="window.open('https://www.youtube.com/channel/UCDVwYsVmGsjiWVdWCb_4vIg', '_blank', 'noopener');">
      <img
        class="card-image"
        alt="Granny the Great"
        src="/youtube-profiles/granny.png" />
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
