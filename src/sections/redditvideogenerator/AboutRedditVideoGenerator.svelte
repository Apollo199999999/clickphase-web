<script>
  import { TextBlock } from "fluent-svelte";
  import "fluent-svelte/theme.css";

</script>

<div class="container">
  <TextBlock variant="titleLarge" class="titleText"
    >About RedditVideoGenerator</TextBlock>

  <TextBlock variant="bodyLarge" class="bodyText"
    ><p>
      RedditVideoGenerator is a Windows app that generates r/AskReddit videos
      and uploads them to YouTube, with your consent, automatically.
    </p>
    <p>
      RedditVideoGenerator is able to fully generate a 15 minute Reddit video,
      with background music courtesy of Kevin Macleod, a thumbnail image for
      YouTube, as well as a title and description for YouTube, all fully
      autonomously.
    </p>
    <b>
      <p>
        For more information and details, please head here: <a
          class="links"
          href="https://github.com/Apollo199999999/RedditVideoGenerator/blob/main/README.md"
          >https://github.com/Apollo199999999/RedditVideoGenerator/blob/main/README.md</a>
      </p>
    </b>
  </TextBlock>

  <!-- TODO: FIX COMPARE IMAGE -->

  <div class="compare-image-div">
    
    
  </div>
</div>

<style>
  .container {
    margin-top: 2em;
  }

  /* force the title to wrap if it is almost touching the edges */
  .container :global(.titleText) {
    display: block;
    margin-left: 5px;
    margin-right: 5px;
  }

  .container :global(.bodyText) {
    display: block;
    text-align: center;
    margin: auto;
    margin-top: 1.5em;
    max-width: 1100px;
  }

  .links {
    color: var(--fds-accent-text-primary);
    text-align: center;
    /* These are technically the same, but use both */
    overflow-wrap: break-word;
    word-wrap: break-word;
    -ms-word-break: break-all;
    /* This is the dangerous one in WebKit, as it breaks things wherever */
    word-break: break-all;
    /* Instead use this non-standard one: */
    word-break: break-word;
    /* Adds a hyphen where the word breaks, if supported (No Blink) */
    -ms-hyphens: auto;
    -moz-hyphens: auto;
    -webkit-hyphens: auto;
    hyphens: auto;
    font-size: 18px;
  }

  .compare-image-div {
    /* resize the CompareImage container using padding */
    max-width: min(1100px, 85vw);
    margin: 2em auto 0 auto;
  }
</style>
