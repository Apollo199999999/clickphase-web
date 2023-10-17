<!-- Component to hold cards -->
<div class="container">
    <div class="row">
        <slot />
    </div>
</div>

<style>
    .container {
        width: 90%;
        margin: 4em auto;
    }

    .row {
        display: flex;
        justify-content: space-around;
        flex-flow: wrap;
    }

    /* Media queries */
    @media screen and (max-width: 620px) {
        .container {
            width: 100%;
        }
    }
</style>
