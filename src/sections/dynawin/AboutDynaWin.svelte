<script>
    import { TextBlock, InfoBar, Button, ContentDialog } from "fluent-svelte";
    import "fluent-svelte/theme.css";

    //variable to control state of ContentDialog
    let open = false;
</script>

<div class="padding-div">
    <InfoBar severity="caution" class="install-infobar" title="Before you install...">
        Please read this notice about some antiviruses preventing DynaWin from functioning normally.
        <Button slot="action" on:click={() => (open = true)}>View Notice</Button>
     </InfoBar>
     
     <ContentDialog class="content-dialog" size="max" bind:open title="NOTICE: Before you install...">
         <p class="content-dialog-first-para">To run on startup, DynaWin creates a batch script in the user's startup folder. However, some antiviruses may flag this as unsafe. If this is the case, please add DynaWin and the batch script, located at 
             <code><strong>%APPDATA%\<wbr/>Microsoft\<wbr/>Windows\<wbr/>Start&nbsp;Menu\<wbr/>Programs\<wbr/>Startup\<wbr/>StartDynaWin.bat</strong></code> to your antivirus's exclusions list. </p>
     
         <p>Some antiviruses and/or firewalls may block DynaWin from accessing the internet, causing the auto-update system to not work. In this case, please add DynaWin to your firewall's or antivrus's exclusion list.</p>
         
         <Button slot="footer" variant="accent" on:click={() => (open = false)}>OK</Button>
     </ContentDialog>
     
     <div class="container">
         <TextBlock variant="titleLarge" class="titleText">About DynaWin</TextBlock>
         <TextBlock variant="bodyLarge" class="bodyText"
             >DynaWin is a utility that allows the Windows desktop to change
             dynamically.</TextBlock>
         <iframe
             src="https://www.youtube-nocookie.com/embed/J0iyzZG5tXc"
             title="YouTube video player"
             frameborder="0"
             allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
             allowfullscreen
         />
     </div>
</div>

<style>
    .padding-div{
        padding: 2em 5vw 2em 5vw;
    }

    :global(.install-infobar){
        max-width: 1024px;
        margin: auto;
        padding: 0.2rem;
    }

    /* Prevent the content dialog from touching the navigation bar by adding a top margin */
    :global(.content-dialog){
        margin-top: 20px;
    }

    .container {
        margin-top: 1em;
        overflow: hidden;
        word-wrap: break-word;
        align-items: center;
        justify-content: center;
        text-align: center;
        overflow: hidden;
    }

    /* force the title to wrap if it is almost touching the edges */
    .container :global(.titleText) {
        margin-left: 5px;
        margin-right: 5px;
    }

    .container :global(.bodyText) {
        display: block;
        text-align: center;
        margin: auto;
        margin-top: 1.5em;
    }

    .container iframe {
        width: 90vw;
        max-width: 840px;
        height: calc(calc(90vw / 16) * 9);
        max-height: 473px;
        margin-top: 1.5em;
    }
</style>
