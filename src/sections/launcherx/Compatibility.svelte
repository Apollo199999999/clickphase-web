<script>
    import { TextBlock } from "fluent-svelte";
    import "fluent-svelte/theme.css";
    import HeaderChip from "/src/components/HeaderChip.svelte";
</script>

<div class="container">
    <HeaderChip>System</HeaderChip>

    <TextBlock class="titleText" variant="titleLarge">Compatibility</TextBlock>
    <TextBlock variant="bodyLarge" class="bodyText">
        LauncherX is compatible with Windows 7, 8.1, 10 and 11, although it has
        not been tested extensively with Windows 7 and 8.1. Therefore, use
        LauncherX with these Windows versions at your own risk.
    </TextBlock>
</div>

<style>
    .container {
        padding: 3em 5vw 72px 5vw;
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
