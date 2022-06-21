<script>
    import { TextBlock } from "fluent-svelte";
    import "fluent-svelte/theme.css";
    import HeaderChip from "/src/components/HeaderChip.svelte";
    import { CompareImage } from "svelte-compare-image";
</script>

<div class="container">
    <HeaderChip>Feature</HeaderChip>

    <TextBlock class="titleText" variant="titleLarge"
        >Dynamic Wallpaper</TextBlock
    >
    <TextBlock variant="bodyLarge" class="bodyText">
        Switch your desktop wallpaper at certain triggers
    </TextBlock>

    <div class="cards-collection">
        <div class="card">
            <div class="card-content">
                <p class="card-text">
                    Automatic switching of desktop wallpaper
                </p>
                <p class="card-subtext">
                    You can configure DynaWin to automatically switch your
                    wallpaper at specific triggers. For example, you can
                    configure DynaWin to switch your wallpaper at night, to make
                    it easier on the eyes at night.
                </p>
            </div>
        </div>

        <div class="card">
            <div class="card-content">
                <p class="card-text">Choose when to change your wallpaper</p>
                <p class="card-subtext">
                    You can choose to change your wallpaper either based on the
                    time, or based on your battery percentage, to remind you
                    when your battery is running low, or remind you to unplug
                    your laptop charger when it is fully charged.
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
        margin-top: 1.5em;
        /* set negative margin-bottom to account for .card margin-bottom */
        margin-bottom: -1.5em;
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

    .compare-image-div {
        /* resize the CompareImage container using padding */
        padding: 1.5em 5vw 0vw 5vw;
    }
</style>
