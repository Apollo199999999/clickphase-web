<script>
    import { TextBlock } from "fluent-svelte";
    import "fluent-svelte/theme.css";
</script>

<div class="container">
    <TextBlock variant="titleLarge">p5.js Paint App</TextBlock>
    <TextBlock variant="bodyLarge" class="bodyText">
        A lightweight, online, and minimal paint app developed in p5.js by me.
    </TextBlock>

    <div class="paint-app-frame">
        <iframe title="p5.js Paint App" width = 900 height = 642 src="https://editor.p5js.org/Apollo199999999/embed/X0Y6tSIjJ"></iframe>
    </div>

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

    .container :global(.bodyText) {
        display: block;
        text-align: center;
        margin: auto;
        margin-top: 1.5em;
    }

    .paint-app-frame {
        overflow-x: scroll;
        margin-top: 1.5em;
    }

</style>
