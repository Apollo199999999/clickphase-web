<script>
  import { Button } from "fluent-svelte";
  import PageSection from "../../components/PageSection.svelte";
  import CardContainer from "../../components/cards/CardContainer.svelte";
  import DownloadCard from "../../components/cards/DownloadCard.svelte";
  import "fluent-svelte/theme.css";
</script>

<PageSection>
  <h1>Downloads and Links</h1>
  <h2>LauncherX download links and other links.</h2>

  <CardContainer>
    <DownloadCard
      headerText="Download"
      subtitleText="Click the button below to download LauncherX:">
      <Button
        onclick="window.open('https://github.com/Apollo199999999/LauncherX/releases', '_blank', 'noopener');"
        variant="accent"
        class="download-btn">
        Download LauncherX
      </Button>
    </DownloadCard>

    <DownloadCard headerText="Links">
      <Button
        class="hyperlinks"
        onclick="window.open('https://github.com/Apollo199999999/LauncherX', '_blank', 'noopener');"
        variant="hyperlink">LauncherX's source code</Button>
      <Button
        class="hyperlinks"
        onclick="window.open('https://github.com/Apollo199999999/LauncherX/issues', '_blank', 'noopener');"
        variant="hyperlink">Report a bug</Button>
      <Button
        class="hyperlinks"
        onclick="window.open('https://github.com/Apollo199999999/LauncherX/issues', '_blank', 'noopener');"
        variant="hyperlink">Request a feature</Button>
      <Button
        class="hyperlinks"
        onclick="window.open('https://github.com/Apollo199999999/LauncherX/blob/master/LICENSE.txt', '_blank', 'noopener');"
        variant="hyperlink">LauncherX's MIT License</Button>
      <Button
        class="hyperlinks"
        onclick="window.open('https://github.com/Apollo199999999/LauncherX/blob/master/NOTICE.txt', '_blank', 'noopener');"
        variant="hyperlink">Third party notices and licenses</Button>
      <Button
        class="hyperlinks"
        onclick="window.open('https://github.com/Apollo199999999/LauncherX/blob/master/PRIVACYPOLICY.md', '_blank', 'noopener');"
        variant="hyperlink">LauncherX's privacy policy</Button>
    </DownloadCard>
  </CardContainer>

</PageSection>
