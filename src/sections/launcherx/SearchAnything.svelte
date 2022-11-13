<script>
    import { TextBlock, InfoBar } from "fluent-svelte";
    import HeaderChip from "/src/components/HeaderChip.svelte";
    import "fluent-svelte/theme.css";
</script>

<div class="container">
    <HeaderChip>Feature</HeaderChip>

    <TextBlock variant="titleLarge" class="titleText"
        >Search Anything</TextBlock
    >

    <TextBlock variant="bodyLarge" class="bodyText"
        >Search through your items in LauncherX with ease and convenience.</TextBlock
    >

    <video autoplay loop muted disablePictureInPicture>
        <source
            src="/screenshots/launcherx/SearchAnything.mp4"
            type="video/mp4"
        />
        Your browser does not support the video tag.
    </video>
</div>

<style>
    .container {
        padding: 1em 10px 1em 10px;
        height: 550px;
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

    .container video {
        width: 100%;
        height: calc(calc(100% / 16) * 9);
        margin-top: 1.5em;
    }
</style>
