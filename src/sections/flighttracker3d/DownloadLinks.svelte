<script>
  import { Button } from "fluent-svelte";
  import PageSection from "../../components/PageSection.svelte";
  import CardContainer from "../../components/cards/CardContainer.svelte";
  import InvertedCard from "../../components/cards/InvertedCard.svelte";
  import "fluent-svelte/theme.css";
</script>

<PageSection>
  <h1>Downloads and Links</h1>
  <h2>FlightTracker3D download links and other links.</h2>

  <CardContainer>
    <InvertedCard
      headerText="Buy FlightTracker3D (COMING SOON)"
      subtitleText="Click the button below to buy FlightTracker3D from Steam.">
      <Button
        onclick="window.open('https://example.com', '_blank', 'noopener');"
        variant="accent"
        disabled={true}
        class="download-btn">
        Buy FlightTracker3D from Steam
      </Button>
    </InvertedCard>

    <InvertedCard headerText="Links">
      <Button
        class="hyperlinks"
        onclick="window.open('https://clickphase.vercel.app/flighttracker3d/license', '_blank', 'noopener');"
        variant="hyperlink">End-user license agreement</Button>
      <Button
        class="hyperlinks"
        onclick="window.open('https://clickphase.vercel.app/flighttracker3d/privacypolicy', '_blank', 'noopener');"
        variant="hyperlink">Privacy policy</Button>
      <Button
        class="hyperlinks"
        onclick="window.open('https://clickphase.vercel.app/flighttracker3d/third-party-licenses', '_blank', 'noopener');"
        variant="hyperlink">Third party licenses</Button>
      <Button
        class="hyperlinks"
        onclick="window.open('mailto:clickphasehelp@gmail.com', 'noopener');"
        variant="hyperlink">Report a bug</Button>
      <Button
        class="hyperlinks"
        onclick="window.open('mailto:clickphasehelp@gmail.com', 'noopener');"
        variant="hyperlink">Request a feature</Button>
    </InvertedCard>
  </CardContainer>
</PageSection>
