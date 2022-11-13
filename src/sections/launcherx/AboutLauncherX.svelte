<script>
    import { TextBlock, InfoBar } from "fluent-svelte";
    import HeaderChip from "/src/components/HeaderChip.svelte";
    import "fluent-svelte/theme.css";
</script>

<div class="padding-div">
    <InfoBar severity="caution" class="attention-infobar" title="Attention">
        This page is still under construction. For now, please head to <a
            class="links"
            target="_blank"
            rel="noopener noreferrer"
            href="https://clickphase.weebly.com/launcherx.html"
        >
            https://clickphase.weebly.com/launcherx.html
        </a>
        for information about LauncherX.
    </InfoBar>

    <div class="container">
        <HeaderChip>About</HeaderChip>

        <TextBlock variant="titleLarge" class="titleText"
            >About LauncherX</TextBlock
        >

        <TextBlock variant="bodyLarge" class="bodyText"
            >LauncherX is a Windows Program used to conveniently access all of
            your most-used files, folders, websites.</TextBlock
        >

        <iframe
            src="https://www.youtube-nocookie.com/embed/8qYBaD5-O0c"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
        />
    </div>
</div>

<style>
    .padding-div {
        padding: 2em 5vw 2em 5vw;
        background-color: var(--fds-solid-background-base);
    }

    :global(.attention-infobar) {
        max-width: 1060px;
        margin: auto;
        padding: 0.2em;
    }

    .links {
        color: var(--fds-accent-text-primary);
        text-align: center;
        /* These are technically the same, but use both */
        overflow-wrap: break-word;
        word-wrap: break-word;

        -ms-word-break: break-all;
        /* This is the dangerous one in WebKit, as it breaks things wherever */
        word-break: break-all;
        /* Instead use this non-standard one: */
        word-break: break-word;

        /* Adds a hyphen where the word breaks, if supported (No Blink) */
        -ms-hyphens: auto;
        -moz-hyphens: auto;
        -webkit-hyphens: auto;
        hyphens: auto;
    }

    .container {
        /* padding: 2em 5vw 2em 5vw; */
        background-color: var(--fds-solid-background-base);
        margin-top: 1em;
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
        max-width: 1100px;
    }

    .container iframe {
        width: 90vw;
        max-width: 840px;
        height: calc(calc(90vw / 16) * 9);
        max-height: 473px;
        margin-top: 1.5em;
    }
</style>
