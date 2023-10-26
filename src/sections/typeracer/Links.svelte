<script>
  import { Button } from "fluent-svelte";
  import PageSection from "../../components/PageSection.svelte";
  import CardContainer from "../../components/cards/CardContainer.svelte";
  import InvertedCard from "../../components/cards/InvertedCard.svelte";
  import "fluent-svelte/theme.css";
</script>

<PageSection>
  <h1>Typeracer Links</h1>
  <h2>Relevant links pertaining to Typeracer.</h2>

  <CardContainer>
    <InvertedCard
      headerText="Launch Typeracer"
      subtitleText="Click the button below to open Typeracer:">
      <Button
        onclick="window.open('https://cep-wa1-typeracer.vercel.app', '_blank', 'noopener');"
        variant="accent"
        class="download-btn">
        Launch Typeracer in New Tab
      </Button>
    </InvertedCard>

    <InvertedCard headerText="Links">
      <Button
        class="hyperlinks"
        onclick="window.open('https://github.com/Apollo199999999/cep-wa1-typeracer', '_blank', 'noopener');"
        variant="hyperlink">Typeracer source code</Button>
      <Button
        class="hyperlinks"
        onclick="window.open('https://github.com/Apollo199999999/cep-wa1-typeracer/issues', '_blank', 'noopener');"
        variant="hyperlink">Give feedback</Button>
      <Button
        class="hyperlinks"
        onclick="window.open('https://github.com/Apollo199999999/cep-wa1-typeracer/blob/master/LICENSE', '_blank', 'noopener');"
        variant="hyperlink">MIT License</Button>
      <Button
        class="hyperlinks"
        onclick="window.open('https://matthiaswang.notion.site/CEP-WA1-Typeracer-Game-Portfolio-ffd1182cfcd443f6a437e27761413d9d', '_blank', 'noopener');"
        variant="hyperlink">Documentation/Portfolio link</Button>
    </InvertedCard>
  </CardContainer>

</PageSection>
