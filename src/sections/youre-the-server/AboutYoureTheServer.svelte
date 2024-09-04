<script>
  import "fluent-svelte/theme.css";
  import PageSection from "../../components/PageSection.svelte";
</script>

<PageSection isTopSection={true}>
  <h1>You're the Server!</h1>
  <h2>
    In this game, you are a chat server. You will have to manually handle client
    connects, client messages, rooms, and more, all while ensuring user
    satisfaction. For instructions on how to play, you can either read my
    portfolio (under the "Links") section, or read the "How to play" guide
    included in the game's main menu.
  </h2>

  <h2>
    This game is inspired by another game called "You're the OS!": <a
      href="https://github.com/plbrault/youre-the-os"
      class="links"
      target="_blank"
      rel="noopener">https://github.com/plbrault/youre-the-os</a
    >.
  </h2>

  <h2>
    For best experience, use Chrome to load this sketch, with the "Use hardware
    acceleration where possible" switch toggled on (it should be on by default,
    but please check). This is important as it allows p5.js to render frames
    faster.
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
      href="https://cep-wa4-youre-the-server.vercel.app/"
      >https://cep-wa4-youre-the-server.vercel.app/</a>
  </h2>

  <iframe
    title="You're the Server!"
    src="https://cep-wa4-youre-the-server.vercel.app/"
    class="server-frame" />
</PageSection>

<style>
  .server-frame {
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
