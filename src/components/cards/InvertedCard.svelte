<script>
  export let headerText = "";
  export let subtitleText = "";
  export let clickEvent = "";
</script>

<!-- Card component -->
<div class="card" onclick={clickEvent}>
  <div class="card-header">
    <h1 class="card-title">{headerText}</h1>
    <h2 class="card-subtitle">{subtitleText}</h2>
  </div>
  
  <div class="card-body">
    <slot />
  </div>
</div>

<style>
  @import "./card-styles.css";

  .card-body {
    padding: 0em 1em 1em 1em;
  }

  .card-header {
    padding: 1em 1em 0em 1em;
  }
</style>
