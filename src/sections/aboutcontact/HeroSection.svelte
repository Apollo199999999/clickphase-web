<script>
    import MicaBackground from "/src/sections/MicaBackground.svelte";
    import "fluent-svelte/theme.css";
    import { TextBlock } from "fluent-svelte";

    //variable for the scrollY of the page
    let sy;
</script>

<!-- this binds `sy` to the current value of `window.scrollY` -->
<svelte:window bind:scrollY={sy} />

<div class="container">
    <MicaBackground />
    <div class="text-div">
        <TextBlock class="titleText" style="transform: translate(0,{-sy * 0.15}px)" variant="display">About & Contact</TextBlock>
    </div>
</div>

<style>
    .container {
        position: relative;
        word-wrap: break-word;
        align-items: center;
        justify-content: center;
        text-align: center;
    }

    .text-div {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
    }

    .text-div :global(.titleText){
        line-height: normal;
        font-size: min(7vmax, 68px);
    }

</style>
