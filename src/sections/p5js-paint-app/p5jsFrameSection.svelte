<script>
  import { Button } from "fluent-svelte";
  import "fluent-svelte/theme.css";
  import Fullscreen from "svelte-fullscreen";
  import PageSection from "../../components/PageSection.svelte";
</script>

<PageSection isTopSection={true}>
  <h1>p5.js Paint App</h1>
  <h2>
    A lightweight, online, and minimal paint app developed in p5.js by me.
    (Works best on desktop, does not work well on mobile)
  </h2>
  <h2>
    You can use the embed below, or try it out here: <a
      class="links"
      href="https://editor.p5js.org/Apollo199999999/full/X0Y6tSIjJ"
      >https://editor.p5js.org/Apollo199999999/full/X0Y6tSIjJ</a>
  </h2>

  <Fullscreen let:onToggle>
    <div class="paint-app-frame">
      <div>
        <div class="fullscreen-btn-div">
          <Button
            class="fullscreen-btn"
            variant="accent"
            on:click={() => onToggle()}>Toggle Fullscreen</Button>
        </div>
        <div class="frame-div">
          <iframe
            title="p5.js Paint App"
            width="900"
            height="642"
            src="https://editor.p5js.org/Apollo199999999/embed/X0Y6tSIjJ" />
        </div>
      </div>
    </div>
  </Fullscreen>
</PageSection>

<style>
  .links {
    color: var(--fds-accent-text-primary);
  }
  
  .paint-app-frame {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 2em;
  }

  .paint-app-frame :global(.fullscreen-btn) {
    margin-bottom: 1em;
  }

  .frame-div {
    overflow-x: auto;
    width: 90vw;
  }

</style>
