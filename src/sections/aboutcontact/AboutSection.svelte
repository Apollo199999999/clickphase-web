<script>
  import { Button } from "fluent-svelte";
  import CardContainer from "../../components/cards/CardContainer.svelte";
  import Card from "../../components/cards/Card.svelte";
  import "fluent-svelte/theme.css";
</script>

<div class="container">
  <h1>About ClickPhase</h1>
  <h2>Information about ClickPhase</h2>

  <CardContainer>
    <Card headerText="About Us">
      <h2>
        Hi! I am Matthias from ClickPhase, the only person here. ClickPhase
        specialises in desktop software and utilities. I make software and
        animations during my free time, and I hope you enjoy them :)
      </h2>
    </Card>

    <Card headerText="Useful Links">
      <p class="hyperlink-group">
        <Button
          class="hyperlinks"
          onclick="window.open('https://github.com/Apollo199999999/clickphase-web', '_blank', 'noopener');"
          variant="hyperlink">GitHub repository for this website</Button>
        <Button
          class="hyperlinks"
          onclick="window.open('https://github.com/Apollo199999999/clickphase-web/issues', '_blank', 'noopener');"
          variant="hyperlink">Report a bug</Button>
        <Button
          class="hyperlinks"
          onclick="window.open('https://github.com/Apollo199999999/clickphase-web/issues', '_blank', 'noopener');"
          variant="hyperlink">Suggest improvements</Button>
        <Button
          class="hyperlinks"
          onclick="window.open('https://clickphase-old.vercel.app', '_blank', 'noopener');"
          variant="hyperlink"
          >Archive of ClickPhase's old Weebly website</Button>
        <Button
          class="hyperlinks"
          onclick="window.open('https://github.com/Apollo199999999/clickphase-web/blob/main/PRIVACYPOLICY.md', '_blank', 'noopener');"
          variant="hyperlink">Privacy policy for this website</Button>
      </p>
    </Card>
  </CardContainer>
</div>

<style>
  .container {
    margin-top: 2em;
  }

  :global(.hyperlinks) {
    margin: 0px 10px;
  }
</style>
