<script>
  import { Button } from "fluent-svelte";
  import PageSection from "../../components/PageSection.svelte";
  import CardContainer from "../../components/cards/CardContainer.svelte";
  import InvertedCard from "../../components/cards/InvertedCard.svelte";
  import "fluent-svelte/theme.css";
</script>

<PageSection>
  <h1>Downloads and Links</h1>
  <h2>DynaWin download links and other links.</h2>

  <CardContainer>
    <InvertedCard
      headerText="Download DynaWin"
      subtitleText="Click the button below to download DynaWin:">
      <Button
        onclick="window.open('https://github.com/Apollo199999999/DynaWin/releases', '_blank', 'noopener');"
        variant="accent"
        class="download-btn">
        Download DynaWin
      </Button>
    </InvertedCard>
    <InvertedCard headerText="DynaWin links">
      <Button
        class="hyperlinks"
        onclick="window.open('https://github.com/Apollo199999999/DynaWin', '_blank', 'noopener');"
        variant="hyperlink">Source code</Button>
      <Button
        class="hyperlinks"
        onclick="window.open('https://github.com/Apollo199999999/DynaWin/issues', '_blank', 'noopener');"
        variant="hyperlink">Give feedback</Button>
      <Button
        class="hyperlinks"
        onclick="window.open('https://github.com/Apollo199999999/DynaWin/blob/main/LICENSE.txt', '_blank', 'noopener');"
        variant="hyperlink">MIT License</Button>
      <Button
        class="hyperlinks"
        onclick="window.open('https://github.com/Apollo199999999/DynaWin/blob/main/NOTICE.txt', '_blank', 'noopener');"
        variant="hyperlink">Third party notices and licenses</Button>
      <Button
        class="hyperlinks"
        onclick="window.open('https://github.com/Apollo199999999/DynaWin/blob/main/PRIVACYPOLICY.md', '_blank', 'noopener');"
        variant="hyperlink">Privacy policy</Button>
    </InvertedCard>
  </CardContainer>
</PageSection>
