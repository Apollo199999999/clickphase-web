<script>
  import "fluent-svelte/theme.css";
  import { Button } from "fluent-svelte";
  import { page } from "$app/stores";
</script>

<div class="components">
    <h1>Error {$page.status}</h1>
    <h2>Error message: {$page.error.message}</h2>
    <div class="error-btn">
        <Button variant="accent" href="/">Return to homepage</Button>
    </div>
</div>

<style>
  .components {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 100%;
    text-align: center;
  }

  h1 {
    font-size: 64px;
    margin: 16px 64px;
  }

  .error-btn {
    margin-top: 1.5em;
  }

</style>
