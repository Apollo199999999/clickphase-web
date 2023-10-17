<script>
  export let headerText = "";
  export let clickEvent = "";
</script>

<!-- Card component -->
<div class="card" onclick={clickEvent}>
  <div class="card-body">
    <slot />
  </div>
  <div class="card-header">
    <h1>{headerText}</h1>
  </div>
</div>

<style>
  .card {
    width: 23%;
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
    margin-bottom: 50px;
  }

  .card-header {
    text-align: center;
    padding: 10px 10px 30px 10px;
  }

  .card-body {
    padding: 50px 20px 30px 20px;
    text-align: center;
    font-size: 18px;
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
