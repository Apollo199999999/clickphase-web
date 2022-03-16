<script>
    import RainbowBackground from "/src/sections/RainbowBackground.svelte"
	import "fluent-svelte/theme.css";
	import { TextBlock } from "fluent-svelte";
</script>

<div class="container">
    <RainbowBackground/>
    <TextBlock class="titleText" variant="display">Animations & Videos</TextBlock>
</div>

<style>
    .container{
        position: relative;
        word-wrap: break-word;
        align-items: center;
		justify-content: center;
        text-align: center;
    }

    .container :global(.titleText) {
        position:absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        text-align: center;
  }
</style>
