<script>
  import "fluent-svelte/theme.css";
  import CardContainer from "../../components/cards/CardContainer.svelte";
  import Card from "../../components/cards/Card.svelte";
  import PageSection from "../../components/PageSection.svelte";
</script>

<PageSection isTopSection={true}>
    <picture>
      <source
        srcset="/app-images/granny-keyboard/logoDark.png"
        media="(prefers-color-scheme: dark)" />
      <img
        class="logo"
        alt="Granny Keyboard"
        src="/app-images/granny-keyboard/logoLight.png" />
    </picture>
  
    <h2>Your keys will start worshipping Granny.</h2>
  
    <CardContainer>
      <Card
        headerText="About"
        subtitleText="Granny Keyboard is a keyboard modifier that modifies your keyboard to make it worthy of Granny. Whichever key you press, the word 'Granny' will be added in front of it (only for Windows version), and a dialog box will pop up.">
        <iframe
          src="https://www.youtube-nocookie.com/embed/NdBmcblzhFA"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen />
      </Card>
  
      <Card
        headerText="Compatibility"
        subtitleText='Granny Keyboard (Windows) has been tested with Windows 10 and 11. An alternative, lighter Python version is available under the "Granny Keyboard links" section, but you will have to install the dependencies yourself.'>
        <img
            class="compat-img"
            alt="Granny Keyboard"
            src="/screenshots/granny-keyboard/Window.png" />
      </Card>
    </CardContainer>
  </PageSection>

<style>
  .logo {
    width: 100%;
    max-width: 450px;
  }

  iframe,
  .compat-img {
    width: 100%;
    height: unset;
    aspect-ratio: 16 / 9;
  }
</style>
