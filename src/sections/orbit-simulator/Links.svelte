<script>
  import { Button } from "fluent-svelte";
  import PageSection from "../../components/PageSection.svelte";
  import CardContainer from "../../components/cards/CardContainer.svelte";
  import InvertedCard from "../../components/cards/InvertedCard.svelte";
  import "fluent-svelte/theme.css";
</script>

<PageSection>
  <h1>Orbit Simulator Links</h1>
  <h2>Relevant links pertaining to Orbit Simulator.</h2>

  <CardContainer>
    <InvertedCard
      headerText="Launch Orbit Simulator"
      subtitleText="Click the button below to open Orbit Simulator:">
      <Button
        onclick="window.open('https://cep-wa3-orbit-simulator.vercel.app', '_blank', 'noopener');"
        variant="accent"
        class="download-btn">
        Launch Orbit Simulator in New Tab
      </Button>
    </InvertedCard>

    <InvertedCard headerText="Links">
      <Button
        class="hyperlinks"
        onclick="window.open('https://github.com/Apollo199999999/cep-wa3-orbit-simulator', '_blank', 'noopener');"
        variant="hyperlink">Orbit Simulator source code</Button>
      <Button
        class="hyperlinks"
        onclick="window.open('https://github.com/Apollo199999999/cep-wa3-orbit-simulator/issues', '_blank', 'noopener');"
        variant="hyperlink">Give feedback</Button>
      <Button
        class="hyperlinks"
        onclick="window.open('https://github.com/Apollo199999999/cep-wa3-orbit-simulator/blob/main/LICENSE', '_blank', 'noopener');"
        variant="hyperlink">MIT License</Button>
      <Button
        class="hyperlinks"
        onclick="window.open('https://matthiaswang.notion.site/CEP-WA3-Orbit-Simulator-Portfolio-8c97f163c6104dd5821dd76d57a3eb98', '_blank', 'noopener');"
        variant="hyperlink">Documentation/Portfolio link</Button>
    </InvertedCard>
  </CardContainer>

</PageSection>
