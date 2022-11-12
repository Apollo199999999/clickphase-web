<script>
    import { TextBlock } from "fluent-svelte";
    import "fluent-svelte/theme.css";
    import HeaderChip from "/src/components/HeaderChip.svelte";
    import { CompareImage } from "svelte-compare-image";
</script>

<div class="container">
    <HeaderChip>Feature</HeaderChip>

    <TextBlock class="titleText" variant="titleLarge">Dynamic Theme</TextBlock>
    <TextBlock variant="bodyLarge" class="bodyText">
        Switch your Windows theme or app theme based on time.
    </TextBlock>

    <div class="cards-collection">
        <div class="card">
            <div class="card-content">
                <p class="card-text">Automatic switching of theme</p>
                <p class="card-subtext">
                    You can configure DynaWin to automatically switch the theme
                    at specified timings. For example, you can automatically
                    switch Windows to Dark theme, so that it is easier on the
                    eyes at night.
                </p>
            </div>
        </div>

        <div class="card">
            <div class="card-content">
                <p class="card-text">Choose which mode to switch</p>
                <p class="card-subtext">
                    You can configure DynaWin to switch only the app or system
                    theme, or both. This allows DynaWin to better cater to your
                    needs.
                </p>
            </div>
        </div>
    </div>

    <div class="compare-image-div">
        <CompareImage
            class="image-comparer"
            imageLeftSrc="/screenshots/dynawin/DynamicThemeLight.png"
            imageLeftAlt="Light Theme"
            imageRightSrc="/screenshots/dynawin/DynamicThemeDark.png"
            imageRightAlt="Dark Theme"
            --handle-size="2.5rem"
            --slider-color="#ffffff"
            --slider-width="0.125rem"
        />
    </div>
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

    .cards-collection {
        /* set negative margin-bottom to account for .card margin-bottom */
        margin: 2em auto -1.5em auto;
        max-width: 85vw;
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -ms-flex-wrap: wrap;
        flex-wrap: wrap;
        -webkit-box-pack: center;
        -ms-flex-pack: center;
        justify-content: center;
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center;
        -webkit-box-orient: horizontal;
        -webkit-box-direction: normal;
        -ms-flex-direction: row;
        flex-direction: row;
    }

    .card {
        display: flex;
        justify-content: center;
        align-items: center;
        margin: 0em 0.7em 1.5em 0.7em;
        padding: 1.5rem 0.2rem;
        width: 280px;
        min-width: 200px;
        flex-grow: 1;
        min-height: 180px;
        text-align: center;
        border-radius: var(--fds-control-corner-radius);
        z-index: 999;
        -webkit-transition: 200ms ease-in-out;
        -o-transition: 200ms ease-in-out;
        transition: 200ms ease-in-out;
        -webkit-box-shadow: 0 0 5px rgba(0, 0, 0, 0.3);
        box-shadow: 0 0 5px rgba(0, 0, 0, 0.3);
        background: linear-gradient(
                var(--fds-card-background-default),
                var(--fds-card-background-default)
            ),
            linear-gradient(
                var(--fds-solid-background-base),
                var(--fds-solid-background-base)
            ); /* first bg is on top of this */
    }

    .card-content {
        width: 100%;
    }

    .card-text {
        font-family: var(--fds-font-family-display);
        font-weight: 600;
        font-size: 28px;
        margin: 0px;
        margin-left: 10px;
        margin-right: 10px;
    }

    .card-subtext {
        font-family: var(--fds-font-family-display);
        font-size: 18px;
        margin: 0px;
        margin-top: 1rem;
        margin-left: 20px;
        margin-right: 20px;
    }

    .compare-image-div{
        /* resize the CompareImage container using padding */
        padding: 2em 5vw 0vw 5vw;
    }
    
</style>
