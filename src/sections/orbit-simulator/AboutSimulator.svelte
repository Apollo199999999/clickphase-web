<script>
  import "fluent-svelte/theme.css";
  import PageSection from "../../components/PageSection.svelte";
</script>

<PageSection isTopSection={true}>
  <h1>Orbit Simulator</h1>

  <h2>
    A n-body simulation that allows you to simulate the gravitational forces
    between a maximum of 5 bodies. You can simulate the orbits of planets,
    moons, and stars in space, and construct your own solar systems. This was
    created using SvelteKit, Tailwind CSS, and p5.js. Try it out in the embed
    below.
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
</style>
