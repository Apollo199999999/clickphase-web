<script>
    import { onMount } from "svelte";
    import "fluent-svelte/theme.css";

    onMount(() => {
        window.location.replace("https://github.com/Apollo199999999/RedditVideoGenerator/blob/main/PRIVACYPOLICY.md");
    });
</script>

<div class="components">
    <h1>Redirecting you...</h1>
    <h2>Redirecting you to RedditVideoGenerator's privacy policy...</h2>
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

</style>