<script>
    import { TextBlock, InfoBar } from "fluent-svelte";
    import HeaderChip from "/src/components/HeaderChip.svelte";
    import "fluent-svelte/theme.css";
</script>

<div class="container">
    <HeaderChip>Feature</HeaderChip>

    <TextBlock variant="titleLarge" class="titleText"
        >Launch and access anything</TextBlock
    >

    <TextBlock variant="bodyLarge" class="bodyText"
        >You can add your most-used files, folders, websites to LauncherX to
        conveniently access all of them from one place.</TextBlock
    >

    <video width="320" height="240" autoplay loop muted disablePictureInPicture>
        <source
            src="/screenshots/launcherx/LaunchAccessAnything.mp4"
            type="video/mp4"
        />
        Your browser does not support the video tag.
    </video>
</div>

<style>
    .container {
        padding: 2em 5vw 2em 5vw;
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

    .container video {
        width: 90vw;
        max-width: 840px;
        height: calc(calc(90vw / 16) * 9);
        max-height: 473px;
        margin-top: 1.5em;
    }
</style>
