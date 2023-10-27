<script>
  import { Button } from "fluent-svelte";
  import PageSection from "../../components/PageSection.svelte";
  import CardContainer from "../../components/cards/CardContainer.svelte";
  import InvertedCard from "../../components/cards/InvertedCard.svelte";
  import "fluent-svelte/theme.css";
</script>

<PageSection>
  <h1>Mountain Visualisation Links</h1>
  <h2>Relevant links pertaining to Mountain Visualisation.</h2>

  <CardContainer>
    <InvertedCard
      headerText="Launch Mountain Visualisation"
      subtitleText="Click the button below to open Mountain Visualisation:">
      <Button
        onclick="window.open('https://editor.p5js.org/Apollo199999999/full/fxZKyaIwn', '_blank', 'noopener');"
        variant="accent"
        class="download-btn">
        Launch Mountain Visualisation in New Tab
      </Button>
    </InvertedCard>

    <InvertedCard headerText="Links">
      <Button
        class="hyperlinks"
        onclick="window.open('https://editor.p5js.org/Apollo199999999/sketches/fxZKyaIwn', '_blank', 'noopener');"
        variant="hyperlink">Mountain Visualisation source code</Button>
      <Button
        class="hyperlinks"
        onclick="window.open('https://matthiaswang.notion.site/CEP-WA2-Visualisation-Piece-Portfolio-5c16989de67a49998d727b1ae1166542', '_blank', 'noopener');"
        variant="hyperlink">Documentation/Portfolio link</Button>
    </InvertedCard>
  </CardContainer>

</PageSection>
