<script>
    import { onMount } from "svelte";
    import "fluent-svelte/theme.css";
    import { TextBlock, Button } from "fluent-svelte";

    onMount(() => {
        window.location.replace("https://github.com/Apollo199999999/RedditVideoGenerator/blob/main/PRIVACYPOLICY.md");
    });
</script>

<!-- Container element -->
<div class="container">
    <div class="mica-bg">
        <div class="image" />
    </div>
    <div class="components">
        <div class="error-status">
            <TextBlock variant="display">Redirecting you...</TextBlock>
        </div>
        <div class="error-message">
            <TextBlock variant="bodyLarge">Redirecting you to RedditVideoGenerator's privacy policy...</TextBlock>
        </div>
    </div>
</div>

<style>
    .container {
        position: relative;
        word-wrap: break-word;
        align-items: center;
        justify-content: center;
        text-align: center;
    }

    .components {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        text-align: center;
    }

    .error-status {
        line-height: normal;
    }

    .error-message {
        margin-top: 1rem;
        line-height: normal;
    }

    .mica-bg {
        position: relative;
        width: 100%;
        height: calc(100vh - 4em);
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