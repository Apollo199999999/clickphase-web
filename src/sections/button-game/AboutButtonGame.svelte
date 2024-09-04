<script>
  import "fluent-svelte/theme.css";
  import PageSection from "../../components/PageSection.svelte";
</script>

<PageSection isTopSection={true}>
  <h1>Button Game</h1>
  <h2>
    A simple idle button game written in p5.js. All you have to do is click the button on screen and watch the counter increment :)
  </h2>

  <h2>
    This was made for a school project. Thus, for a much more in-depth look into
    how I made this, please click on the "Documentation/Portfolio link" button,
    under the "Links" section below.
  </h2>

  <h2>
    You can use the embed below, or try it out here: <a
      class="links"
      target="_blank"
      rel="noopener"
      href="https://editor.p5js.org/Apollo199999999/full/hpA33F5QB"
      >https://editor.p5js.org/Apollo199999999/full/hpA33F5QB</a>
  </h2>

  <iframe
    title="Button Game"
    src="https://editor.p5js.org/Apollo199999999/full/hpA33F5QB"
    class="button-frame" />
</PageSection>

<style>
  .button-frame {
    width: 100%;
    height: 90vh;
    margin: 2em 0;
    border: 1px solid var(--fds-control-strong-stroke-default);
    border-radius: 4px;
  }

  .links {
    color: var(--fds-accent-text-primary);
  }
</style>
