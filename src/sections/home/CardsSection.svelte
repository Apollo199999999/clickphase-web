<script>
    import "fluent-svelte/theme.css";
</script>

<svelte:head>
    <link
        rel="preload"
        href="/FluentSystemIcons-Regular.ttf"
        as="font"
        crossorigin="anonymous"
    />
</svelte:head>

<div class="container">
    <div class="cards-collection">
        <div class="card" onclick="window.location.href = '/software';">
            <div class="card-content">
                <p class="card-default-icon">&#x02A7;</p>
                <p class="card-text">All Software</p>
            </div>
        </div>

        <div
            class="card"
            onclick="window.open('https://www.youtube.com/channel/UCUy3erIflkjOWYsfGPVIM6g', '_blank');"
        >
            <div class="card-content">
                <p class="card-default-icon">&#x0379;</p>
                <p class="card-text">YouTube</p>
            </div>
        </div>

        <div
            class="card"
            onclick="window.location.href = 'mailto:clickphasehelp@gmail.com';"
        >
            <div class="card-content">
                <p class="card-default-icon">&#xF509;</p>
                <p class="card-text">Email</p>
            </div>
        </div>

        <div
            class="card"
            onclick="window.open('https://github.com/Apollo199999999', '_blank');"
        >
            <div class="card-content">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 16 16"
                    width="100"
                    height="100"
                    class="card-github-icon"
                >
                    <path
                        fill-rule="evenodd"
                        d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"
                    />
                </svg>
                <p class="card-text">GitHub</p>
            </div>
        </div>
    </div>
</div>

<style>
    @font-face {
        font-family: "FluentUIIcons";
        src: url("/FluentSystemIcons-Regular.ttf"); /*URL to font*/
    }

    .container {
        margin-top: -10em;
    }

    .cards-collection {
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
        width: 300px;
        height: 350px;
        text-align: center;
        border-radius: var(--fds-control-corner-radius);
        z-index: 2147483646;
        border: red;
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

    .card-default-icon {
        font-family: "FluentUIIcons";
        font-size: 100px;
        color: var(--fds-accent-default);
        margin: 0px;
    }

    .card-github-icon {
        fill: white;
        margin: 0px;
    }

    .card-text {
        font-family: var(--fds-font-family-display);
        font-size: 28px;
        margin: 0px;
        margin-top: 1rem;
    }
</style>
