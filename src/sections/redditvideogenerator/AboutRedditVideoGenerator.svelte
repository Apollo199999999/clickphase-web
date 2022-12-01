<script>
    import { TextBlock, InfoBar } from "fluent-svelte";
    import HeaderChip from "/src/components/HeaderChip.svelte";
    import { CompareImage } from "svelte-compare-image";
    import "fluent-svelte/theme.css";
</script>

<div class="container">
    <HeaderChip>About</HeaderChip>

    <TextBlock variant="titleLarge" class="titleText"
        >About RedditVideoGenerator</TextBlock
    >

    <TextBlock variant="bodyLarge" class="bodyText"
        ><p>
            RedditVideoGenerator is a Windows app that generates r/AskReddit
            videos and uploads them to YouTube, with your consent,
            automatically.
        </p>
        <p>
            RedditVideoGenerator is able to fully generate a minimum 15 minute
            Reddit video with background music courtesy of Kevin Macleod, a
            thumbnail image for YouTube, as well as a title and description for
            YouTube, all fully autonomously.
        </p>
        <b>
            <p>
                For more information and details, please head here: <a
                    class="links"
                    href="https://github.com/Apollo199999999/RedditVideoGenerator/blob/main/README.md"
                    >https://github.com/Apollo199999999/RedditVideoGenerator/blob/main/README.md</a
                >
            </p>
        </b>
    </TextBlock>

    <div class="compare-image-div">
        <CompareImage
            class="image-comparer"
            imageLeftSrc="/screenshots/redditvideogenerator/UILight.png"
            imageLeftAlt="Light Theme"
            imageRightSrc="/screenshots/redditvideogenerator/UIDark.png"
            imageRightAlt="Dark Theme"
            --handle-size="2.5rem"
            --slider-color="#ffffff"
            --slider-width="0.125rem"
        />
    </div>
</div>

<style>
    .container {
        padding: 3em 5vw 4.5em 5vw;
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

    .links {
        color: var(--fds-accent-text-primary);
        text-align: center;
        /* These are technically the same, but use both */
        overflow-wrap: break-word;
        word-wrap: break-word;
        -ms-word-break: break-all;
        /* This is the dangerous one in WebKit, as it breaks things wherever */
        word-break: break-all;
        /* Instead use this non-standard one: */
        word-break: break-word;
        /* Adds a hyphen where the word breaks, if supported (No Blink) */
        -ms-hyphens: auto;
        -moz-hyphens: auto;
        -webkit-hyphens: auto;
        hyphens: auto;
        font-size: 18px;
    }

    .compare-image-div {
        /* resize the CompareImage container using padding */
        max-width: min(1100px, 85vw);
        margin: 2em auto 0 auto;
    }
</style>
