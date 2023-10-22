<script>
  import "fluent-svelte/theme.css";
  import { Button } from "fluent-svelte";
  import CardContainer from "../../components/cards/CardContainer.svelte";
  import DownloadCard from "../../components/cards/DownloadCard.svelte";
  import PageSection from "../../components/PageSection.svelte";
</script>

<PageSection>
  <h1>Downloads and Links</h1>
  <h2>RedditVideoGenerator download links and other links.</h2>

  <CardContainer>
    <DownloadCard
      headerText="Download"
      subtitleText="Click the button below to download RedditVideoGenerator:">
      <Button
        onclick="window.open('https://github.com/Apollo199999999/RedditVideoGenerator/releases', '_blank', 'noopener');"
        variant="accent">
        Download RedditVideoGenerator
      </Button>
    </DownloadCard>

    <DownloadCard headerText="Links">
      <Button
        class="hyperlinks"
        onclick="window.open('https://github.com/Apollo199999999/RedditVideoGenerator', '_blank', 'noopener');"
        variant="hyperlink">Source code</Button>
      <Button
        class="hyperlinks"
        onclick="window.open('https://github.com/Apollo199999999/RedditVideoGenerator/issues', '_blank', 'noopener');"
        variant="hyperlink">Report a bug</Button>
      <Button
        class="hyperlinks"
        onclick="window.open('https://github.com/Apollo199999999/RedditVideoGenerator/issues', '_blank', 'noopener');"
        variant="hyperlink">Request a feature</Button>
      <Button
        class="hyperlinks"
        onclick="window.open('https://github.com/Apollo199999999/RedditVideoGenerator/blob/main/LICENSE', '_blank', 'noopener');"
        variant="hyperlink">MIT License</Button>
      <Button
        class="hyperlinks"
        onclick="window.open('https://github.com/Apollo199999999/RedditVideoGenerator/blob/main/NOTICE.txt', '_blank', 'noopener');"
        variant="hyperlink">Third party notices and licenses</Button>
      <Button
        class="hyperlinks"
        onclick="window.open('https://github.com/Apollo199999999/RedditVideoGenerator/blob/main/PRIVACYPOLICY.md', '_blank', 'noopener');"
        variant="hyperlink">Privacy policy</Button>
    </DownloadCard>
  </CardContainer>
</PageSection>
