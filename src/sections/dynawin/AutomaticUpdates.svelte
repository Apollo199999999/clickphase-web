<script>
    import { TextBlock } from "fluent-svelte";
    import "fluent-svelte/theme.css";
    import HeaderChip from "/src/components/HeaderChip.svelte";
</script>

<div class="container">
    <HeaderChip>Feature</HeaderChip>

    <TextBlock class="titleText" variant="titleLarge"
        >Automatic Updates</TextBlock
    >
    <TextBlock variant="bodyLarge" class="bodyText">
        DynaWin also automatically notifies you when there is a new update. This
        is to ensure that you have the latest version of DynaWin at all times so
        that you can have the latest features available.
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
</style>
