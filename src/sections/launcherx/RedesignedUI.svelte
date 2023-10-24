<script>
  import "fluent-svelte/theme.css";
  import CardContainer from "../../components/cards/CardContainer.svelte";
  import Card from "../../components/cards/Card.svelte";
  import ImageComparison from "../../components/ImageComparison.svelte";
  import PageSection from "../../components/PageSection.svelte"
</script>

<PageSection>
  <h1>Redesigned user interface</h1>
  <h2>
    LauncherX v2 features a redesigned user interface compared to LauncherX v1.
  </h2>

  <CardContainer>
    <Card
      headerText="Light and Dark mode"
      subtitleText="LauncherX follows the Windows app color theme and supports both light and dark mode.">
      <ImageComparison
        srcLeft="/screenshots/launcherx/LauncherXDesktopLight.png"
        altLeft="Light Theme"
        srcRight="/screenshots/launcherx/LauncherXDesktopDark.png"
        altRight="Dark Theme" />
    </Card>

    <Card
      headerText="Fluent Design"
      subtitleText="LauncherX's design is now more in line with the design language of Windows 11, with new control styles and materials.">
      <ImageComparison
        srcLeft="/screenshots/launcherx/RedesignUI0.png"
        altLeft="LauncherX v1"
        srcRight="/screenshots/launcherx/RedesignUI1.png"
        altRight="LauncherX v2" />
    </Card>
  </CardContainer>
</PageSection>