<script>
  import { InfoBar, Button, ContentDialog } from "fluent-svelte";
  import "fluent-svelte/theme.css";
  import CardContainer from "../../components/cards/CardContainer.svelte";
  import Card from "../../components/cards/Card.svelte";
  import PageSection from "../../components/PageSection.svelte";
  import Dialog from "../../components/Dialog.svelte";

  //Variable to open notice dialog
  let dialogOpen = false;
</script>

<PageSection isTopSection={true}>
  <InfoBar
    severity="caution"
    class="install-infobar"
    title="Before you install...">
    Please read this notice about some antiviruses preventing DynaWin from
    functioning normally.
    <Button slot="action" on:click={() => (dialogOpen = true)}>View Notice</Button>
  </InfoBar>

  <Dialog dialogTitle="NOTICE: Before you install..." isOpen={dialogOpen}>
    <div slot="content-slot" class="notice-content">
      <p>
        To run on startup, DynaWin creates a batch script in the user's startup
        folder. However, some antiviruses may flag this as unsafe. If this is the
        case, please add DynaWin and the batch script, located at
        <code
          ><strong
            >%APPDATA%\<wbr />Microsoft\<wbr />Windows\<wbr />Start&nbsp;Menu\<wbr />Programs\<wbr />Startup\<wbr />StartDynaWin.bat</strong
          ></code> to your antivirus's exclusions list.
      </p>
  
      <p>
        Some antiviruses and/or firewalls may block DynaWin from accessing the
        internet, causing the auto-update system to not work. In this case, please
        add DynaWin to your firewall's or antivrus's exclusion list.
      </p>
    </div>

    <Button class="dialog-btn" slot="footer-slot" variant="accent" on:click={() => {dialogOpen = false}}>OK</Button>
  </Dialog>
  
  <picture>
    <source
      srcset="/app-images/dynawin/logoDark.png"
      media="(prefers-color-scheme: dark)" />
    <img class="logo" alt="DynaWin" src="/app-images/dynawin/logoLight.png" />
  </picture>

  <h2>Dynamic Desktop for Windows 10 and Windows 11.</h2>

  <CardContainer>
    <Card
      headerText="About"
      subtitleText="DynaWin is a utility that allows the Windows desktop to change dynamically.">
      <iframe
        src="https://www.youtube-nocookie.com/embed/J0iyzZG5tXc"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen />
    </Card>

    <Card
      headerText="Compatibility"
      subtitleText="DynaWin works with Windows 10 and Windows 11, and requires .NET Framework 4.8 to function properly.">
      <picture>
        <source
          srcset="/screenshots/dynawin/WindowDark.png"
          media="(prefers-color-scheme: dark)" />
        <img
          class="compat-img"
          alt="DynaWin Window"
          src="/screenshots/dynawin/WindowLight.png" />
      </picture>
    </Card>
  </CardContainer>
</PageSection>

<style>
  :global(.install-infobar) {
    max-width: 1024px;
    margin: 0em auto 2em auto;
    text-align: left;
  }

  .notice-content {
    font-size: 15px;
  }

  .logo {
    width: 100%;
    max-width: 450px;
  }

  iframe {
    width: 100%;
    height: unset;
    aspect-ratio: 16 / 9;
  }

  .compat-img {
    width: 90%;
    height: unset;
    aspect-ratio: 928 / 606;
  }
</style>
