<script>
  import "fluent-svelte/theme.css";
  import ImageComparison from "../../components/ImageComparison.svelte";
  import CardContainer from "../../components/cards/CardContainer.svelte";
  import Card from "../../components/cards/Card.svelte";
  import PageSection from "../../components/PageSection.svelte";
</script>

<PageSection>
  <h1>Dynamic Wallpaper</h1>
  <h2>Switch your desktop wallpaper at certain triggers.</h2>

  <CardContainer>
    <Card
      headerText="Automatic switiching of your wallpaper"
      subtitleText="DynaWin can automatically switch your wallpaper at specific triggers. For example, you can configure DynaWin to switch your wallpaper at night, to make it easier on the eyes." />
    <Card
      headerText="Configure when to switch your wallpaper"
      subtitleText="DynaWin can change your wallpaper either based on the time, or based on your battery percentage, to remind you when your battery is running low, or remind you to unplug your charger." />
  </CardContainer>

  <ImageComparison
    srcLeft="/screenshots/dynawin/DynamicWallpaperLight.png"
    altLeft="Light Theme"
    srcRight="/screenshots/dynawin/DynamicWallpaperDark.png"
    altRight="Dark Theme" />

  <!-- Force a bottom margin of 2em using a div as ImageComparisonControl doesn't come with bottom margin of 2em-->
  <div class="bottom-margin" />
</PageSection>

<style>
  .bottom-margin {
    height: 2em;
  }
</style>
