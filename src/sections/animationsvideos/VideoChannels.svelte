<script>
    import { TextBlock } from "fluent-svelte";
    import "fluent-svelte/theme.css";
</script>

<div class="container">
    <TextBlock variant="titleLarge">My animations & videos</TextBlock>
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

    .cards-collection {
        margin-top: 2em;
        padding-left: 0.7em;
        padding-right: 0.7em;
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
        margin: 0.7rem;
        width: 280px;
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
