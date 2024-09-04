<script>
  import { Button } from "fluent-svelte";
  import PageSection from "../../components/PageSection.svelte";
  import CardContainer from "../../components/cards/CardContainer.svelte";
  import InvertedCard from "../../components/cards/InvertedCard.svelte";
  import "fluent-svelte/theme.css";
</script>

<PageSection>
  <h1>Saboteur Escape Room Links</h1>
  <h2>Relevant links pertaining to Saboteur Escape Room.</h2>

  <CardContainer>
    <InvertedCard
      headerText="Launch Saboteur Escape Room"
      subtitleText="Click the button below to open Saboteur Escape Room:">
      <Button
        onclick="window.open('https://cep-wa3-unplugged-plugged.vercel.app/', '_blank', 'noopener');"
        variant="accent"
        class="download-btn">
        Launch Saboteur Escape Room in New Tab
      </Button>
    </InvertedCard>

    <InvertedCard headerText="Links">
      <Button
        class="hyperlinks"
        onclick="window.open('https://github.com/Apollo199999999/cep-wa3-unplugged-plugged', '_blank', 'noopener');"
        variant="hyperlink">Saboteur Escape Room source code</Button>
      <Button
        class="hyperlinks"
        onclick="window.open('https://matthiaswang.notion.site/CEP-WA3-Unplugged-Plugged-331019b5a95e4271a869496e5a03e50c', '_blank', 'noopener');"
        variant="hyperlink">Documentation/Portfolio link</Button>
    </InvertedCard>
  </CardContainer>

</PageSection>
