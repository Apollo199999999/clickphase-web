<script>
    import { TextBlock } from "fluent-svelte";
    import "fluent-svelte/theme.css";
    import AccessAnything from "./AccessAnything.svelte";
    import DragAndDropSupport from "./DragAndDropSupport.svelte";
    import SearchAnything from "./SearchAnything.svelte";
    import Customisable from "./Customisable.svelte";
    import AutoUpdate from "./AutoUpdate.svelte";
</script>

<div class="container">
    <div class="cards-collection cards-collection-top">
        <div class="card">
            <div class="card-content">
                <AccessAnything/>
            </div>
        </div>
    </div>
    <div class="cards-collection">
        <div class="card">
            <div class="card-content">
                <DragAndDropSupport/>
            </div>
        </div>

        <div class="card">
            <div class="card-content">
                <SearchAnything/>
            </div>
        </div>

        <div class="card">
            <div class="card-content">
                <Customisable/>
            </div>
        </div>

        <div class="card">
            <div class="card-content">
                <AutoUpdate/>
            </div>
        </div>
    </div>
</div>

<style>
    .container {
        padding: 3em 5vw 3em 5vw;
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

    .cards-collection-top{
        margin-bottom: 0em;
    }

    .card {
        display: flex;
        margin: 0em 0.5em 1.5em 0.5em;
        padding: 2em 1em 1.5em 1em;
        width: 180px;
        min-width: 30vw;
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

</style>
