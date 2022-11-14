<script>
    import { TextBlock } from "fluent-svelte";
    import "fluent-svelte/theme.css";
    import HeaderChip from "/src/components/HeaderChip.svelte";
</script>

<div class="container">
    <HeaderChip>Videos</HeaderChip>
    <TextBlock variant="titleLarge" class="titleText">My animations & videos</TextBlock>
    <TextBlock variant="bodyLarge" class="bodyText">You can find all of my animations and videos on my 3 YouTube channels.</TextBlock>

    <div class="cards-collection">
        <div class="card" onclick="window.open('https://www.youtube.com/channel/UCUy3erIflkjOWYsfGPVIM6g', '_blank');">
            <div class="card-content">
                <img
                    class="card-image"
                    alt="ClickPhase"
                    src="/youtube-profiles/clickphase.png"
                />
                <p class="card-text">ClickPhase</p>
            </div>
        </div>

        <div class="card" onclick="window.open('https://www.youtube.com/channel/UCyx7JU3eigRv4A9HnxRWAIQ', '_blank');">
            <div class="card-content">
                <img
                    class="card-image"
                    alt="Matthias Wang"
                    src="/youtube-profiles/matthias-wang.jpg"
                />
                <p class="card-text">Matthias Wang</p>
            </div>
        </div>

        <div class="card" onclick="window.open('https://www.youtube.com/channel/UCDVwYsVmGsjiWVdWCb_4vIg', '_blank');">
            <div class="card-content">
                <img
                    class="card-image"
                    alt="Granny the Great"
                    src="/youtube-profiles/granny.png"
                />
                <p class="card-text">Granny the Great</p>
            </div>
        </div>
    </div>
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

    .cards-collection {
        /* set negative margin-bottom to account for .card margin-bottom */
        margin: 2em auto -1.5em auto;
        max-width: min(1200px, 85vw);
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
        width: 180px;
        min-width: 200px;
        flex-grow: 1;
        height: 350px;
        text-align: center;
        border-radius: var(--fds-control-corner-radius);
        z-index: 999;
        -webkit-transition: 200ms ease-in-out;
        -o-transition: 200ms ease-in-out;
        transition: 200ms ease-in-out;
        -webkit-box-shadow: 0 0 15px rgba(0, 0, 0, 0.3);
        box-shadow: 0 0 15px rgba(0, 0, 0, 0.3);
        background: linear-gradient(
                var(--fds-card-background-default),
                var(--fds-card-background-default)
            ),
            linear-gradient(
                var(--fds-solid-background-base),
                var(--fds-solid-background-base)
            ); /* first bg is on top of this */
    }

    .card:hover {
        transform: scale(1.035);
        -webkit-box-shadow: 0 0 20px rgba(0, 0, 0, 0.2);
        box-shadow: 0 0 20px rgba(0, 0, 0, 0.2);
    }

    .card-content{
        width: 100%;
    }

    .card-image {
        width: 40%;
        max-width: 260px;
    }

    .card-text {
        font-family: var(--fds-font-family-display);
        font-weight: 600;
        font-size: 28px;
        margin: 0px;
        margin-top: 1rem;
        margin-left: 20px;
        margin-right: 20px;
    }

</style>
