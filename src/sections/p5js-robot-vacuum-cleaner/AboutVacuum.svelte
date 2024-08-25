<script>
  import "fluent-svelte/theme.css";
  import PageSection from "../../components/PageSection.svelte";
</script>

<PageSection isTopSection={true}>
  <h1>p5.js Robot Vacuum Cleaner</h1>
  <h2>
    An algorithm, written in p5.js, that programs a robot vacuum cleaner to
    effectively clean a room with obstacles within 2 minutes. For more details
    about how I did this, click on the "Documentation/Portfolio link" button,
    under the "Links" section below.
  </h2>

  <h2>
    For best experience, use Chrome to load this sketch, with the "Use hardware
    acceleration where possible" switch toggled on (it should be on by default,
    but please check). This is important as it allows p5.js to render
    frames/raycast faster.
  </h2>

  <h2>
    You can use the embed below, or try it out here: <a
      class="links"
      target="_blank"
      rel="noopener"
      href="https://editor.p5js.org/Apollo199999999/full/9uNXHtLeq"
      >https://editor.p5js.org/Apollo199999999/full/9uNXHtLeq</a>
  </h2>

  <iframe
    title="p5.js Robot Vacuum Cleaner"
    src="https://editor.p5js.org/Apollo199999999/full/9uNXHtLeq"
    class="vacuum-frame" />
</PageSection>

<style>
  .vacuum-frame {
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
