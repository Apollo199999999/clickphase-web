<script>
  import { Button } from "fluent-svelte";
  import PageSection from "../../components/PageSection.svelte";
  import CardContainer from "../../components/cards/CardContainer.svelte";
  import InvertedCard from "../../components/cards/InvertedCard.svelte";
  import "fluent-svelte/theme.css";
</script>

<PageSection>
  <h1>Downloads and Links</h1>
  <h2>LauncherX download links and other links.</h2>

  <CardContainer>
    <InvertedCard
      headerText="Download"
      subtitleText="Click the button below to download LauncherX:">
      <Button
        onclick="window.open('https://github.com/Apollo199999999/LauncherX/releases', '_blank', 'noopener');"
        variant="accent"
        class="download-btn">
        Download LauncherX
      </Button>
    </InvertedCard>

    <InvertedCard headerText="Links">
      <Button
        class="hyperlinks"
        onclick="window.open('https://github.com/Apollo199999999/LauncherX', '_blank', 'noopener');"
        variant="hyperlink">Source code</Button>
      <Button
        class="hyperlinks"
        onclick="window.open('https://github.com/Apollo199999999/LauncherX/issues', '_blank', 'noopener');"
        variant="hyperlink">Give feedback</Button>
      <Button
        class="hyperlinks"
        onclick="window.open('https://github.com/Apollo199999999/LauncherX/blob/master/LICENSE.txt', '_blank', 'noopener');"
        variant="hyperlink">MIT License</Button>
      <Button
        class="hyperlinks"
        onclick="window.open('https://github.com/Apollo199999999/LauncherX/blob/master/NOTICE.txt', '_blank', 'noopener');"
        variant="hyperlink">Third party notices and licenses</Button>
      <Button
        class="hyperlinks"
        onclick="window.open('https://github.com/Apollo199999999/LauncherX/blob/master/PRIVACYPOLICY.md', '_blank', 'noopener');"
        variant="hyperlink">Privacy policy</Button>
    </InvertedCard>
  </CardContainer>

</PageSection>
