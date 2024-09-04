<script>
  import "fluent-svelte/theme.css";
  import PageSection from "../../components/PageSection.svelte";
</script>

<PageSection isTopSection={true}>
  <h1>Saboteur Escape Room</h1>
  <h2>
    A multiplayer, online escape room based on the card game Saboteur <a
      href="https://www.youtube.com/watch?v=FNTesrTLh4I"
      class="links">(https://www.youtube.com/watch?v=FNTesrTLh4I)</a
    >, made in collaboration with 2 other classmates:
    <a
      href="https://github.com/apxy36"
      class="links"
      target="_blank"
      rel="noopener">@apxy</a>
    and
    <a
      href="https://github.com/shreddedpaper"
      target="_blank"
      rel="noopener"
      class="links">@shreddedpaper</a
    >.
  </h2>
  <h2>
    Do note that if you are trying out this game, it may take 1-2 minutes for
    the chat server to exit from sleep mode. This is because the server is
    hosted for free on render.com, which causes the server to sleep after
    prolonged inactivity. Hence, wait 1-2 minutes and refresh the page to get
    the game working.
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
      href="https://cep-wa3-unplugged-plugged.vercel.app/"
      >https://cep-wa3-unplugged-plugged.vercel.app/</a>
  </h2>

  <iframe
    title="Saboteur Escape Room"
    src="https://cep-wa3-unplugged-plugged.vercel.app/"
    class="room-frame" />
</PageSection>

<style>
  .room-frame {
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
