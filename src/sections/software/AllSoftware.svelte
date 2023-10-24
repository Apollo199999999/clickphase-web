<script>
  import "fluent-svelte/theme.css";
  import CardContainer from "../../components/cards/CardContainer.svelte";
  import Card from "../../components/cards/Card.svelte";
  import PageSection from "../../components/PageSection.svelte";
</script>

<PageSection isTopSection={true}>
  <h1>All Software</h1>

  <CardContainer>
    <Card
      headerText="RedditVideoGenerator"
      subtitleText="Generate r/AskReddit Reddit videos and upload them to YouTube automatically"
      clickEvent="window.location.href = '/redditvideogenerator';">
      <picture>
        <source
          srcset="/app-images/redditvideogenerator/RVGImageDark.png"
          media="(prefers-color-scheme: dark)" />
        <img
          class="card-image"
          alt="RedditVideoGenerator"
          src="/app-images/redditvideogenerator/RVGImageLight.png" />
      </picture>
    </Card>

    <Card
      headerText="LauncherX"
      subtitleText="Modern app launcher for Windows"
      clickEvent="window.location.href = '/launcherx';">
      <picture>
        <source
          srcset="/app-images/launcherx/LauncherXImageDark.png"
          media="(prefers-color-scheme: dark)" />
        <img
          class="card-image"
          alt="LauncherX"
          src="/app-images/launcherx/LauncherXImageLight.png" />
      </picture>
    </Card>

    <Card
      headerText="Granny Keyboard"
      subtitleText="Your keys will start worshipping Granny"
      clickEvent="window.location.href = '/granny-keyboard';">
      <img
        class="card-image"
        alt="Granny Keyboard"
        src="/app-images/granny-keyboard/GrannyKeyboardImage.png" />
    </Card>

    <Card
      headerText="DynaWin"
      subtitleText="Dynamic Desktop for Windows 10 and Windows 11"
      clickEvent="window.location.href = '/dynawin';">
      <picture>
        <source
          srcset="/app-images/dynawin/DynaWinImageDark.png"
          media="(prefers-color-scheme: dark)" />
        <img
          class="card-image"
          alt="DynaWin"
          src="/app-images/dynawin/DynaWinImageLight.png" />
      </picture>
    </Card>

    <Card
      headerText="p5.js Paint App"
      subtitleText="A lightweight, online, and minimal paint app made in p5.js"
      clickEvent="window.location.href = '/p5js-paint-app';">
      <img
        class="card-image"
        alt="p5.js Paint App"
        src="/app-images/p5js-paint-app/p5jsPaintAppImage.png" />
    </Card>
  </CardContainer>
</PageSection>

<style>
  .card-image {
    width: 100%;
    max-width: 260px;
    height: 120px;
    object-fit: contain;
  }
</style>
