<script>
  import "fluent-svelte/theme.css";
  import CardContainer from "../../components/cards/CardContainer.svelte";
  import Card from "../../components/cards/Card.svelte";
  import PageSection from "../../components/PageSection.svelte";
</script>

<PageSection isTopSection={true}>
  <h1>GrannyOS</h1>

  <h2>The best operating system in the world™.</h2>

  <CardContainer>
    <Card
      headerText="About"
      subtitleText="GrannyOS is a Linux distro based on Ubuntu MATE, complete with custom sounds, icons, and
      themes, to make it Granny approved™.">
      <iframe
        src="https://www.youtube-nocookie.com/embed/rwzpeG1jO7k"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen />
    </Card>

    <Card
      headerText="Compatibility"
      subtitleText="You can install GrannyOS on a virtual machine or a real computer. GrannyOS is only supported on amd64 devices.">
      <img
        alt="GrannyOS Desktop"
        src="/screenshots/grannyos/CompatibilityImage.png" />
    </Card>
  </CardContainer>
</PageSection>

<style>
  iframe, 
  img {
    width: 100%;
    height: unset;
  }
  
  iframe {
    aspect-ratio: 16 / 9;
  }
</style>
