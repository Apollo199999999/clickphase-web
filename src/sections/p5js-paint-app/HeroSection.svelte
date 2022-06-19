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
    <MicaBackground />

    <div class="bg-image-div">
        <img
            style="transform: translate(0,{-sy * 0.2}px)"
            alt="p5.js Paint App Screenshot"
        />
    </div>

    <div class="logo-components">
        <TextBlock
            class="logo-title"
            style="transform: translate(0,{-sy * 0.1}px)"
            variant="display">p5.js Paint App</TextBlock
        >
        <TextBlock
            variant="subtitle"
            style="transform: translate(0,{-sy * 0.1}px)"
            class="caption-text"
        >
            A lightweight, online, and minimal paint app made in p5.js
        </TextBlock>

        <Button
            class="visit-btn"
            style="transform: translate(0,{-sy * 0.1}px) scale(calc(16/14))"
            onclick="window.open('https://editor.p5js.org/Apollo199999999/sketches/X0Y6tSIjJ', '_blank');"
            variant="accent"
            >Visit Paint App on p5.js
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
        max-width: 80vw;
        content: url("/screenshots/p5js-paint-app/Window.png");
        -webkit-fliter: blur(4px);
        filter: blur(4px);
    }
    
    @media (prefers-color-scheme: dark) {
        .bg-image-div img {
            max-height: calc(72vh - 50px);
            max-width: 80vw;
            content: url("/screenshots/p5js-paint-app/Window.png");
            -webkit-fliter: blur(4px) brightness(0.8);
            filter: blur(4px) brightness(0.8);
        }
    }

    .logo-components {
        position: absolute;
        word-wrap: break-word;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 90vw;
    }

    .logo-components :global(.logo-title) {
        display: block;
        line-height: normal;
        font-size: min(7vmax, 68px);
        margin: auto;
    }

    .logo-components :global(.caption-text) {
        display: block;
        margin-top: 20px;
    }

    .logo-components :global(.visit-btn) {
        margin-top: calc(calc(16 / 14) * 20px);
    }
</style>
