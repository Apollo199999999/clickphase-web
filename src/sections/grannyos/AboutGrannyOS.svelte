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
      <img
        alt="GrannyOS Desktop"
        src="/screenshots/grannyos/MainUI.png" />
    </Card>

    <Card
      headerText="Compatibility"
      subtitleText="You can install GrannyOS on a virtual machine, a real computer, or try it out on the web (coming soon). GrannyOS is only supported on amd64 devices.">
      <img
        alt="GrannyOS Desktop"
        src="/screenshots/grannyos/CompatibilityImage.png" />
    </Card>
  </CardContainer>
</PageSection>

<style>
  img {
    width: 100%;
    height: unset;
  }
</style>
