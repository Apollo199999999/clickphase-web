<script>
    import { TextBlock } from "fluent-svelte";
	import "fluent-svelte/theme.css";
</script>

<div class="container">
	<!-- logo section  -->
    <TextBlock class="text" variant="titleLarge">Logo</TextBlock>

    <div class="logo">
		<a href="{void(0)}">
			<img src="/src/header/logo-img.png" alt="ClickPhase" />
			<TextBlock variant="display">ClickPhase</TextBlock>
		</a>
	</div>

	<!-- about section -->
	<TextBlock class="text" variant="titleLarge">About ClickPhase</TextBlock>
</div>

<style>
    .container{
        width: 100%;
    }

    .logo {
        margin-top: 2em;
		margin-bottom: 4em;
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