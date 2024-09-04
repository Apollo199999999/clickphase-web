<script>
  import { Button } from "fluent-svelte";
  import PageSection from "../../components/PageSection.svelte";
  import CardContainer from "../../components/cards/CardContainer.svelte";
  import InvertedCard from "../../components/cards/InvertedCard.svelte";
  import "fluent-svelte/theme.css";
</script>

<PageSection>
  <h1>Button Game Links</h1>
  <h2>Relevant links pertaining to Button Game.</h2>

  <CardContainer>
    <InvertedCard
      headerText="Launch Button Game"
      subtitleText="Click the button below to open Button Game:">
      <Button
        onclick="window.open('https://editor.p5js.org/Apollo199999999/full/hpA33F5QB', '_blank', 'noopener');"
        variant="accent"
        class="download-btn">
        Launch Button Game in New Tab
      </Button>
    </InvertedCard>

    <InvertedCard headerText="Links">
      <Button
        class="hyperlinks"
        onclick="window.open('https://editor.p5js.org/Apollo199999999/sketches/hpA33F5QB', '_blank', 'noopener');"
        variant="hyperlink">Button Game source code</Button>
      <Button
        class="hyperlinks"
        onclick="window.open('https://matthiaswang.notion.site/CEP-WA2-Your-Top-3-e2393476305843e791a5842bdafcf3de#1c040c95daeb495fad71240ca2538649', '_blank', 'noopener');"
        variant="hyperlink">Documentation/Portfolio link</Button>
    </InvertedCard>
  </CardContainer>

</PageSection>
