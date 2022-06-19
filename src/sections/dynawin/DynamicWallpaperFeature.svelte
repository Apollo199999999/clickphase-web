<script>
    import { TextBlock } from "fluent-svelte";
    import "fluent-svelte/theme.css";
    import HeaderChip from "/src/components/HeaderChip.svelte"
</script>

<div class="container">
    <HeaderChip>Feature</HeaderChip>
    <TextBlock class="titleText" variant="titleLarge">Dynamic Wallpaper</TextBlock>
    <TextBlock variant="bodyLarge" class="bodyText">
        DynaWin is a utility that allows the Windows desktop to change dynamically.
    </TextBlock>
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
    }

</style>