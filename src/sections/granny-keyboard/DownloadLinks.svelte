<script>
  import { Button } from "fluent-svelte";
  import PageSection from "../../components/PageSection.svelte";
  import CardContainer from "../../components/cards/CardContainer.svelte";
  import InvertedCard from "../../components/cards/InvertedCard.svelte";
  import "fluent-svelte/theme.css";
</script>

<PageSection>
  <h1>Downloads and Links</h1>
  <h2>Granny Keyboard download links and other links.</h2>

  <CardContainer>
    <InvertedCard
      headerText="Download Granny Keyboard (Windows)"
      subtitleText="Click the button below to download Granny Keyboard (Windows):">
      <Button
        onclick="window.open('https://github.com/Apollo199999999/Granny-Keyboard/releases', '_blank', 'noopener');"
        variant="accent"
        class="download-btn">
        Download Granny Keyboard (Windows)
      </Button>
    </InvertedCard>

    <InvertedCard headerText="Granny Keyboard links">
      <Button
        class="hyperlinks"
        onclick="window.open('https://github.com/Apollo199999999/Granny-Keyboard', '_blank', 'noopener');"
        variant="hyperlink">Source code (Windows)</Button>
      <Button
        class="hyperlinks"
        onclick="window.open('https://github.com/Apollo199999999/GrannyKeyboardPython', '_blank', 'noopener');"
        variant="hyperlink">Python version (Cross-platform)</Button>
      <Button
        class="hyperlinks"
        onclick="window.open('https://github.com/Apollo199999999/Granny-Keyboard/issues', '_blank', 'noopener');"
        variant="hyperlink">Report an issue</Button>
      <Button
        class="hyperlinks"
        onclick="window.open('https://github.com/Apollo199999999/Granny-Keyboard/issues', '_blank', 'noopener');"
        variant="hyperlink">Request a feature</Button>
      <Button
        class="hyperlinks"
        onclick="window.open('https://github.com/Apollo199999999/Granny-Keyboard/blob/master/LICENSE', '_blank', 'noopener');"
        variant="hyperlink">MIT License</Button>
      <Button
        class="hyperlinks"
        onclick="window.open('https://github.com/Apollo199999999/Granny-Keyboard/blob/master/PRIVACYPOLICY.md', '_blank', 'noopener');"
        variant="hyperlink">Privacy policy</Button>
    </InvertedCard>
  </CardContainer>
</PageSection>
