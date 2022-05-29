<script>
    import MicaBackground from "/src/sections/MicaBackground.svelte";
    import "fluent-svelte/theme.css";
    import { TextBlock } from "fluent-svelte";

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
            >Dynamic Desktop for Windows 10 and Windows 11</TextBlock
        >
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
        filter: blur(2px);
    }

    @media (prefers-color-scheme: dark) {
        .bg-image-div img {
            max-height: calc(72vh - 50px);
            max-width: 80vw;
            content: url("/screenshots/dynawin/WindowDark.png");
            filter: blur(2px);
        }
    }

    .logo-components {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
    }

    .logo-components img {
        display: block;
        max-height: 20vh;
        max-width: 80vw;
        content: url("/app-images/dynawin/logoLight.png");
    }

    @media (prefers-color-scheme: dark) {
        .logo-components img {
            display: block;
            max-height: 20vh;
            max-width: 80vw;
            content: url("/app-images/dynawin/logoDark.png");
        }
    }

    .logo-components :global(.caption-text) {
        display: block;
        margin-top: 10px;
        margin-left: 20px;
        margin-right: 20px;
    }
</style>
