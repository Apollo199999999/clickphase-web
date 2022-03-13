<script>
    import { TextBlock } from "fluent-svelte";
	import "fluent-svelte/theme.css";
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
		transform: scale(1.0);	
        margin-top: 4em;
		margin-bottom: 4em;
		background-color: yellowgreen;
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