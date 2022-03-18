<script lang="ts">
    import RainbowBackground from "/src/sections/RainbowBackground.svelte";
    import "fluent-svelte/theme.css";
    import { TextBlock, Button } from "fluent-svelte";
    import { onMount } from "svelte";

    onMount(() => {
        //TODO: CHANGE SCREENSHOT SCALE
    });
</script>

<RainbowBackground />
<div class="container">
    <div class="leftPane">
        <div class="leftPaneElements">
            <picture>
                <source
                    media="(prefers-color-scheme: dark)"
                    srcset="/app-logos/dynawin/logoDark.png"
                />
                <source
                    media="(prefers-color-scheme: light)"
                    srcset="/app-logos/dynawin/logoLight.png"
                />
                <img
                    alt="DynaWin window screenshot"
                    src="/app-logos/dynawin/logoLight.png"
                />
            </picture>

            <TextBlock variant="subtitle"
                >Dynamic Desktop for Windows 10 and Windows 11</TextBlock
            >

            <Button class="learnMoreBtn" variant="accent">Learn More</Button>
        </div>
    </div>

    <div class="rightPane">
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
                class="screenshot"
                alt="DynaWin window screenshot"
                src="/screenshots/dynawin/WindowLight.png"
            />
        </picture>
    </div>
</div>

<style>
    .container {
        position: absolute;
        margin: auto;
        width: 100%;
        height: 35em;
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-template-rows: 1fr;
    }

    .leftPane {
        position: relative;
    }

    .leftPaneElements {
        text-align: left;
        position: absolute;
        top: 50%;
        transform: translate(0, -50%);
        margin-left: 4em;
    }

    .leftPaneElements picture img {
        display: block;
        margin-bottom: 1em;
        height: 102px;
    }

    .rightPane picture img {
        position: relative;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        margin-right: 5em;
        text-align: center;
        height: 30em;
        opacity: 0.8;
    }

    .leftPaneElements :global(.learnMoreBtn) {
        transform: scale(1.1);
        margin-left: calc(0.1 * 4em);
        margin-top: 2em;
        display: block;
    }

    @media only screen and (max-width: 1000px) {
        .container {
            position: absolute;
            margin: auto;
            width: 100%;
            height: 47em;
            display: grid;
            grid-template-columns: 1fr;
            grid-template-rows: 1fr 1fr;
        }

        .leftPane {
            position: relative;
            text-align: center;
            display: flex;
            justify-content: center;
            align-items: center;
        }

        .leftPaneElements {
            text-align: center;
            margin: auto;
            position: absolute;
        }

        .leftPaneElements picture img {
            display: block;
            margin: 0 auto;
            margin-top: 2em;
            margin-bottom: 2em;
            height: 92px;
        }

        .leftPaneElements :global(.learnMoreBtn) {
            transform: scale(1.1);
            margin: 0 auto;
            margin-top: 2em;
            display: block;
        }

        .rightPane picture img {
            position: relative;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            margin: 0 auto;
            text-align: center;
            height: 25em;
            opacity: 0.8;
        }
    }
</style>
