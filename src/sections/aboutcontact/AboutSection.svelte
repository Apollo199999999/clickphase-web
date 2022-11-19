<script>
    import { TextBlock, Button } from "fluent-svelte";
    import "fluent-svelte/theme.css";
    import HeaderChip from "/src/components/HeaderChip.svelte";
    import { onMount } from "svelte";

    onMount(() => {
        //function to change the scale of the logo div
        function changeLogoScale() {
            //scale logo
            let logo = document.querySelector(".logo");
            let width = logo.clientWidth;
            let scale = width / 550;
            logo.style.transform = "scale(" + scale + ")";
        }

        //change the logo scale everytime the window resizes
        changeLogoScale();
        window.addEventListener("resize", changeLogoScale);
    });
</script>

<div class="container">
    <HeaderChip>About</HeaderChip>

    <TextBlock class="titleText" variant="titleLarge"
        >About ClickPhase</TextBlock
    >
    <TextBlock variant="bodyLarge" class="bodyText">
        Information about ClickPhase.
    </TextBlock>

    <div class="logo">
        <a href={void 0}>
            <img src="/logo-img.png" alt="ClickPhase" />
            <TextBlock variant="display">ClickPhase</TextBlock>
        </a>
    </div>

    <div class="cards-collection">
        <div class="card">
            <div class="card-content">
                <p class="card-text">About Us</p>
                <p class="card-subtext">
                    Hi! I am Matthias from ClickPhase, the only person here.
                    ClickPhase specialises in desktop software and utilities. I
                    make software and animations during my free time, and I hope
                    you enjoy them :)
                </p>
            </div>
        </div>

        <div class="card">
            <div class="card-content">
                <p class="card-text">Useful Links</p>
                <div class="hyperlink-group">
                    <Button
                        class="hyperlinks"
                        onclick="window.open('https://github.com/Apollo199999999/clickphase-web', '_blank', 'noopener');"
                        variant="hyperlink">Website GitHub repo</Button
                    >
                    <Button
                        class="hyperlinks"
                        onclick="window.open('https://github.com/Apollo199999999/clickphase-web/issues', '_blank', 'noopener');"
                        variant="hyperlink">Report a bug</Button
                    >
                    <Button
                        class="hyperlinks"
                        onclick="window.open('https://github.com/Apollo199999999/clickphase-web/issues', '_blank', 'noopener');"
                        variant="hyperlink">Suggest improvements</Button
                    >
                    <Button
                        class="hyperlinks"
                        onclick="window.open('https://clickphase-old.vercel.app', '_blank', 'noopener');"
                        variant="hyperlink">Archived version of ClickPhase's old Weebly site</Button
                    >
                </div>
            </div>
        </div>
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
    }

    .logo {
        max-width: 500px;
        margin-top: min(3vw, 2.5em);
        margin-left: auto;
        margin-right: auto;
    }

    .logo a {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100%;
        height: 100%;
        text-decoration: none;
        color: inherit;
    }

    .logo img {
        width: 6em;
        height: 6em;
        object-fit: contain;
        margin-right: 1.2em;
    }

    .cards-collection {
        /* set negative margin-bottom to account for .card margin-bottom */
        margin: min(3vw, 2.5em) auto -1.5em auto;
        max-width: 90vw;
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -ms-flex-wrap: wrap;
        flex-wrap: wrap;
        -webkit-box-pack: center;
        -ms-flex-pack: center;
        justify-content: center;
        -webkit-box-align: stretch;
        -ms-flex-align: stretch;
        align-items: stretch;
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
        padding: 2em 1em 2em 1em;
        width: 180px;
        min-width: 200px;
        flex-grow: 1;
        text-align: center;
        border-radius: var(--fds-control-corner-radius);
        z-index: 999;
        -webkit-transition: 200ms ease-in-out;
        -o-transition: 200ms ease-in-out;
        transition: 200ms ease-in-out;
        -webkit-box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
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
        margin-left: 10px;
        margin-right: 10px;
    }

    :global(.hyperlinks) {
        margin-top: 1em;
        margin-bottom: -0.5em;
        margin-left: 10px;
        margin-right: 10px;
    }
</style>
