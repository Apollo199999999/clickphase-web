<script>
  import "fluent-svelte/theme.css";
  import PageSection from "../../components/PageSection.svelte";
</script>

<PageSection isTopSection={true}>
  <h1>Orbit Simulator</h1>

  <h2>
    An n-body simulation that allows you to simulate the gravitational forces
    between a maximum of 5 bodies. You can simulate the orbits of planets,
    moons, and stars in space, and construct your own solar systems. This was
    created using SvelteKit, Tailwind CSS, and p5.js.
  </h2>

  <h2>
    For best experience, use Chrome to load this sketch, with the "Use hardware
    acceleration where possible" switch toggled on (it should be on by default,
    but please check). This is important as it allows p5.js to render frames
    faster (>100 times per second) when you increase the simulation speed.
  </h2>

  <h2>
    You can use the embed below, or try it out here:
    <a
      class="links"
      target="_blank"
      rel="noopener"
      href="https://cep-wa3-orbit-simulator.vercel.app">
      https://cep-wa3-orbit-simulator.vercel.app
    </a>
  </h2>

  <h2>(Note: This does not work well on mobile.)</h2>

  <div class="frame-div">
    <iframe
      title="Orbit Simulator"
      src="https://cep-wa3-orbit-simulator.vercel.app"
      class="simulator-frame" />
  </div>
</PageSection>

<style>
  .frame-div {
    width: 100%;
    overflow: auto;
  }

  .simulator-frame {
    box-sizing: border-box;
    width: 100%;
    min-width: 1024px;
    height: 90vh;
    margin: 2em 0;
    border: 1px solid var(--fds-control-strong-stroke-default);
    border-radius: 4px;
  }

  .links {
    color: var(--fds-accent-text-primary);
  }
</style>
