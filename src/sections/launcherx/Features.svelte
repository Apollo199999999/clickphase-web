<script>
  import "fluent-svelte/theme.css";
  import CardContainer from "../../components/cards/CardContainer.svelte";
  import Card from "../../components/cards/Card.svelte";
  import PageSection from "../../components/PageSection.svelte";
</script>

<PageSection>
  <h1>Features</h1>

  <CardContainer>
    <Card
      headerText="Launch and Access anything"
      subtitleText="You can add your most-used files, folders, websites to LauncherX to conveniently access all of them from one place.">
      <video autoplay loop muted disablePictureInPicture class="video-player">
        <source
          src="/screenshots/launcherx/LaunchAccessAnything.mp4"
          type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </Card>

    <Card
      headerText="Group your items together"
      subtitleText="You can now create groups in LauncherX, to categorise your files, folders, and websites.">
      <video autoplay loop muted disablePictureInPicture class="video-player">
        <source
          src="/screenshots/launcherx/Groups.mp4"
          type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </Card>


    <Card
      headerText="Drag and Drop support"
      subtitleText="LauncherX now supports dragging and dropping files and folders from File Explorer, as well as websites, directly into the window. LauncherX also supports the ability to reorder your items.">
      <video autoplay loop muted disablePictureInPicture class="video-player">
        <source src="/screenshots/launcherx/DragAndDrop.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </Card>
  </CardContainer>

  <CardContainer>
    <Card
    headerText="Search anything"
    subtitleText="Using LauncherX's search function, you can easily and conveniently find and access any file, folder, or website that you have added to LauncherX, saving time and energy.">
    <video autoplay loop muted disablePictureInPicture class="video-player">
      <source
        src="/screenshots/launcherx/SearchAnything.mp4"
        type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  </Card>

    <Card
      headerText="Customisable"
      subtitleText="LauncherX adapts to your desktop wallpaper and accent color, making LauncherX feel consistent with your desktop. LauncherX also allows you to modify the icon size and header text to your liking.">
      <video autoplay loop muted disablePictureInPicture class="video-player">
        <source
          src="/screenshots/launcherx/Customisable.mp4"
          type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </Card>

    <Card
      headerText="Automatic Updates"
      subtitleText="LauncherX automatically notifies you when there is a new update to ensure that you receive the latest features. You can also manually check for updates using the redesigned settings window.">
      <video autoplay loop muted disablePictureInPicture class="video-player">
        <source src="/screenshots/launcherx/Update.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </Card>
  </CardContainer>
</PageSection>

<style>
  .video-player {
    width: 100%;
  }
</style>
