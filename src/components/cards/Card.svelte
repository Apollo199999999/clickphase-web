<script>
  export let headerText = "";
  export let subtitleText = "";
  export let clickEvent = "";
</script>

<!-- Card component -->
<div class="card" onclick={clickEvent}>
  <div class="card-top">
    <slot />
  </div>

  <div class="card-bottom">
    <h1 class="card-title">{headerText}</h1>
    <h2 class="card-subtitle">{subtitleText}</h2>
  </div>
</div>

<style>
  @import "./card-styles.css";
</style>
