<script>
  import "fluent-svelte/theme.css";
  import PageSection from "../../components/PageSection.svelte";
</script>

<PageSection isTopSection={true}>
  <h1>Chat Program</h1>
  <h2>
    A simple chat program that allows you to chat with others online in private
    rooms, made using Socket.IO.
  </h2>
  <h2>
    Do note that if you are trying out the chat program, it may take 1-2 minutes
    for the chat server to exit from sleep mode. This is because the server is
    hosted for free on render.com, which causes the server to sleep after
    prolonged inactivity. Hence, wait 1-2 minutes and refresh the page to get
    the chat program working.
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
      href="https://simple-chat-program.vercel.app/"
      >https://simple-chat-program.vercel.app/</a>
  </h2>

  <iframe
    title="Chat Program"
    src="https://simple-chat-program.vercel.app/"
    class="chat-frame" />
</PageSection>

<style>
  .chat-frame {
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
