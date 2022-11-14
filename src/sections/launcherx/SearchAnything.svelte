<script>
    import { TextBlock, InfoBar } from "fluent-svelte";
    import HeaderChip from "/src/components/HeaderChip.svelte";
    import "fluent-svelte/theme.css";
</script>

<div class="container">
    <div class="top">
        <HeaderChip>Feature</HeaderChip>

        <TextBlock variant="titleLarge" class="titleText"
            >Search Anything</TextBlock
        >

        <TextBlock variant="bodyLarge" class="bodyText"
            >Using LauncherX's search function, you can easily and conveniently
            find and access any file, folder, or website that you have added to
            LauncherX, saving time and energy.</TextBlock
        >
    </div>

    <div class="bottom">
        <video autoplay loop muted disablePictureInPicture class="video-player">
            <source
                src="/screenshots/launcherx/SearchAnything.mp4"
                type="video/mp4"
            />
            Your browser does not support the video tag.
        </video>
    </div>
</div>

<style>
    .container {
        height: 100%;
        display: flex;
        flex-flow: column;
        word-wrap: break-word;
        justify-content: center;
        text-align: center;
        overflow: hidden;
    }

    /* force the title to wrap if it is almost touching the edges */
    .top :global(.titleText) {
        display: block;
        margin-left: 5px;
        margin-right: 5px;
    }

    .top :global(.bodyText) {
        display: block;
        text-align: center;
        margin-top: 1.5em;
        max-width: 95%;
    }

    .bottom {
        flex-grow: 1;
        position: relative;
        min-width: 100%;
        margin-top: 1.5em;
    }

    .video-player {
        float: top;
        height: 100%;
        width: 100%;
    }
</style>
