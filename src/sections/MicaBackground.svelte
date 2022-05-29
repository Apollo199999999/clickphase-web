<!-- Container element -->
<div class="container">
    <div class="image" />
</div>

<style>
    .container {
        width: 100%;
        height: 72vh;
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
