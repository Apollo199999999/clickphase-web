<script>
  import "fluent-svelte/theme.css";
  import PageSection from "../../components/PageSection.svelte";
</script>

<PageSection isTopSection={true}>
  <h1>Mountain Visualisation</h1>
  <h2>A procedual, muted mountain landscape generator created in p5.js.</h2>
  <h2>
    You can use the embed below, or try it out here: <a
      class="links"
      target="_blank"
      rel="noopener"
      href="https://editor.p5js.org/Apollo199999999/full/fxZKyaIwn"
      >https://editor.p5js.org/Apollo199999999/full/fxZKyaIwn</a>
  </h2>

  <iframe
    title="Mountain Visualisation"
    src="https://editor.p5js.org/Apollo199999999/full/fxZKyaIwn"
    class="visualisation-frame" />
</PageSection>

<style>
  .visualisation-frame {
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
