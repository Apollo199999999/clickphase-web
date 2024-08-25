<script>
  import { Button } from "fluent-svelte";
  import CardContainer from "../../components/cards/CardContainer.svelte";
  import InvertedCard from "../../components/cards/InvertedCard.svelte";
  import PageSection from "../../components/PageSection.svelte";
  import "fluent-svelte/theme.css";
</script>

<PageSection isTopSection={true}>
  <h1>About ClickPhase</h1>
  <h2>Information about ClickPhase.</h2>

  <CardContainer>
    <InvertedCard headerText="About Me">
      <p class="card-subtitle">
        Hi! I am Matthias. On this website, you will find all of the software,
        projects, and videos I have made over time.
      </p>

      <p class="card-subtitle">
        In general, software published under the &quot;ClickPhase&quot name were
        made as part of personal projects, intended to be used or consumed by
        the public. On the other hand, software created for school projects are
        published under my real name (and my friends' name, if the project was a
        collaborative effort).
      </p>

      <p class="card-subtitle">
        As for videos/animations, videos related to software published under the
        &quot;ClickPhase&quot name are uploaded to the &quot;ClickPhase&quot
        YouTube channel. Videos related to the &quot;Granny&quot line of joke
        software (a school joke that got out of hand), are uploaded to the
        &quot;Granny&quot YouTube channel. All my other videos can be found in
        my own personal YouTube channel. Head to the "Animations/Videos" for
        links to all 3 channels.
      </p>
    </InvertedCard>

    <InvertedCard headerText="Brief History">
      <p class="card-subtitle">
        When I was 12, I created the name &quot;ClickPhase&quot; at the same
        time I made LauncherX, with the intention of publishing future pieces of
        software under a &quot;brand name&quot; that could be used on platforms
        such as Steam.
      </p>

      <p class="card-subtitle">
        Over time, I published more pieces of software under the
        &quot;ClickPhase&quot; identity, such as DynaWin and
        RedditVideoGenerator. However, as I started to build more software for
        school projects, I felt that I should have one website to showcase
        everything that I have made.
      </p>

      <p class="card-subtitle">
        In the end, I decided to use this website to showcase all of my
        works, even if they aren't published under the &quot;ClickPhase&quot;
        name.
      </p>
    </InvertedCard>

    <InvertedCard headerText="Useful Links">
      <p class="hyperlink-group">
        <Button
          class="hyperlinks"
          onclick="window.open('https://github.com/Apollo199999999/clickphase-web', '_blank', 'noopener');"
          variant="hyperlink">GitHub repository</Button>
        <Button
          class="hyperlinks"
          onclick="window.open('https://github.com/Apollo199999999/clickphase-web/issues', '_blank', 'noopener');"
          variant="hyperlink">Report a bug</Button>
        <Button
          class="hyperlinks"
          onclick="window.open('https://github.com/Apollo199999999/clickphase-web/issues', '_blank', 'noopener');"
          variant="hyperlink">Suggest improvements</Button>
        <Button
          class="hyperlinks"
          onclick="window.open('https://matthiaswang.notion.site/Matthias-2023-2024-CEP-Portfolios-801e388175af4586aeca11ee1019b1b4?pvs=4', '_blank', 'noopener');"
          variant="hyperlink"
          >My Notion page, documenting all of the software projects I made for
          the Computer Elective Programme (a class I took in school)</Button>
        <Button
          class="hyperlinks"
          onclick="window.open('https://clickphase-old.vercel.app', '_blank', 'noopener');"
          variant="hyperlink">Archive of old Weebly website</Button>
        <Button
          class="hyperlinks"
          onclick="window.open('https://github.com/Apollo199999999/clickphase-web/blob/main/PRIVACYPOLICY.md', '_blank', 'noopener');"
          variant="hyperlink">Privacy policy for this website</Button>
      </p>
    </InvertedCard>
  </CardContainer>
</PageSection>

<style>
  /* To put more text in the card */
  .card-subtitle {
    font-weight: 400;
    font-size: 18px;
  }
</style>
