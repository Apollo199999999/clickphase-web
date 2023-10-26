<script>
  import "fluent-svelte/theme.css";
  import CardContainer from "../../components/cards/CardContainer.svelte";
  import Card from "../../components/cards/Card.svelte";
  import PageSection from "../../components/PageSection.svelte";
</script>

<PageSection isTopSection={true}>
  <h1>Typeracer</h1>

  <h2>A simple typeracing game made for a school project.</h2>

  <CardContainer>
    <Card
      headerText="About"
      subtitleText="Typeracer is a simple, single-player typeracing game created in SvelteKit. It comes with multiple passage types and difficulty settings." />

    <Card
      headerText="Compatibility"
      subtitleText="Typeracer is available on the web, without the need to download anything. Typeracer is compatible with both desktop and mobile." />
  </CardContainer>

  <iframe
    title="Typeracer"
    src="https://cep-wa1-typeracer.vercel.app"
    class="typeracer-frame" />
</PageSection>

<style>
  .typeracer-frame {
    width: 100%;
    height: 80vh;
    margin-bottom: 2em;
    border: 1px solid var(--fds-control-strong-stroke-default);
    border-radius: 4px;
  }
</style>
