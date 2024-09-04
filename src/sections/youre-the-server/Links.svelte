<script>
  import { Button } from "fluent-svelte";
  import PageSection from "../../components/PageSection.svelte";
  import CardContainer from "../../components/cards/CardContainer.svelte";
  import InvertedCard from "../../components/cards/InvertedCard.svelte";
  import "fluent-svelte/theme.css";
</script>

<PageSection>
  <h1>You're the Server! Links</h1>
  <h2>Relevant links pertaining to You're the Server!.</h2>

  <CardContainer>
    <InvertedCard
      headerText="Launch You're the Server!"
      subtitleText="Click the button below to open You're the Server!:">
      <Button
        onclick="window.open('https://cep-wa4-youre-the-server.vercel.app/', '_blank', 'noopener');"
        variant="accent"
        class="download-btn">
        Launch You're the Server! in New Tab
      </Button>
    </InvertedCard>

    <InvertedCard headerText="Links">
      <Button
        class="hyperlinks"
        onclick="window.open('https://github.com/Apollo199999999/cep-wa4-youre-the-server', '_blank', 'noopener');"
        variant="hyperlink">You're the Server! source code</Button>
      <Button
        class="hyperlinks"
        onclick="window.open('https://matthiaswang.notion.site/CEP-WA4-Ping-Pong-21df4c584cd64c138a3dffa4851a27f0', '_blank', 'noopener');"
        variant="hyperlink">Documentation/Portfolio link</Button>
    </InvertedCard>
  </CardContainer>

</PageSection>
