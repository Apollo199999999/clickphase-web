<script>
    import { TextBlock } from "fluent-svelte";
    import "fluent-svelte/theme.css";
    import HeaderChip from "/src/components/HeaderChip.svelte";
</script>

<div class="container">
    <HeaderChip>Software</HeaderChip>
    
    <TextBlock variant="titleLarge">All Software</TextBlock>

    <div class="cards-collection">
        <div class="card" onclick="window.location.href = '/launcherx';">
            <div class="card-content">
                <picture>
                    <source
                        srcset="/app-images/launcherx/LauncherXImageDark.png"
                        media="(prefers-color-scheme: dark)"
                    />
                    <img
                        class="card-image"
                        alt="LauncherX"
                        src="/app-images/launcherx/LauncherXImageLight.png"
                    />
                </picture>
                <p class="card-text">LauncherX</p>
                <p class="card-subtext">Modern app launcher for Windows</p>
            </div>
        </div>

        <div class="card" onclick="window.location.href = '/p5js-paint-app';">
            <div class="card-content">
                <img
                    class="card-image"
                    alt="p5.js Paint App"
                    src="/app-images/p5js-paint-app/p5jsPaintAppImage.png"
                />
                <p class="card-text">p5.js Paint App</p>
                <p class="card-subtext">
                    A lightweight, online, and minimal paint app made in p5.js
                </p>
            </div>
        </div>

        <div class="card" onclick="window.location.href = '/dynawin';">
            <div class="card-content">
                <picture>
                    <source
                        srcset="/app-images/dynawin/DynaWinImageDark.png"
                        media="(prefers-color-scheme: dark)"
                    />
                    <img
                        class="card-image"
                        alt="DynaWin"
                        src="/app-images/dynawin/DynaWinImageLight.png"
                    />
                <p class="card-text">DynaWin</p>
                <p class="card-subtext">
                    Dynamic Desktop for Windows 10 and Windows 11
                </p>
            </div>
        </div>

        <div class="card" onclick="window.location.href = '/granny-keyboard';">
            <div class="card-content">
                <img
                    class="card-image"
                    alt="Granny Keyboard"
                    src="/app-images/granny-keyboard/GrannyKeyboardImage.png"
                />
                <p class="card-text">Granny Keyboard</p>
                <p class="card-subtext">
                    Your keys will start worshipping Granny
                </p>
            </div>
        </div>
    </div>
</div>

<style>
    .container {
        margin-top: 1em;
        padding: 2em 5vw 2em 5vw;
        overflow: hidden;
        word-wrap: break-word;
        align-items: center;
        justify-content: center;
        text-align: center;
        overflow: hidden;
    }

    .cards-collection {
        /* set negative margin-bottom to account for .card margin-bottom */
        margin: 2em auto -1.5em auto;
        max-width: min(1200px, 85vw);
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -ms-flex-wrap: wrap;
        flex-wrap: wrap;
        -webkit-box-pack: center;
        -ms-flex-pack: center;
        justify-content: center;
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center;
        -webkit-box-orient: horizontal;
        -webkit-box-direction: normal;
        -ms-flex-direction: row;
        flex-direction: row;
    }

    .card {
        display: flex;
        justify-content: center;
        align-items: center;
        margin: 0em 0.7em 1.5em 0.7em;
        width: 180px;
        min-width: 200px;
        flex-grow: 1;
        height: 350px;
        text-align: center;
        border-radius: var(--fds-control-corner-radius);
        z-index: 999;
        -webkit-transition: 200ms ease-in-out;
        -o-transition: 200ms ease-in-out;
        transition: 200ms ease-in-out;
        -webkit-box-shadow: 0 0 15px rgba(0, 0, 0, 0.3);
        box-shadow: 0 0 15px rgba(0, 0, 0, 0.3);
        background: linear-gradient(
                var(--fds-card-background-default),
                var(--fds-card-background-default)
            ),
            linear-gradient(
                var(--fds-solid-background-base),
                var(--fds-solid-background-base)
            ); /* first bg is on top of this */
    }

    .card:hover {
        transform: scale(1.035);
        -webkit-box-shadow: 0 0 20px rgba(0, 0, 0, 0.2);
        box-shadow: 0 0 20px rgba(0, 0, 0, 0.2);
    }

    .card-content {
        width: 100%;
    }

    .card-image {
        width: 80%;
        max-width: 260px;
    }

    .card-text {
        font-family: var(--fds-font-family-display);
        font-weight: 600;
        font-size: 28px;
        margin: 0px;
        margin-top: 1.5rem;
        margin-left: 10px;
        margin-right: 10px;
    }

    .card-subtext {
        font-family: var(--fds-font-family-display);
        font-size: 18px;
        margin: 0px;
        margin-top: 1rem;
        margin-left: 20px;
        margin-right: 20px;
    }
</style>
