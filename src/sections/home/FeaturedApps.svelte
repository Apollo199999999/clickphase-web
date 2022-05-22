<script>
    import { TextBlock } from "fluent-svelte";
    import "fluent-svelte/theme.css";
</script>

<div class="container">
    <TextBlock variant="titleLarge">Featured Apps</TextBlock>

    <div class="cards-collection">
        <div class="card" onclick="window.location.href = '/dynawin';">
            <div class="card-content">
                <img
                    class="card-image"
                    alt="DynaWin"
                    src="/app-images/dynawin/DynaWinImage.jpg"
                />
                <p class="card-text">DynaWin</p>
            </div>
        </div>

        <div class="card" onclick="window.location.href = '/launcherx';">
            <div class="card-content">
                <img
                    class="card-image"
                    alt="LauncherX"
                    src="/app-images/launcherx/LauncherXImage.png"
                />
                <p class="card-text">LauncherX</p>
            </div>
        </div>
    </div>
</div>

<style>
    .container {
        word-wrap: break-word;
        align-items: center;
        justify-content: center;
        text-align: center;
        margin-top: -3em;
        padding: 4em;
    }

    .cards-collection {
        margin-top: 1.5em;
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
        min-width: 280px;
        flex-grow: 1;
        height: 300px;
        text-align: center;
        border-radius: var(--fds-control-corner-radius);
        z-index: 2147483646;
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

    .card-image {
        width: 260px;
    }

    .card-text {
        font-family: var(--fds-font-family-display);
        font-size: 28px;
        margin: 0px;
        margin-top: 1.5rem;
    }
</style>
