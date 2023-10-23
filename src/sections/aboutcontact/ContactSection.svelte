<script>
  import { Button } from "fluent-svelte";
  import CardContainer from "../../components/cards/CardContainer.svelte";
  import Card from "../../components/cards/Card.svelte";
  import InvertedCard from "../../components/cards/InvertedCard.svelte";
  import PageSection from "../../components/PageSection.svelte";
  import "fluent-svelte/theme.css";
</script>

<PageSection>
  <h1>Contact ClickPhase</h1>
  <h2>How to contant ClickPhase</h2>

  <CardContainer>
    <InvertedCard headerText="Contact Us">
      <p class="hyperlink-group">
        <Button
          class="hyperlinks"
          onclick="window.open('mailto:clickphasehelp@gmail.com', 'noopener');"
          variant="hyperlink">Send us an email</Button>
        <Button
          class="hyperlinks"
          onclick="window.open('https://github.com/Apollo199999999', '_blank', 'noopener');"
          variant="hyperlink">GitHub account</Button>
        <Button
          class="hyperlinks"
          onclick="window.open('https://www.youtube.com/channel/UCUy3erIflkjOWYsfGPVIM6g', '_blank', 'noopener');"
          variant="hyperlink">YouTube channel</Button>
        <Button
          class="hyperlinks"
          onclick="window.open('https://www.youtube.com/channel/UCyx7JU3eigRv4A9HnxRWAIQ', '_blank', 'noopener');"
          variant="hyperlink">Personal YouTube channel</Button>
      </p>
    </InvertedCard>

    <Card
      headerText="Give Feedback"
      subtitleText="If you need support or want to leave feedback, you may tell us on GitHub, or you may email us. We will respond within 5 business days." />
  </CardContainer>
</PageSection>
