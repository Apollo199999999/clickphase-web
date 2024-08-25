<script>
  import { Button } from "fluent-svelte";
  import PageSection from "../../components/PageSection.svelte";
  import CardContainer from "../../components/cards/CardContainer.svelte";
  import InvertedCard from "../../components/cards/InvertedCard.svelte";
  import "fluent-svelte/theme.css";
</script>

<PageSection>
  <h1>p5.js Robot Vacuum Cleaner Links</h1>
  <h2>Relevant links pertaining to p5.js Robot Vacuum Cleaner.</h2>

  <CardContainer>
    <InvertedCard
      headerText="Launch p5.js Robot Vacuum Cleaner"
      subtitleText="Click the button below to open p5.js Robot Vacuum Cleaner:">
      <Button
        onclick="window.open('https://editor.p5js.org/Apollo199999999/full/9uNXHtLeq', '_blank', 'noopener');"
        variant="accent"
        class="download-btn">
        Launch p5.js Robot Vacuum Cleaner in New Tab
      </Button>
    </InvertedCard>

    <InvertedCard headerText="Links">
      <Button
        class="hyperlinks"
        onclick="window.open('https://editor.p5js.org/Apollo199999999/sketches/9uNXHtLeq', '_blank', 'noopener');"
        variant="hyperlink">p5.js Robot Vacuum Cleaner source code</Button>
      <Button
        class="hyperlinks"
        onclick="window.open('https://matthiaswang.notion.site/CEP-WA1-Programming-a-Robot-Vacuum-Portfolio-c41f8804b10341b5983dfda7190e8576', '_blank', 'noopener');"
        variant="hyperlink">Documentation/Portfolio link</Button>
    </InvertedCard>
  </CardContainer>

</PageSection>
