<script context="module">
	import { browser, dev } from '$app/env';
	import { TextBlock, Button, Checkbox } from "fluent-svelte";
</script>

<svelte:head>
	<title>About</title>
</svelte:head>

<div class="mask">
	<div class="rainbow-background">	
	
	</div>
</div>


<style lang="scss">
	/*TODO: IMPLEMENT IMAGE MASK*/
	.mask{
 		 mask: url("/ui/hero-mask.png");
  		mask-repeat: no-repeat;    
	}
	@keyframes rainbow-background-hue-rotate {
			0% {
				filter: none;
			}
			50% {
				filter: hue-rotate(180deg);
			}
			to {
				filter: none;
			}
		}
	.rainbow-background {
    	background: 800% 800% /* pos */
			linear-gradient(
							to bottom right,
							hsl(133, 67%, 59%),
							hsl(172, 100%, 42%),
							hsl(202, 97%, 45%),
							var(--fds-solid-background-base)
			);
			animation: rainbow-background-hue-rotate 15s infinite linear,
			scroll-gradient 15s infinite linear;
		height: 400px;
	}
</style>
