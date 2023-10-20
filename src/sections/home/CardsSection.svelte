<script>
  import "fluent-svelte/theme.css";
  import CardContainer from "../../components/cards/CardContainer.svelte";
  import Card from "../../components/cards/Card.svelte";
</script>

<svelte:head>
  <link
    rel="preload"
    href="/FluentSystemIcons-Regular.ttf"
    as="font"
    crossorigin="anonymous" />
</svelte:head>

<div class="container">
  <h1>Home</h1>
  <CardContainer>
    <Card
      headerText="All Software"
      clickEvent="window.location.href = '/software';">
      <p class="card-default-icon">&#x02A7;</p>
    </Card>

    <Card
      headerText="Email"
      clickEvent="window.location.href = 'mailto:clickphasehelp@gmail.com';">
      <p class="card-default-icon">&#xF509;</p>
    </Card>

    <Card
      headerText="YouTube"
      clickEvent="window.open('https://www.youtube.com/channel/UCUy3erIflkjOWYsfGPVIM6g', '_blank', 'noopener');">
      <img
        src="/youtube-profiles/yt_icon_rgb.png"
        alt="YouTube Icon"
        class="card-yt-icon" />
    </Card>
    
    <Card
      headerText="GitHub"
      clickEvent="window.open('https://github.com/Apollo199999999', '_blank', 'noopener');">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 16 16"
        width="64"
        height="64"
        class="card-github-icon">
        <path
          fill-rule="evenodd"
          d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z" />
      </svg>
    </Card>
  </CardContainer>
</div>

<style>
  @font-face {
    font-family: "FluentUIIcons";
    src: url("/FluentSystemIcons-Regular.ttf"); /*URL to font*/
  }

  .container {
    margin-top: 2em;
  }

  .card-default-icon {
    font-family: "FluentUIIcons" !important;
    font-size: 64px;
    color: var(--fds-accent-default);
    margin: 0px;
  }

  .card-yt-icon {
    width: 64px;
    height: 64px;
    object-fit: contain;
  }

  .card-github-icon {
    fill: var(--fds-text-primary);
    margin: 0px;
  }
</style>
