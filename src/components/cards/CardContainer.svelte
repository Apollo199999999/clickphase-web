<!-- Component to hold cards -->
<div class="container">
    <div class="row">
        <slot />
    </div>
</div>

<style>
    .container {
        width: 90%;
        margin: 2em auto;
    }

    .row {
        display: flex;
        justify-content: space-around;
        flex-flow: wrap;
        gap: 1em;
    }

</style>
