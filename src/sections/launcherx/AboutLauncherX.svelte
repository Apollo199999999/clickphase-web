<script>
    import { TextBlock, InfoBar } from "fluent-svelte";
    import HeaderChip from "/src/components/HeaderChip.svelte";
    import "fluent-svelte/theme.css";
</script>

<div class="container">
    <HeaderChip>About</HeaderChip>

    <TextBlock variant="titleLarge" class="titleText">About LauncherX</TextBlock>

    <TextBlock variant="bodyLarge" class="bodyText"
        >LauncherX is a Windows Program used to conveniently access all of your
        most-used files, folders, websites.</TextBlock>

    <iframe
        src="https://www.youtube-nocookie.com/embed/8qYBaD5-O0c"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
    />
</div>

<style>
    .container {
        padding: 3em 5vw 72px 5vw;
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
