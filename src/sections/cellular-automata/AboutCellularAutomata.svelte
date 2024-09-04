<script>
  import "fluent-svelte/theme.css";
  import PageSection from "../../components/PageSection.svelte";
</script>

<PageSection isTopSection={true}>
  <h1>Cellular Automata</h1>
  <h2>
    An extension of Conway's Game of Life, written in p5.js and Tailwind CSS. New rules are added to make the game more probablistic in nature, and I also added the ability to generate "music" from the cells.
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
      href="https://cep-cellular-automata.vercel.app/"
      >https://cep-cellular-automata.vercel.app/</a>
  </h2>

  <iframe
    title="Cellular Automata"
    src="https://cep-cellular-automata.vercel.app/"
    class="automata-frame" />
</PageSection>

<style>
  .automata-frame {
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
