<script lang="ts">
    import MicaBackground from "/src/sections/MicaBackground.svelte";
    import "fluent-svelte/theme.css";
    import { TextBlock, Button } from "fluent-svelte";
    import { onMount } from "svelte";

    onMount(() => {
        //function to change the scale of the logo div
        function changeLogoScale() {
            let logo = <HTMLElement>document.querySelector(".logo");
            let screenW = window.innerWidth;
            let scale = screenW / 550;
            
            //only scale according to display width if scale >= 1.2 (otherwise logo gets too big)
            if (scale >= 1.2) {
                logo.style.transform = "translate(-50%, -50%) scale(1.2)";
            } else {
                logo.style.transform =
                    "translate(-50%, -50%) scale(" + scale + ")";
            }
        }

        //change the logo scale everytime the window resizes
        changeLogoScale();
        window.addEventListener("resize", changeLogoScale);
    });
</script>

<div class="container">
    <MicaBackground />
    <div class="logo">
        <a href={void 0}>
            <img src="/logo-img.png" alt="ClickPhase" />
            <TextBlock variant="display">ClickPhase</TextBlock>
        </a>
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

    .logo {
        background-color: aqua;
        position: absolute;
        padding: 0%;
        margin-right: 0%;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        text-align: center;
    }

    .logo a {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100%;
        height: 100%;
        text-decoration: none;
        color: inherit;
    }

    .logo img {
        width: 6em;
        height: 6em;
        object-fit: contain;
        margin-right: 1.2em;
    }
</style>
