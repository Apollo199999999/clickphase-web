<script>
	import "fluent-svelte/theme.css";
	import HeroSection from "/src/sections/animationsvideos/HeroSection.svelte";
	import VideoChannels from "/src/sections/animationsvideos/VideoChannels.svelte";
</script>

<svelte:head>
	<title>ClickPhase - Animations & Videos</title>
</svelte:head>

<HeroSection/>
<div class="content">
	<VideoChannels/>
</div>

<style>
	.content {
		padding: 2em;
	}
</style>
