<script lang="ts" >
    import { TextBlock } from "fluent-svelte";
	import "fluent-svelte/theme.css";
	import { onMount } from 'svelte';

	onMount(() => {

		//function to change the scale of the logo div
		function changeLogoScale(){
			//scale logo
			let logo = (<HTMLElement>document.querySelector(".logo"));
	   		let width = logo.clientWidth;
	   		let scale = width/450;
	  		logo.style.transform = "scale(" + scale + ")";
		}

		//change the logo scale everytime the window resizes
		window.addEventListener("resize", changeLogoScale);
		changeLogoScale();
    });
</script>

<div class="container">
    <TextBlock class="text" variant="titleLarge">About ClickPhase</TextBlock>

    <div class="logo">
		<a href="{void(0)}">
			<img src="/logo-img.png" alt="ClickPhase" />
			<TextBlock variant="display">ClickPhase</TextBlock>
		</a>
	</div>

</div>

<style>
    .container{
        width: 100%;
		word-wrap: break-word;
        align-items: center;
		justify-content: center;
		text-align: center;
    }

	/* TODO: set logo scale */
    .logo {
		max-width: 450px;
        margin-top: 4em;
		margin-bottom: 4em;
		margin-left: auto;
		margin-right: auto;
	}

	.logo a {
		display: flex;
		align-items: center;
		justify-content: center;
		width: 100%;
		height: 100%;
		text-decoration: none;
		color: inherit;
		margin-right: 3em;
	}


	.logo img {
		width: 6em;
		height: 6em;
		object-fit: contain;
		margin-right: 1.2em;
	}
</style>