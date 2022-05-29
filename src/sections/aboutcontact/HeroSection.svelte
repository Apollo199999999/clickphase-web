<script>
    import MicaBackground from "/src/sections/MicaBackground.svelte";
    import "fluent-svelte/theme.css";
    import { TextBlock } from "fluent-svelte";
</script>

<div class="container">
    <MicaBackground />
    <TextBlock class="titleText" variant="display">About & Contact</TextBlock>
</div>

<style>
    .container {
        position: relative;
        word-wrap: break-word;
        align-items: center;
        justify-content: center;
        text-align: center;
    }

    .container :global(.titleText) {
        line-height: normal;
        font-size: min(7vmax, 68px);
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
    }
</style>
