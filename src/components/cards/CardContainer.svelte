<!-- Component to hold cards -->
<div class="container">
    <div class="row">
        <slot />
    </div>
</div>

<style>
    .container {
        width: 100%;
        margin: 2em auto 0em auto;
    }

    .row {
        display: flex;
        justify-content: space-around;
        flex-flow: wrap;
        gap: 1em;
    }

</style>
