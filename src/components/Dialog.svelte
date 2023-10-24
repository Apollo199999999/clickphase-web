<script>
  import "fluent-svelte/theme.css";
  export let isOpen = false;
  export let dialogTitle = "";
</script>

{#if isOpen == true}
  <div class="dialog-overlay" />

  <div class="dialog-container">
    <div class="dialog-content">
      <h1 class="dialog-title">{dialogTitle}</h1>
      <slot name="content-slot" />
    </div>

    <div class="dialog-footer">
      <slot name="footer-slot" />
    </div>
  </div>
{/if}

<style>
  .dialog-overlay {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    border-radius: 8px;
    background-color: var(--fds-smoke-background-default);
    backdrop-filter: blur(4px) saturate(140%) brightness(90%);
    z-index: 2147483646;
  }

  .dialog-container {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 2147483647;
    width: 90%;
    max-width: 550px;
    text-align: left;
    border: 1px solid var(--fds-surface-stroke-default);
    border-radius: 8px;
    animation: fadein 0.2s;
  }

  @keyframes fadein {
    from {
      transform: scale(1.05) translate(-50%, -50%);
      transform-origin: 0% 0%;
      opacity: 0;
    }
    to {
      transform: scale(1.0) translate(-50%, -50%);
      transform-origin: 0% 0%;
      opacity: 1;
    }
  }

  .dialog-content {
    background-color: var(--fds-solid-background-tertiary);
    border-top-left-radius: 8px;
    border-top-right-radius: 8px;
    padding: 1.5em;
  }

  .dialog-title {
    font-size: 24px;
    margin-top: 0em;
  }

  .dialog-footer {
    background-color: var(--fds-solid-background-secondary);
    padding: 1em 1.5em;
    text-align: right;
    border-bottom-left-radius: 8px;
    border-bottom-right-radius: 8px;
  }

  :global(.dialog-btn) {
    width: 45%;
    max-width: 256px;
  }
</style>
