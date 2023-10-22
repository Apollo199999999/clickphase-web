<!-- Template page section -->
<script>
  import "fluent-svelte/theme.css";
  export let isTopSection = false;
</script>

{#if isTopSection == false}
  <div class="border" />
{/if}

<div class="container">
  <slot />
</div>

<style>
  .border {
    border-top: 2px solid var(--fds-control-stroke-default);
  }
  .container {
    margin-top: 2em;
  }
</style>
