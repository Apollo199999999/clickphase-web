<script>
  import { Button } from "fluent-svelte";
  import "fluent-svelte/theme.css";
  import CardContainer from "../../components/cards/CardContainer.svelte";
  import DownloadCard from "../../components/cards/DownloadCard.svelte";
</script>

<div class="container">
  <h1>Downloads and Links</h1>
  <h2>RedditVideoGenerator download links and other links.</h2>

  <CardContainer>
    <DownloadCard headerText="Download" subtitleText="Click the button below to download RedditVideoGenerator:">
      <Button
        onclick="window.open('https://github.com/Apollo199999999/RedditVideoGenerator/releases', '_blank', 'noopener');"
        variant="accent"
        >Download RedditVideoGenerator
      </Button>
    </DownloadCard>

    <DownloadCard headerText="Links">
      <Button
        class="hyperlinks"
        onclick="window.open('https://github.com/Apollo199999999/RedditVideoGenerator', '_blank', 'noopener');"
        variant="hyperlink">GitHub repository</Button>
      <Button
        class="hyperlinks"
        onclick="window.open('https://github.com/Apollo199999999/RedditVideoGenerator/issues', '_blank', 'noopener');"
        variant="hyperlink">Give feedback</Button>
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
</div>

<style>
  .container {
    margin-top: 2em;
  }
</style>
