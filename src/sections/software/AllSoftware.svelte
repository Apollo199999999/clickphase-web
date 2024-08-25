<script>
  import "fluent-svelte/theme.css";
  import CardContainer from "../../components/cards/CardContainer.svelte";
  import Card from "../../components/cards/Card.svelte";
  import PageSection from "../../components/PageSection.svelte";
</script>

<PageSection isTopSection={true}>
  <h1>All Software</h1>
  <h2>
    All software projects that I have worked on, sorted by when it was last
    updated (latest to oldest).
  </h2>

  <CardContainer>
    <Card
      headerText="LauncherX"
      subtitleText="Modern app launcher for Windows"
      clickEvent="window.location.href = '/launcherx';">
      <picture>
        <source
          srcset="/app-images/launcherx/LauncherXImageDark.png"
          media="(prefers-color-scheme: dark)" />
        <img
          class="card-image"
          alt="LauncherX"
          src="/app-images/launcherx/LauncherXImageLight.png" />
      </picture>
    </Card>

    <Card
      headerText="Orbit Simulator"
      subtitleText="Simulate the orbits of planets, moons, and stars in space"
      clickEvent="window.location.href = '/orbit-simulator';">
      <img
        class="card-image"
        alt="Orbit Simulator"
        src="/app-images/orbit-simulator/OrbitSimulatorImage.png" />
    </Card>

    <Card
      headerText="Orbit Simulator"
      subtitleText="Simulate the orbits of planets, moons, and stars in space"
      clickEvent="window.location.href = '/orbit-simulator';">
      <img
        class="card-image"
        alt="Orbit Simulator"
        src="/app-images/orbit-simulator/OrbitSimulatorImage.png" />
    </Card>

    <Card
      headerText="Orbit Simulator"
      subtitleText="Simulate the orbits of planets, moons, and stars in space"
      clickEvent="window.location.href = '/orbit-simulator';">
      <img
        class="card-image"
        alt="Orbit Simulator"
        src="/app-images/orbit-simulator/OrbitSimulatorImage.png" />
    </Card>

    <Card
      headerText="Orbit Simulator"
      subtitleText="Simulate the orbits of planets, moons, and stars in space"
      clickEvent="window.location.href = '/orbit-simulator';">
      <img
        class="card-image"
        alt="Orbit Simulator"
        src="/app-images/orbit-simulator/OrbitSimulatorImage.png" />
    </Card>

    <Card
      headerText="Orbit Simulator"
      subtitleText="Simulate the orbits of planets, moons, and stars in space"
      clickEvent="window.location.href = '/orbit-simulator';">
      <img
        class="card-image"
        alt="Orbit Simulator"
        src="/app-images/orbit-simulator/OrbitSimulatorImage.png" />
    </Card>

    <Card
      headerText="p5.js Robot Vacuum Cleaner"
      subtitleText="A robot vacuum cleaner written in p5.js that can clean a room with obstacles within 2 minutes"
      clickEvent="window.location.href = '/p5js-robot-vacuum-cleaner';">
      <img
        class="card-image"
        alt="p5.js Robot Vacuum Cleaner"
        src="/app-images/p5js-robot-vacuum-cleaner/VacuumImage.png" />
    </Card>

    <Card
      headerText="Chat Program"
      subtitleText="A simple chat program that allows you to chat with others online in private rooms, made using Socket.IO"
      clickEvent="window.location.href = '/chat-program';">
      <img
        class="card-image"
        alt="Chat Program"
        src="/app-images/chat-program/ChatProgramImage.png" />
    </Card>

    <Card
      headerText="FlightTracker3D"
      subtitleText="Track the real-time location of any aircraft, all in 3D"
      clickEvent="window.location.href = '/flighttracker3d';">
      <img
        class="card-image"
        alt="FlightTracker3D"
        src="/app-images/flighttracker3d/FlightTracker3DImage.png" />
    </Card>

    <Card
      headerText="GrannyOS"
      subtitleText="The best operating system in the world™"
      clickEvent="window.location.href = '/grannyos';">
      <img
        class="card-image"
        alt="GrannyOS"
        src="/app-images/grannyos/GrannyOSImage.png" />
    </Card>

    <Card
      headerText="Orbit Simulator"
      subtitleText="Simulate the orbits of planets, moons, and stars in space"
      clickEvent="window.location.href = '/orbit-simulator';">
      <img
        class="card-image"
        alt="Orbit Simulator"
        src="/app-images/orbit-simulator/OrbitSimulatorImage.png" />
    </Card>

    <Card
      headerText="Mountain Visualisation"
      subtitleText="A procedual, muted mountain landscape generator created in p5.js"
      clickEvent="window.location.href = '/mountain-visualisation';">
      <img
        class="card-image"
        alt="Mountain Visualisation"
        src="/app-images/mountain-visualisation/VisualisationImage.png" />
    </Card>

    <Card
      headerText="Typeracer"
      subtitleText="A simple typeracing game made for a school project"
      clickEvent="window.location.href = '/typeracer';">
      <picture>
        <source
          srcset="/app-images/typeracer/TyperacerImageDark.png"
          media="(prefers-color-scheme: dark)" />
        <img
          class="card-image"
          alt="Typeracer"
          src="/app-images/typeracer/TyperacerImageLight.png" />
      </picture>
    </Card>

    <Card
      headerText="RedditVideoGenerator"
      subtitleText="Generate r/AskReddit Reddit videos and upload them to YouTube automatically"
      clickEvent="window.location.href = '/redditvideogenerator';">
      <picture>
        <source
          srcset="/app-images/redditvideogenerator/RVGImageDark.png"
          media="(prefers-color-scheme: dark)" />
        <img
          class="card-image"
          alt="RedditVideoGenerator"
          src="/app-images/redditvideogenerator/RVGImageLight.png" />
      </picture>
    </Card>

    <Card
      headerText="Granny Keyboard"
      subtitleText="Your keys will start worshipping Granny"
      clickEvent="window.location.href = '/granny-keyboard';">
      <img
        class="card-image"
        alt="Granny Keyboard"
        src="/app-images/granny-keyboard/GrannyKeyboardImage.png" />
    </Card>

    <Card
      headerText="DynaWin"
      subtitleText="Dynamic Desktop for Windows 10 and Windows 11"
      clickEvent="window.location.href = '/dynawin';">
      <picture>
        <source
          srcset="/app-images/dynawin/DynaWinImageDark.png"
          media="(prefers-color-scheme: dark)" />
        <img
          class="card-image"
          alt="DynaWin"
          src="/app-images/dynawin/DynaWinImageLight.png" />
      </picture>
    </Card>

    <Card
      headerText="p5.js Paint App"
      subtitleText="A lightweight, online, and minimal paint app made in p5.js"
      clickEvent="window.location.href = '/p5js-paint-app';">
      <img
        class="card-image"
        alt="p5.js Paint App"
        src="/app-images/p5js-paint-app/p5jsPaintAppImage.png" />
    </Card>
  </CardContainer>
</PageSection>

<style>
  .card-image {
    width: 100%;
    max-height: 20vh;
    object-fit: contain;
  }
</style>
