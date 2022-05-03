<!-- Container element -->
<div class="parallax">
    <div class="image" />
</div>

<!--TODO: IMPLEMENT PARALLAX SCROLLING-->
<style>
    .parallax {
        position: relative;
        width: 100%;
        height: 35em;
        overflow: hidden;
    }

    .image {
        background-image: url("/MicaLight.png");
        width: 100%;
        height: 100%;
        filter: saturate(120%);
        transform: scale(1.7);
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
        background-attachment: fixed;
    }

    @media (prefers-color-scheme: dark) {
        .image {
            background-image: url("/MicaDark.png");
            width: 100%;
            height: 100%;
            filter: saturate(120%);
            transform: scale(1.7);
            background-position: center;
            background-repeat: no-repeat;
            background-size: cover;
            background-attachment: fixed;
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
