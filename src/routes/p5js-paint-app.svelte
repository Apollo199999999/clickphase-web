<script>
	import "fluent-svelte/theme.css";
	import HeroSection from "/src/sections/p5js-paint-app/HeroSection.svelte"
    import P5jsFrameSection from "/src/sections/p5js-paint-app/p5jsFrameSection.svelte";
</script>

<svelte:head>
	<title>p5.js Paint App - ClickPhase</title>
</svelte:head>

<HeroSection/>
<div class="content">
    <P5jsFrameSection/>
</div>

<style>
	.content {
		padding: 2em 5vw 2em 5vw;
	}
</style>
