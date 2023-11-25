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
      subtitleText="Download the latest amd64 disk image file for GrannyOS (Build 071123.0) below">
      <Button
        onclick="window.open('https://mega.nz/file/zMAXWJqT#mgpf4VWiwJgEnvPnO5e_KUE6jFfTgP7PtVQDFqP5eUc', '_blank', 'noopener');"
        variant="accent"
        class="download-btn">
        Download GrannyOS (ISO)
      </Button>
    </InvertedCard>

    <InvertedCard headerText="Links to older builds">
      <Button
        class="hyperlinks"
        onclick="window.open('https://mega.nz/file/zURHgCRA#Euob2d2J_WSAWRJ2SFnuIbcztGzMupu8xSVoiIMUWxg', '_blank', 'noopener');"
        variant="hyperlink">GrannyOS Build 121023.1</Button>
      <Button
        class="hyperlinks"
        onclick="window.open('https://mega.nz/file/2NwRWDCI#I5CtywkawDlDNpMavgQCdyuv0UP9n-QLBreS5bVFWrA', '_blank', 'noopener');"
        variant="hyperlink">GrannyOS Build 151023.2</Button>
      <Button
        class="hyperlinks"
        onclick="window.open('https://mega.nz/file/OIoWVCIB#AajkTuGDrV6gy5KTzgkQ2TBKTI4e9i7VaEZKayaqbww', '_blank', 'noopener');"
        variant="hyperlink">GrannyOS Build 281023.0</Button>
    </InvertedCard>

    <!-- Oracle's a bitch, so this feature no longer exists -->
    <!-- <InvertedCard
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
    </InvertedCard> -->
  </CardContainer>
</PageSection>
