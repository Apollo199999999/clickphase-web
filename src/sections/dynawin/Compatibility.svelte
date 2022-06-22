<script>
    import { TextBlock } from "fluent-svelte";
    import "fluent-svelte/theme.css";
    import HeaderChip from "/src/components/HeaderChip.svelte";
</script>

<div class="container">
    <HeaderChip>System</HeaderChip>

    <TextBlock class="titleText" variant="titleLarge">Compatibility</TextBlock>
    <TextBlock variant="bodyLarge" class="bodyText">
        DynaWin works with Windows 10 and Windows 11. I have not tested if
        DynaWin works with Windows 8.1 or Windows 7, so if you are on those
        versions of Windows, use at your own risk. DynaWin also requires .NET
        framework version 4.8 to function properly.
    </TextBlock>
</div>

<style>
    .container {
        padding: 2em 5vw 2em 5vw;
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
