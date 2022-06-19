<script>
    import { TextBlock } from "fluent-svelte";
    import "fluent-svelte/theme.css";
</script>

<div class="container">
    <TextBlock variant="titleLarge" class="titleText">About DynaWin</TextBlock>
    <TextBlock variant="bodyLarge" class="bodyText"
        >DynaWin is a utility that allows the Windows desktop to change
        dynamically.</TextBlock
    >
    <iframe
        src="https://www.youtube-nocookie.com/embed/J0iyzZG5tXc"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
    />

</div>

<style>
    .container {
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
        margin-left: 5px;
        margin-right: 5px;
    }

    .container :global(.bodyText) {
        display: block;
        text-align: center;
        margin: auto;
        margin-top: 1.5em;
    }
    
    .container iframe{
        width: 90vw;
        max-width: 1120px;
        height: calc(calc(90vw / 16) * 9);
        max-height: calc(calc(1120px / 16) * 9);
        margin-top: 1.5em;
    }

</style>
