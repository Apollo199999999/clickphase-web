<!-- Container element -->
<div class="parallax">
    <div class="image" />
</div>

<!--TODO: IMPLEMENT PARALLAX SCROLLING-->
<style>
    .parallax {
        overflow: hidden;
        height: 35em;
    }

    .image {
        background: url("/MicaLight.png");
        width: 100%;
        height: 100%;
        transform: scale(1.7);
        filter: saturate(120%);
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
    }

    @media (prefers-color-scheme: dark) {
        .image {
            background: url("/MicaDark.png");
            width: 100%;
            height: 100%;
            transform: scale(1.7);
            filter: saturate(120%);
            background-position: center;
            background-repeat: no-repeat;
            background-size: cover;
        }
    }
    .image:before {
        content: "";
        position: absolute;
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
        background: var(--fds-card-background-secondary);
    }
</style>
