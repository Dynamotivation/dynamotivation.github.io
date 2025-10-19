+++
title = "O.S.S.: Space Adventure"
date = 2018-02-25

[extra]
logo = "https://ucarecdn.com/f324ab78-ab77-419c-8725-8af4d571bd02/OSSSpaceAdventure.webp"
available_on_android = true
available_on_windows = false
available_on_mac = false
available_on_linux = false
available_on_ios = false

# SEO
operatingSystem = "Android"
applicationCategory = "MobileApplication"
releaseNotes = "Delisted from Google Play"
programmingLanguage = "GML (GameMaker Language)"
developmentEnvironment = "GameMaker Studio 1.4"
license = "Closed Source (Source Code Preserved)"
+++

{% infobox(title="O.S.S.: Space Adventure") %}
{{ image(
    path="https://ucarecdn.com/f324ab78-ab77-419c-8725-8af4d571bd02/OSSSpaceAdventure.webp",
    width="100%",
    imageWidthPx=512,
    imageHeightPx=512,
    description="O.S.S.: Space Adventure Logo",
    rendering="pixelated",
    radius="20%"
) }}
<dl>
    <dt>Availability</dt>
    <dd>Delisted<br>Formerly on Google Play</dd>
    <dt>Initial completion</dt>
    <dd>February 25, 2018</dd>
    <dt>Development environment</dt>
    <dd>GameMaker Studio 1.4</dd>
    <dt>Written in</dt>
    <dd>GML (GameMaker Language)</dd>
    <dt>Operating system(s)</dt>
    <dd>Android</dd>
    <dt>Source code</dt>
    <dd>Preserved<br>Closed Source</dd>
</dl>
{% end %}

***O.S.S.: Space Adventure*** was an arcady space shooter mobile game developed by Dynamotivation and published by Mr. Unp3rf3ct. Conceived as a personal technical demonstration, the project marked a pivotal point in the choice of programming languages, shifting focus from Java-based Android applications to cross platform game development using GameMaker Studio 1.4 and its GameMaker Language (GML). The acronym "O.S.S." stood for "Ordinary Space Shooter".

{{ big_heading(name="Development") }}

---

Development for *O.S.S.: Space Adventure* began around February 2018 at age 15. The primary motivation was a desired shift in the tech stack. Following experience with Java for Android applications, the goal was to transition to a GameMaker as a more lenient and portable platform for game development, specifically GameMaker Studio 1.4 utilizing GameMaker Language (GML).

Hence the project's core purpose was to serve as a proof-of-concept. The focus was on learning the GameMaker Studio tool stack and creating applications with adaptive resolutions, and to eventually develop multiplatform software.

Game design and content took a back seat.


{{ big_heading(name="Gameplay") }}

---

*O.S.S.: Space Adventure* presented an arcady gameplay experience where the player controlled a spaceship navigating through a field of incoming asteroids in a variety of modes. The game featured a pixel art aesthetic with clear on-screen bars for health and cooldowns.\
Destroying asteroids led to gear upgrades. Over time, bigger asteroids appeared. Power-ups could be dropped from destroyed asteroids.

# Core Loop
Asteroids are always heading towards the players side of the screen and could either be dodged in an endless survival mode or destroyed using laser fire. Health and rate of fire were limited to force the player to mix up their strategy.

## Modes

### Endless Mode
In this mode the core loop was executed infinitely, counting the players time and score.

### Defend Mode
A later addition, this mode introduced a planetary defense objective. Asteroids not destroyed in time would count as a penalty, lowering the unrestorable health of the planet beneath. Spawn rates and speed was adjusted to make this style of gameplay viable.

### Hardcore Variations
Both modes featured hardcore versions intended for quicker sessions.

## Other Features
The game included an achievement system leveraging Google Play's services.

<div class="blogImageList">
    <style>
        @media (max-width: 40rem) {
            .blogImageList {
                flex-direction: column;
            }
        }
    </style>
    <div>
    {{ image(
        path="https://ucarecdn.com/3031c98e-aa6f-48bf-86b7-24a844c5f643/ossspaceadventuretitlescreen.avif",
        width="100%",
        description="O.S.S.: Space Adventure Main Menu Screenshot", radius="1rem",
        figcaption="true",
        itemprop="screenshot",
        imageWidthPx=1080,
        imageHeightPx=1920
    ) }}
    </div>
    <div>
    {{ image(
        path="https://ucarecdn.com/075a0dda-92ce-46c3-8374-2524a5c4315e/ossspaceadventureendlessmode.avif",
        width="100%",
        description="O.S.S.: Space Adventure Endless Mode Screenshot",
        radius="1rem",
        figcaption="true",
        itemprop="screenshot",
        imageWidthPx=1080,
        imageHeightPx=1920
    ) }}
    </div>
    <div>
    {{ image(
        path="https://ucarecdn.com/9536dd98-62af-4392-98ca-77542c13ef32/ossspaceadventureprotectmode.avif",
        width="100%",
        description="O.S.S.: Space Adventure Protect Mode Screenshot",
        radius="1rem",
        figcaption="true",
        itemprop="screenshot",
        imageWidthPx=1080,
        imageHeightPx=1920
    ) }}
    </div>
</div>


{{ big_heading(name="Challenges") }}

---

The transition to GameMaker during development of *O.S.S.: Space Adventure* involved several challenges

*   New Coding Paradigm
    *   A Complete transitioning from Java's, for a teenager, rather abstract object-oriented principles to GML's more direct, untyped, yet still object oriented principles.
*   Pixel Art
    *   First time creating pixel art and palettes in a memory efficient manner.
*   Audio Sourcing
    *   Sourcing and integrating correctly licensed background music from platforms like freesound.org. Generating sound effects using waveform generators.
*   Gameplay Evolution
    *   Initial gameplay was perceived as dull. This led to the addition of new modes and visual effects.


{{ big_heading(name="Availability") }}

---

*O.S.S.: Space Adventure* was publicly available on the Google Play Store for free starting February 25, 2018. Feedback from testers indicated a bug-free yet at first dull experience. However the pixel art, while functional, was low-resolution and lacked shading. The chosen background music, conversely, was generally well-received.

The game is no longer available on the Google Play Store, although the original source code is preserved.


{{ big_heading(name="Lessons Learned") }}

---

Developing *O.S.S.: Space Adventure* provided valuable insights that profoundly influenced my approach to software and game development

*   Tech Stack Pivot
    *   Applying previously learned principles to an entirely new programming language and game engine.
*   Game Development Fundamentals
    *   Gained practical experience in core game development concepts, including gameplay loop design, asset integration, and iterative feature development.
*   Adaptive Scaling
    *   Practical application of adaptive resolution techniques for mobile devices.
*   Attribution
    *   Hands-on experience with managing third-party integrations with proper attribution and license adherence. This is a strong contrast to the ill fated outcome of [GerMemz](/portfolio/software/germemz/).
*   Integration with Third Party APIs and SSO
    *   Achievements were handled by integrating with the Google Play APIs for signing in and tracking progress.