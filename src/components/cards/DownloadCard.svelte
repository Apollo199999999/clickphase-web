<script>
  export let headerText = "";
  export let subtitleText = "";
  export let clickEvent = "";
</script>

<!-- Card component -->
<div class="card" onclick={clickEvent}>
  <div class="download-content">
    <div class="card-header">
      <h1 class="card-title">{headerText}</h1>
      <h2 class="card-subtitle">{subtitleText}</h2>
    </div>

    <div class="card-body">
      <slot />
    </div>
  </div>
</div>

<style>
  @import "./card-styles.css";
  
  .card {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  .card-header {
    padding: 0em 1em;
  }

  .card-body {
    padding: 0em 1em 1em 1em;
  }
</style>
