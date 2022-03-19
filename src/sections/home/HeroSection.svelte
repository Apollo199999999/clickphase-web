<script>
    import RainbowBackground from "/src/sections/RainbowBackground.svelte";
    import "fluent-svelte/theme.css";
    import { TextBlock, Button } from "fluent-svelte";
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

            <TextBlock class="subText" variant="subtitle"
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
        max-height: 35em;
    }

    .rightPane{
        max-height: 35em;
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
        object-fit: contain;
        max-width: 85%;
        max-height: 90%;
        width: auto;
        height: auto;
        opacity: 0.8;
    }

    .leftPaneElements :global(.learnMoreBtn) {
        margin-top: 2em;
        display: block;
    }

    @media only screen and (max-width: 1000px) {
        .container {
            position: absolute;
            margin: auto;
            width: 100%;
            height: 115vw;
            display: grid;
            grid-template-columns: 1fr;
            grid-template-rows: 1fr 1fr;
        }

        .leftPane {
            margin-top: 10vw;
            margin-bottom: 10vw;
            position: relative;
            text-align: center;
            display: flex;
            justify-content: center;
            align-items: center;
        }

        .leftPaneElements {
            text-align: center;
            margin: 2em;
            position: absolute;
        }

        .leftPaneElements picture img {
            display: block;
            margin: 0 auto;
            margin-bottom: 5vw;
            height: 15vw;
        }

        .leftPaneElements :global(.subText){
            font-size: 3vw;
            line-height: normal;
        }

        .leftPaneElements :global(.learnMoreBtn) {
            margin: 0 auto;
            margin-top: 3vw;
            margin-bottom: 3vw;
            font-size: 2vw;
            padding: 0%;
            line-height: normal;
            width: 15vw;
            height: 5vw;
        }

        .rightPane{
            margin-top: 5vw;
        }
        
        .rightPane picture img {
            position: relative;
            margin-right: 5em;
            text-align: center;
            height: auto;
            width: 90vw;
            margin: auto;
            opacity: 0.8;
        }
    }
</style>
