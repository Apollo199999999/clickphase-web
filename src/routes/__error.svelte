<script context="module">
    export function load({ error, status }) {
        return {
            props: {
                message: error.message,
                status, // same as status: status
            },
        };
    }
</script>

<script>
    import "fluent-svelte/theme.css";
    import { TextBlock, Button } from "fluent-svelte";
    export let message;
    export let status;
</script>

<!-- Container element -->
<div class="container">
    <div class="mica-bg">
        <div class="image" />
    </div>
    <div class="components">
        <div class="error-status">
            <TextBlock variant="display">Error {status}</TextBlock>
        </div>
        <div class="error-message">
            <TextBlock variant="bodyLarge">Error message: {message}</TextBlock>
        </div>
        <div class="error-button">
            <Button href="/">Return to homepage</Button>
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

    .error-button {
        transform: scale(1.1);
        margin-top: calc(1.5rem * 1.1);
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
