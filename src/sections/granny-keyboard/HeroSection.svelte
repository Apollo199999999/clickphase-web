<script>
    import MicaBackground from "/src/sections/MicaBackground.svelte";
    import "fluent-svelte/theme.css";
    import { TextBlock, Button } from "fluent-svelte";

    //variable for the scrollY of the page
    let sy;
</script>

<!-- this binds `sy` to the current value of `window.scrollY` -->
<svelte:window bind:scrollY={sy} />

<div class="parallax-container">
    <MicaBackground/>

    <div class="bg-image-div">
        <img
            style="transform: translate(0,{-sy * 0.2}px)"
            alt="Granny Keyboard Windows Screenshot"
        />
    </div>

    <div class="logo-components">
        <img style="transform: translate(0,{-sy * 0.1}px)" alt="Granny Keyboard Logo" />
        <TextBlock
            variant="subtitle"
            style="transform: translate(0,{-sy * 0.1}px)"
            class="caption-text">
            Your keys will start worshipping Granny
        </TextBlock>

        <Button
            class="download-btn"
            style="transform: translate(0,{-sy * 0.1}px) scale(calc(16/14))"
            onclick="window.open('https://github.com/Apollo199999999/Granny-Keyboard/releases', '_blank');"
            variant="accent">Download Granny Keyboard
        </Button>
    </div>
</div>

<style>
    .parallax-container {
        position: relative;
        width: 100%;
        height: 72vh;
        overflow-y: hidden;
        align-items: center;
        justify-content: center;
        text-align: center;
    }

    .bg-image-div {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
    }

    .bg-image-div img {
        max-height: calc(72vh - 50px);
        max-width: 95vw;
        content: url("/screenshots/granny-keyboard/Window.png");
        filter: blur(4px);
    }


    .logo-components {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
    }

    .logo-components img {
        display: block;
        max-height: 17vh;
        max-width: 90vw;
        content: url("/app-images/granny-keyboard/logoLight.png");
    }

    @media (prefers-color-scheme: dark) {
        .logo-components img {
            display: block;
            max-height: 17vh;
            max-width: 90vw;
            content: url("/app-images/granny-keyboard/logoDark.png");
        }
    }

    .logo-components :global(.caption-text) {
        display: block;
        margin-top: 10px;
        margin-left: 20px;
        margin-right: 20px;
    }

    .logo-components :global(.download-btn) {
        margin-top: calc(calc(16/14) * 20px);
    }

</style>
