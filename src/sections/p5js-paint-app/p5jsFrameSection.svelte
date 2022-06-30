<script>
    import { TextBlock, Button } from "fluent-svelte";
    import "fluent-svelte/theme.css";
    import Fullscreen from "svelte-fullscreen";
</script>

<div class="container">
    <TextBlock variant="titleLarge">p5.js Paint App</TextBlock>
    <TextBlock variant="bodyLarge" class="bodyText">
        A lightweight, online, and minimal paint app developed in p5.js by me.
        (Works best on desktop, does not work well on mobile)
    </TextBlock>

    <Fullscreen let:onToggle>
        <div class="paint-app-frame">
            <div>
                <div class="fullscreen-btn-div">
                    <Button
                        class="fullscreen-btn"
                        variant="accent"
                        on:click={() => onToggle()}>Toggle Fullscreen</Button
                    >
                </div>
                <div class="frame-div">
                    <iframe
                        title="p5.js Paint App"
                        width="900"
                        height="642"
                        src="https://editor.p5js.org/Apollo199999999/embed/X0Y6tSIjJ"
                    />
                </div>
            </div>
        </div>
    </Fullscreen>
</div>

<style>
    .container {
        margin-top: 1em;
        padding: 2em 5vw 2em 5vw;
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
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: var(--fds-solid-background-base);
    }

    .frame-div{
        overflow-x: scroll;
        width: 90vw;
        height: 100%;
    }

    .paint-app-frame :global(.fullscreen-btn) {
        margin: 1em;
    }
</style>
