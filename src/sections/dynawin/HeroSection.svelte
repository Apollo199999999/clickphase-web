<script>
    import MicaBackground from "/src/sections/MicaBackground.svelte";
    import "fluent-svelte/theme.css";
    import { TextBlock } from "fluent-svelte";

    let sy;
</script>

<!-- this binds `sy` to the current value of `window.scrollY` -->
<svelte:window bind:scrollY={sy} />

<div class="parallax-container">
    <MicaBackground />

    <picture>
        <source
            media="(prefers-color-scheme: dark)"
            srcset="/screenshots/dynawin/WindowDark.png"
        />
        <source
            media="(prefers-color-scheme: light)"
            srcset="/screenshots/dynawin/WindowLight.png"
        />
        <img
            style="transform: translate(0,{-sy * 0.7}px)"
            alt="DynaWin window screenshot"
            src="/screenshots/dynawin/WindowLight.png"
        />
    </picture>
</div>

<style>
    .parallax-container {
        width: 100%;
        height: 35em;
        overflow-y: hidden;
        position: relative;
        align-items: center;
        justify-content: center;
    }

    .parallax-container picture {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        text-align: center;
    }

    .parallax-container picture img{
        max-width: 80vw;
        max-height: 65vh;
        will-change: transform;

    }
</style>
