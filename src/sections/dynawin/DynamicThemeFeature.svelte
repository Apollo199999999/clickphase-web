<script>
  import "fluent-svelte/theme.css";
  import ImageComparison from "../../components/ImageComparison.svelte";
  import CardContainer from "../../components/cards/CardContainer.svelte";
  import Card from "../../components/cards/Card.svelte";
  import PageSection from "../../components/PageSection.svelte";
</script>

<PageSection>
  <h1>Dynamic Theme</h1>
  <h2>Switch your Windows theme or app theme based on time.</h2>

  <CardContainer>
    <Card
      headerText="Automatic theme switching"
      subtitleText="DynaWin can automatically switch the Windows theme at specific timings. For example, you can automatically switch Windows to Dark theme at night, so that it is easier on the eyes." />
    <Card
      headerText="Choose which mode to switch"
      subtitleText="You can configure DynaWin to switch only the app or system theme, or both. This gives you more control over DynaWin's behaviour and allows DynaWin to better cater to your needs." />
  </CardContainer>

  <ImageComparison
    srcLeft="/screenshots/dynawin/DynamicThemeLight.png"
    altLeft="Light Theme"
    srcRight="/screenshots/dynawin/DynamicThemeDark.png"
    altRight="Dark Theme" />

  <!-- Force a bottom margin of 2em using a div as ImageComparisonControl doesn't come with bottom margin of 2em-->
  <div class="bottom-margin" />
</PageSection>

<style>
  .bottom-margin {
    height: 2em;
  }
</style>
