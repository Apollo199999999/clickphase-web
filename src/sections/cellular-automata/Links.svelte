<script>
  import { Button } from "fluent-svelte";
  import PageSection from "../../components/PageSection.svelte";
  import CardContainer from "../../components/cards/CardContainer.svelte";
  import InvertedCard from "../../components/cards/InvertedCard.svelte";
  import "fluent-svelte/theme.css";
</script>

<PageSection>
  <h1>Cellular Automata Links</h1>
  <h2>Relevant links pertaining to Cellular Automata.</h2>

  <CardContainer>
    <InvertedCard
      headerText="Launch Cellular Automata"
      subtitleText="Click the button below to open Cellular Automata:">
      <Button
        onclick="window.open('https://cep-cellular-automata.vercel.app/', '_blank', 'noopener');"
        variant="accent"
        class="download-btn">
        Launch Cellular Automata in New Tab
      </Button>
    </InvertedCard>

    <InvertedCard headerText="Links">
      <Button
        class="hyperlinks"
        onclick="window.open('https://github.com/Apollo199999999/cep-cellular-automata', '_blank', 'noopener');"
        variant="hyperlink">Cellular Automata source code</Button>
      <Button
        class="hyperlinks"
        onclick="window.open('https://matthiaswang.notion.site/CEP-WA2-Your-Top-3-e2393476305843e791a5842bdafcf3de#ea7f5144d3d44233a169492240bb9f3c', '_blank', 'noopener');"
        variant="hyperlink">Documentation/Portfolio link</Button>
    </InvertedCard>
  </CardContainer>

</PageSection>
