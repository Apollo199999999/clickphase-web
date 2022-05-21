<div class="container">
    <div class="cards-collection">
        <div class="card" />
        <div class="card" />
        <div class="card" />
        <div class="card" />
    </div>
</div>

<style>
    .container {
        width: 100%;
        height: 500px;
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
        margin: 10px;
        margin-top: -10em;
        width: 300px;
        height: 400px;
        text-align: center;
        border-radius: 3px;
        z-index: 2147483646;
        -webkit-transition: 200ms ease-in-out;
        -o-transition: 200ms ease-in-out;
        transition: 200ms ease-in-out;
        -webkit-box-shadow: 0 0 15px var(--fds-card-shadow);
        box-shadow: 0 0 15px var(--fds-card-shadow);
        background: linear-gradient(var(--fds-card-background-default), var(--fds-card-background-default)),
                linear-gradient(var(--fds-solid-background-base), var(--fds-solid-background-base)); /* first bg is on top of this */
    }

    .card:hover {
        transform: scale(1.05);
    }
</style>
