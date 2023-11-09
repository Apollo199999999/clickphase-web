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
      headerText="Very™ Gorgeous™ User™ Interface™"
      subtitleText="Featuring a custom Gtk theme, the user interface of GrannyOS is sure to make your eyes water (interpret that however you want).">
      <img alt="GrannyOS Desktop" src="/screenshots/grannyos/GorgeousUI.png" />
    </Card>

    <Card
      headerText="Granny™ Approved™ Icons™"
      subtitleText="GrannyOS comes with a 6th dimension approved icon pack approved by Granny itself, comprising of roughly 7 whole gigabytes of svg and png icons.">
      <img alt="GrannyOS Desktop" src="/screenshots/grannyos/Icons.png" />
    </Card>

    <Card
      headerText="Granny™ Keyboard™"
      subtitleText="GrannyOS comes bundled in with Granny Keyboard with no additional cost, to remind you who's in charge :)">
      <img alt="GrannyOS Desktop" src="/screenshots/grannyos/GrannyKeyboard.png" />
    </Card>
  </CardContainer>
</PageSection>

<style>
  img {
    width: 100%;
    height: unset;
  }
</style>
