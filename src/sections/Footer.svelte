<script>
    import "fluent-svelte/theme.css";
    import { TextBlock, Button } from "fluent-svelte";
</script>

<div class="container">
    <div class="cards-collection">
        <div class="card card-left">
            <div class="card-content-left">
                <div class="logo">
                    <a sveltekit:prefetch href="/">
                        <img src="/logo-img.png" alt="ClickPhase" />
                        <TextBlock variant="titleLarge">ClickPhase</TextBlock>
                    </a>
                </div>
                <p class="card-subtext">
                    Hi! I am Matthias from ClickPhase, the only person here.
                    ClickPhase specialises in desktop software and utilities. I
                    make software and animations during my free time, and I hope
                    you enjoy them :)
                </p>
            </div>
        </div>

        <div class="card">
            <div class="card-content-right">
                <div>
                    <p class="card-text">Pages</p>
                    <div class="hyperlink-group">
                        <Button
                            class="hyperlink"
                            onclick="window.location.href = '/';"
                            variant="hyperlink">Home</Button
                        >
                        <Button
                            class="hyperlink"
                            onclick="window.location.href = '/software';"
                            variant="hyperlink">Software</Button
                        >
                        <Button
                            class="hyperlink"
                            onclick="window.location.href = '/animationsvideos';"
                            variant="hyperlink">Animations & Videos</Button
                        >
                        <Button
                            class="hyperlink"
                            onclick="window.location.href = '/aboutcontact';"
                            variant="hyperlink">About & Contact</Button
                        >
                    </div>
                </div>

                <div class="external-links">
                    <p class="card-text">Useful Links</p>
                    <div class="hyperlink-group">
                        <Button
                            class="hyperlink"
                            onclick="window.open('https://github.com/Apollo199999999/clickphase-web', '_blank', 'noopener');"
                            variant="hyperlink">Website GitHub repository</Button
                        >
                        <Button
                            class="hyperlink"
                            onclick="window.open('https://github.com/Apollo199999999/clickphase-web/issues', '_blank', 'noopener');"
                            variant="hyperlink">Report a bug</Button
                        >
                        <Button
                            class="hyperlink"
                            onclick="window.open('https://github.com/Apollo199999999/clickphase-web/issues', '_blank', 'noopener');"
                            variant="hyperlink">Suggest improvements</Button
                        >
                    </div>
                </div>
            </div>
        </div>

        <div class="card copyright">
            <div class="copyright-text">
                <p>Copyright &copy; 2020-present ClickPhase</p>
            </div>
        </div>
    </div>
</div>

<style>
    .container {
        border-top: 1px solid var(--fds-control-stroke-default);
        background-color: var(--fds-solid-background-tertiary);
        padding: 2em 5vw 0em 5vw;
        text-align: center;
    }

    .cards-collection {
        /* set negative margin-bottom to account for .card margin-bottom */
        margin: 0em auto -1.5em auto;
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
        margin: 0em 0.5em 1.5em 0.5em;
        padding: 0.5em;
        width: 180px;
        min-width: 30vw;
        flex-grow: 1;
        text-align: center;
        z-index: 999;
    }

    .card-content-left {
        width: 100%;
        text-align: left;
    }

    .card-content-right {
        width: 100%;
        text-align: right;
    }

    .hyperlink-group {
        margin-right: -11px;
    }

    @media (max-width: 498px) {
        .card-content-right {
            width: 100%;
            text-align: left;
        }

        .hyperlink-group {
            margin-left: -11px;
        }
    }

    .card-left {
        margin-right: 2em;
    }

    .logo {
        margin-left: -7px;
        display: inline-block;
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
		width: 3.6em;
		height: 3.6em;
		object-fit: contain;
		margin-right: 0.7em;
	}

    .card-text {
        font-family: var(--fds-font-family-display);
        font-weight: 600;
        font-size: 28px;
        margin: 0px;
    }

    .card-subtext {
        font-family: var(--fds-font-family-display);
        font-size: 18px;
        margin: 0px;
        margin-top: 1rem;
    }

    .external-links {
        margin-top: 2em;
    }

    :global(.hyperlink) {
        margin-top: 1em;
        margin-bottom: -0.5em;
        margin-left: 0px;
    }

    .copyright {
        align-items: center;
        width: 100vw;
        padding: 0em;
        margin: 0em -5vw;
        background: var(--fds-layer-background-alt);
        margin-bottom: 0em;
    }

    .copyright-text {
        margin: auto;
    }

</style>
