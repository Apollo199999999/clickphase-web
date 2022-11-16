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
            alt="DynaWin Window Screenshot"
        />
    </div>

    <div class="logo-components">
        <img style="transform: translate(0,{-sy * 0.1}px)" alt="DynaWin Logo" />
        <TextBlock
            variant="subtitle"
            style="transform: translate(0,{-sy * 0.1}px)"
            class="caption-text"
        >
            Dynamic Desktop for Windows 10 and Windows 11
        </TextBlock>

        <Button
            class="download-btn"
            style="transform: translate(0,{-sy * 0.1}px) scale(calc(16/14))"
            onclick="window.open('https://github.com/Apollo199999999/DynaWin/releases', '_blank', 'noopener');"
            variant="accent"
            >Download DynaWin
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
        content: url("/screenshots/dynawin/WindowLight.png");
        -webkit-fliter: blur(2px);
        filter: blur(2px);
    }

    @media (prefers-color-scheme: dark) {
        .bg-image-div img {
            max-height: calc(72vh - 50px);
            max-width: 80vw;
            content: url("/screenshots/dynawin/WindowDark.png");
            -webkit-fliter: blur(2px);
            filter: blur(2px);
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

    .logo-components img {
        display: block;
        max-height: 20vh;
        max-width: 80vw;
        content: url("/app-images/dynawin/logoLight.png");
        margin: auto;
    }

    @media (prefers-color-scheme: dark) {
        .logo-components img {
            display: block;
            max-height: 20vh;
            max-width: 80vw;
            content: url("/app-images/dynawin/logoDark.png");
            margin: auto;
        }
    }

    .logo-components :global(.caption-text) {
        display: block;
        margin-top: 10px;
    }

    .logo-components :global(.download-btn) {
        margin-top: calc(25px / calc(16 / 14));
    }
</style>
