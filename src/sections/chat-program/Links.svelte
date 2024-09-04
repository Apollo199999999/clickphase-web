<script>
  import { Button } from "fluent-svelte";
  import PageSection from "../../components/PageSection.svelte";
  import CardContainer from "../../components/cards/CardContainer.svelte";
  import InvertedCard from "../../components/cards/InvertedCard.svelte";
  import "fluent-svelte/theme.css";
</script>

<PageSection>
  <h1>Chat Program Links</h1>
  <h2>Relevant links pertaining to Chat Program.</h2>

  <CardContainer>
    <InvertedCard
      headerText="Launch Chat Program"
      subtitleText="Click the button below to open Chat Program:">
      <Button
        onclick="window.open('https://simple-chat-program.vercel.app/', '_blank', 'noopener');"
        variant="accent"
        class="download-btn">
        Launch Chat Program in New Tab
      </Button>
    </InvertedCard>

    <InvertedCard headerText="Links">
      <Button
        class="hyperlinks"
        onclick="window.open('https://github.com/Apollo199999999/simple-chat-program', '_blank', 'noopener');"
        variant="hyperlink">Chat Program source code</Button>
      <Button
        class="hyperlinks"
        onclick="window.open('https://matthiaswang.notion.site/CEP-WA2-Your-Top-3-e2393476305843e791a5842bdafcf3de#e198a56bfc2149c584e1b655fff9e2bf', '_blank', 'noopener');"
        variant="hyperlink">Documentation/Portfolio link</Button>
    </InvertedCard>
  </CardContainer>

</PageSection>
