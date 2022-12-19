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
        LauncherX download links and other links.
    </TextBlock>

    <div class="cards-collection">
        <div class="card">
            <div class="card-content">
                <p class="card-text">Download LauncherX</p>
                <p class="card-subtext">
                    Click the button below to download LauncherX:
                </p>
                <Button
                    onclick="window.open('https://github.com/Apollo199999999/LauncherX/releases', '_blank', 'noopener');"
                    variant="accent"
                    class="download-btn"
                    >Download LauncherX
                </Button>
            </div>
        </div>

        <div class="card">
            <div class="card-content">
                <p class="card-text">LauncherX links</p>
                <Button
                    class="hyperlinks"
                    onclick="window.open('https://github.com/Apollo199999999/LauncherX', '_blank', 'noopener');"
                    variant="hyperlink">LauncherX's source code</Button
                >
                <Button
                    class="hyperlinks"
                    onclick="window.open('https://github.com/Apollo199999999/LauncherX/issues', '_blank', 'noopener');"
                    variant="hyperlink">Report a bug</Button
                >
                <Button
                    class="hyperlinks"
                    onclick="window.open('https://github.com/Apollo199999999/LauncherX/issues', '_blank', 'noopener');"
                    variant="hyperlink">Request a feature</Button
                >
                <Button
                    class="hyperlinks"
                    onclick="window.open('https://github.com/Apollo199999999/LauncherX/blob/master/LICENSE.txt', '_blank', 'noopener');"
                    variant="hyperlink">LauncherX's MIT License</Button
                >
                <Button
                    class="hyperlinks"
                    onclick="window.open('https://github.com/Apollo199999999/LauncherX/blob/master/NOTICE.txt', '_blank', 'noopener');"
                    variant="hyperlink">Third party notices and licenses</Button
                >
                <Button
                    class="hyperlinks"
                    onclick="window.open('https://github.com/Apollo199999999/LauncherX/blob/master/PRIVACYPOLICY.md', '_blank', 'noopener');"
                    variant="hyperlink">LauncherX's privacy policy</Button
                >
            </div>
        </div>
    </div>
</div>

<style>
    .container {
        padding: 3em 5vw 4.5em 5vw;
        background-color: var(--fds-solid-background-base);
        overflow: hidden;
        word-wrap: break-word;
        align-items: center;
        justify-content: center;
        text-align: center;
        overflow: hidden;
    }

    /* force the title to wrap if it is almost touching the edges */
    .container :global(.titleText) {
        display: block;
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
        max-width: 90vw;
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -ms-flex-wrap: wrap;
        flex-wrap: wrap;
        -webkit-box-pack: center;
        -ms-flex-pack: center;
        justify-content: center;
        -webkit-box-align: stretch;
        -ms-flex-align: stretch;
        align-items: stretch;
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
        padding: 2em 1em 2em 1em;
        width: 180px;
        min-width: 200px;
        flex-grow: 1;
        text-align: center;
        border-radius: var(--fds-control-corner-radius);
        z-index: 999;
        -webkit-transition: 200ms ease-in-out;
        -o-transition: 200ms ease-in-out;
        transition: 200ms ease-in-out;
        -webkit-box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
        background: linear-gradient(
                var(--fds-card-background-default),
                var(--fds-card-background-default)
            ),
            linear-gradient(
                var(--fds-solid-background-base),
                var(--fds-solid-background-base)
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
        font-size: 16px;
    }

    :global(.hyperlinks) {
        margin-top: 1em;
        margin-bottom: -0.5em;
        margin-left: 10px;
        margin-right: 10px;
    }
</style>
