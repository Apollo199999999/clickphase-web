<script>
  import "fluent-svelte/theme.css";
  import CardContainer from "../../components/cards/CardContainer.svelte";
  import Card from "../../components/cards/Card.svelte";
  import PageSection from "../../components/PageSection.svelte";
  import ImageComparison from "../../components/ImageComparison.svelte";
</script>

<PageSection>
  <h1>Features</h1>

  <CardContainer>
    <Card
      headerText="Multiple passage types"
      subtitleText="Typeracer provides two passage types. The 'Random words' passage type is made up of random words, while the 'Random quote' passage type consists of a famous quote or sentence.">
      <ImageComparison
        srcLeft="/screenshots/typeracer/WordPassage.png"
        altLeft="Random words"
        srcRight="/screenshots/typeracer/QuotePassage.png"
        altRight="Random quote" />
    </Card>

    <Card
      headerText="Multiple difficulty settings"
      subtitleText="For the 'Random words' passage type, Typeracer provides multiple difficulty settings for you to adequately challenge yourself. ('Easy' difficulty on the left, 'Hard' difficulty on the right)">
      <ImageComparison
        srcLeft="/screenshots/typeracer/EasyDifficulty.png"
        altLeft="Easy difficulty"
        srcRight="/screenshots/typeracer/HardDifficulty.png"
        altRight="Hard difficulty" />
    </Card>

    <Card
      headerText="Typing metrics"
      subtitleText="Typeracer provides your typing statistics after you finish to provide feedback on how well you did. Such metrics include your typing speed in Words per Minute (WPM), and your typing accuracy in percentage.">
      <img
        src="/screenshots/typeracer/TypingMetrics.png"
        alt="Typing metrics" 
        class="metrics-img"/>
    </Card>
  </CardContainer>
</PageSection>

<style>
  .difficulty-caption {
    color: var(--fds-text-secondary);
    font-weight: 400;
  }

  .metrics-img {
    width: 100%;
  }
</style>
