<script>
  import { Button, Tooltip } from "fluent-svelte";
  import PageSection from "../../components/PageSection.svelte";
  import CardContainer from "../../components/cards/CardContainer.svelte";
  import InvertedCard from "../../components/cards/InvertedCard.svelte";
  import "fluent-svelte/theme.css";
</script>

<PageSection>
  <h1>Downloads and Links</h1>
  <h2>GrannyOS download links and other links.</h2>

  <CardContainer>
    <InvertedCard
      headerText="Download GrannyOS"
      subtitleText="Click the button below to download the amd64 disk image file for GrannyOS">
      <Button
        onclick="window.open('https://mega.nz/file/zMAXWJqT#mgpf4VWiwJgEnvPnO5e_KUE6jFfTgP7PtVQDFqP5eUc', '_blank', 'noopener');"
        variant="accent"
        class="download-btn">
        Download GrannyOS (ISO)
      </Button>
    </InvertedCard>

    <InvertedCard
      headerText="Try GrannyOS on the web (Coming soon)"
      subtitleText="Click the button below to try GrannyOS on the web. A new tab will be opened,">
      <Tooltip text="This feature is not yet available." delay={200}>
        <Button
          onclick="window.open('https://example.com', '_blank', 'noopener');"
          variant="accent"
          disabled={true}
          class="download-btn">
          Try GrannyOS on the web
        </Button>
      </Tooltip>
    </InvertedCard>
  </CardContainer>
</PageSection>
