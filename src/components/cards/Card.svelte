<script>
  export let headerText = "";
  export let subtitleText = "";
  export let clickEvent = "";
</script>

<!-- Card component -->
<div class="card" onclick={clickEvent}>
  <div class="card-body">
    <slot />
  </div>
  <div class="card-header">
    <h1>{headerText}</h1>
    <h2>{subtitleText}</h2>
  </div>
</div>

<style>
  .card {
    width: 20%;
    flex-grow: 1;
    background: linear-gradient(
        var(--fds-card-background-default),
        var(--fds-card-background-default)
      ),
      linear-gradient(
        var(--fds-solid-background-base),
        var(--fds-solid-background-base)
      ); /* first bg is on top of this */
    border-radius: var(--fds-control-corner-radius);
    z-index: 999;
    transition: 200ms ease-in-out;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
    margin-bottom: 2em;
  }

  .card-header {
    text-align: center;
    padding-bottom: 0.5em;
  }

  h1 {
    font-size: 24px;
  }

  h2 {
    font-weight: 400;
    font-size: 18px;
  }
  .card-body {
    padding: 20px 10px 0px 10px;
    text-align: center;
    align-items: center;
  }

  .card:hover {
    transform: scale(1.035);
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.2);
  }

  /* Responsive media queries */

  @media screen and (max-width: 1000px) {
    .card {
      width: 40%;
    }
  }

  @media screen and (max-width: 620px) {
    .card {
      width: 80%;
    }
  }
</style>
