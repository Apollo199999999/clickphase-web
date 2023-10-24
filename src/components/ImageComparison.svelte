<script>
  //Component props
  export let srcRight = "";
  export let altRight = "";
  export let srcLeft = "";
  export let altLeft = "";

  //JavaScript to change slider
  let img2;
  function sliderInput(element) {
    //Get value of slider input
    let value = (100 - element.value).toString() + "%";
    //Adjust clip path as necessary
    img2.style.clipPath = "inset(0px" + " " + value + " " + "0px 0 round 0px)";
  }
</script>

<div class="image-container">
  <img
    src={srcRight}
    class="img1"
    alt={altRight} />
  <img
    src={srcLeft}
    class="img2"
    bind:this={img2}
    alt={altLeft} />
  <input
    type="range"
    min="0"
    max="100"
    value="50"
    on:input={(event) => sliderInput(event.target)} />
</div>

<style>
  .image-container {
    position: relative;
    width: 100%;
    margin: 0 auto;
  }

  img {
    width: 100%;
  }

  .img1 {
    position: relative;
    z-index: 1;
  }
  .img2 {
    position: absolute;
    top: 0;
    left: 0;
    z-index: 2;
    clip-path: inset(0px 50% 0px 0 round 0px);
  }

  /* Input styles adapted from https://github.com/BrianMitchL/svelte-compare-image/blob/main/src/lib/CompareImage.svelte */
  input[type="range"] {
    /*
     * current styles are a little wonky on Firefox, but fixing there breaks Safari/Chromium
     * the issue is only really noticeable with large --handle-border-width
     * fix for Firefox:
     * calc(var(--handle-size, 2.5rem) + (var(--handle-border-width, 0.125rem) * 2))
     */
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 3;
    cursor: col-resize;
    margin: 0 calc(0.1rem / -2);
    width: calc(100% + 2.5rem);
    padding: 0;
    border-radius: 0;
    appearance: none;
    -webkit-appearance: none;
    background: none;
    border: none;
  }

  input[type="range"]::-moz-range-thumb {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgba(0, 0, 0, 0.6);
    background-image: url('data:image/svg+xml;utf8,<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M3 12H21M3 12L7 8M3 12L7 16M21 12L17 16M21 12L17 8" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>');
    background-size: 80%;
    background-position: center center;
    background-repeat: no-repeat;
    border: 0.125rem solid #ffffff;
    border-radius: 100%;
    box-shadow: 0 3px 1px -2px rgba(0, 0, 0, 0.2),
      0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12);
    color: #ffffff;
    width: 2.5rem;
    height: 2.5rem;
  }

  input[type="range"]::-webkit-slider-thumb {
    -webkit-appearance: none;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgba(0, 0, 0, 0.6);
    background-image: url('data:image/svg+xml;utf8,<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M3 12H21M3 12L7 8M3 12L7 16M21 12L17 16M21 12L17 8" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>');
    background-size: 80%;
    background-position: center center;
    background-repeat: no-repeat;
    border: 0.125rem solid #ffffff;
    border-radius: 100%;
    box-shadow: 0 3px 1px -2px rgba(0, 0, 0, 0.2),
      0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12);
    color: #ffffff;
    width: 2.5rem;
    height: 2.5rem;
  }
</style>
