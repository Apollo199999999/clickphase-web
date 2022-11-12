<script>
    import { TextBlock, Button } from "fluent-svelte";
    import "fluent-svelte/theme.css";
    import HeaderChip from "/src/components/HeaderChip.svelte";
</script>

<div class="container">
    <HeaderChip>Links</HeaderChip>

    <TextBlock class="titleText" variant="titleLarge"
        >Downloads and Links</TextBlock
    >
    <TextBlock variant="bodyLarge" class="bodyText">
        Granny Keyboard downloads and other links.
    </TextBlock>

    <div class="cards-collection">
        <div class="card">
            <div class="card-content">
                <p class="card-text">Download Granny Keyboard</p>
                <p class="card-subtext">
                    Click the button below to download Granny Keyboard:
                </p>
                <Button
                    onclick="window.open('https://github.com/Apollo199999999/Granny-Keyboard/releases', '_blank');"
                    variant="accent"
                    class="download-btn"
                    >Download Granny Keyboard
                </Button>
            </div>
        </div>

        <div class="card">
            <div class="card-content">
                <p class="card-text">Granny Keyboard links</p>
                <Button
                    class="hyperlinks"
                    onclick="window.open('https://github.com/Apollo199999999/Granny-Keyboard', '_blank');"
                    variant="hyperlink">Granny Keyboard source code</Button
                >
                <Button
                    class="hyperlinks"
                    onclick="window.open('https://github.com/Apollo199999999/Granny-Keyboard/issues', '_blank');"
                    variant="hyperlink">Report a bug</Button
                >
                <Button
                    class="hyperlinks"
                    onclick="window.open('https://github.com/Apollo199999999/Granny-Keyboard/issues', '_blank');"
                    variant="hyperlink">Request a feature</Button
                >
            </div>
        </div>
    </div>
</div>

<style>
    .container {
        padding: 2em 5vw 2em 5vw;
        background-color: var(--fds-solid-background-secondary);
        overflow: hidden;
        word-wrap: break-word;
        align-items: center;
        justify-content: center;
        text-align: center;
        overflow: hidden;
    }

    /* force the title to wrap if it is almost touching the edges */
    .container :global(.titleText) {
        margin-left: 5px;
        margin-right: 5px;
    }

    .container :global(.bodyText) {
        display: block;
        text-align: center;
        margin: auto;
        margin-top: 1.5em;
    }

    .cards-collection {
        /* set negative margin-bottom to account for .card margin-bottom */
        margin: 2em auto -1.5em auto;
       max-width: min(1250px, 85vw);;
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
        padding: 1.5rem 0.2rem;
        width: 180px;
        min-width: 200px;
        flex-grow: 1;
        min-height: 145px;
        text-align: center;
        border-radius: var(--fds-control-corner-radius);
        z-index: 999;
        -webkit-transition: 200ms ease-in-out;
        -o-transition: 200ms ease-in-out;
        transition: 200ms ease-in-out;
        -webkit-box-shadow: 0 0 5px rgba(0, 0, 0, 0.3);
        box-shadow: 0 0 5px rgba(0, 0, 0, 0.3);
        background: linear-gradient(
                var(--fds-card-background-default),
                var(--fds-card-background-default)
            ),
            linear-gradient(
                var(--fds-solid-background-secondary),
                var(--fds-solid-background-secondary)
            ); /* first bg is on top of this */
    }

    .card-content {
        width: 100%;
    }

    .card-text {
        font-family: var(--fds-font-family-display);
        font-weight: 600;
        font-size: 28px;
        margin: 0px;
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

    :global(.download-btn) {
        margin-top: calc(1.5em / 1.1);
        transform: scale(1.1);
    }

    :global(.hyperlinks) {
        margin-top: 1em;
        margin-bottom: -0.5em;
        margin-left: 10px;
        margin-right: 10px;
    }
</style>
