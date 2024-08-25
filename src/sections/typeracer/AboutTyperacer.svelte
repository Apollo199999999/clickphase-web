<script>
  import "fluent-svelte/theme.css";
  import PageSection from "../../components/PageSection.svelte";
</script>

<PageSection isTopSection={true}>
  <h1>Typeracer</h1>

  <h2>
    A simple typeracing game made for a school project. You can try it out in
    the embed below.
  </h2>
  <h2>
    This was made for a school project. Thus, for a much more in-depth look into
    how I made this, please click on the "Documentation/Portfolio link" button,
    under the "Links" section below.
  </h2>
  <iframe
    title="Typeracer"
    src="https://cep-wa1-typeracer.vercel.app"
    class="typeracer-frame" />
</PageSection>

<style>
  .typeracer-frame {
    width: 100%;
    height: 80vh;
    margin: 2em 0;
    border: 1px solid var(--fds-control-strong-stroke-default);
    border-radius: 4px;
  }
</style>
