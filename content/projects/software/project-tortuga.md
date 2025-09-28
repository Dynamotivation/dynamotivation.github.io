+++
title = "Project Tortuga"
draft = true

[extra]
logo = "https://ucarecdn.com/f324ab78-ab77-419c-8725-8af4d571bd02/OSSSpaceAdventure.webp"
available_on_android = false
available_on_windows = true
available_on_mac = false
available_on_linux = false
avaialble_on_ios = false

# SEO
operatingSystem = "Windows"
applicationCategory = "GameMod"
releaseNotes = "Cancelled"
programmingLanguage = "GCS/CCS (Game Code Script/Client Code Script)"
developmentEnvironment = "Call of Duty: Black Ops 3 Mod Tools (Radiant)"
license = "Closed Source (Source Code Preserved)"
+++

{% infobox(title="Project Tortuga") %}
{{ image(path="", width="100%", description="Project Tortuga Placeholder Image", rendering="pixelated", radius="20%") }}
<dl>
    <dt>Availability</dt>
    <dd>Never Released</dd>
    <dt>Initial development</dt>
    <dd>June 10, 2017</dd>
    <dt>Development Environment</dt>
    <dd>Call of Duty: Black Ops 3 Mod Tools<br>(Radiant)</dd>
    <dt>Written in</dt>
    <dd>GCS (Game Code Script)<br>CCS (Client Code Script)</dd>
    <dt>Operating system(s)</dt>
    <dd>Windows</dd>
    <dt>Source code</dt>
    <dd>Preserved (Original)<br>Closed Source</dd>
</dl>
{% end %}

***Project Tortuga*** was a collaborative custom Zombies map concept for Call of Duty: Black Ops 3, primarily developed by Dynamotivation at age 15. Originally conceived as a narrative experience built upon existing lore, the project and its cancellation served as an important milestone in the process of learning 3D game design, game scripting, and project management. While the full vision was not realized a lot of foundational work was finished.

{{ big_heading(name="Development") }}

---

Development for *Project Tortuga* was a joined effort between Dynamotivation and another aspiring mapper from June 2017 onwards at age 15. This initial collaboration fostered extensive brainstorming, resulting in an ambitious shared vision for the map. A core personal goal for Dynamotivation was to learn 3D environment design using the modtools Radiant editor, and to grasp the GCS and CCS scripting languages for custom content.

However, due to the teammate's inability to continue development, Dynamotivation transitioned to sole development. Recognizing the immense scope of the original concept for a single creator, a pragmatic decision was made made to discontinue mapping and shift towards foundational learning and partial implementation.


{{ big_heading(name="Original Vision") }}

---

The overarching narrative for *Project Tortuga* was intended to branch of the original Zombies lore following "Zetsubo No Shima".\
The story envisioned the Zombies crew successfully capturing the japanese ship in an alternate opening cutscene, avoiding desctruction and stranding on a different island. This setting was supposed to draw architectural and environmental inspiration from Greek, Japanese, and potentially Gibraltarian aesthetics, becoming overrun with zombies upon the crew's arrival.

# Conceptual Areas

*   The shore
*   Town areas:
    * A plaza/market
    * A stage
    * A bar
    * A winery
    * A *Fachwerk* (half-timbered) coast guard houses
    * Collapsed tunnels to implied additional town sections
*   Military base
*   A volcano

# Conceptual Features

*   Main and side easter egg quests
*   Evolving environment:
    *   A central thematic element involved a "mountain" in the map's center being revealed as a weaponized active volcano during the Easter Egg quest.
*   Custom weapons:
    *   The primary Easter Egg quest would involve collecting parts for different elemental staffs not seen in *Origins* or *Der Eisendrache*.
*   Weapons from Call of Duty: WWII


{{ big_heading(name="Implemented Features") }}

---

Even before the decision to discontinue the project, several foundational elements were already implemented:

*   Environmental block outs:
    *   Initial blockouts were created for the shore and the crew's boat, establishing spatial relationships.
*   Architectural prefab:
    *   A *Fachwerk haus* prefab was developed as a template for consistent aritechture style in town sections.

And even more so after the decision was made:

*   Third-party asset integration from the UGX and Modme forums:
    *   Custom weapons
    *   Mystery boxes
    *   Custom perks
    *   Basic buildable system
*   Custom scripts expanding on the buildable system
*   UI elements to reflect differnt systems


{{ big_heading(name="Challenges") }}

---

Due to *Project Tortuga* premature cancellation it presented more than just technical challenges:

*   Team dissolution:
    *   The unexpected shift from a team project to a solo endeavor necessitated a re-evaluation and eventual cancellation of projects scope.
*   Unfamiliar tooling:
    *   Jumping from the Java Android App [GerMemz](/projects/software/germemz) straight into the, at the time, sparingly documented mod tools of a 3d game was too big of jump.
    *   Two different programming languages in GCS and CCS.
    *   Much discussion taking place across multiple different forums, some invite only.
*   Project dependencies:
    *   Integrating numerous custom assets (weapons, perks, mystery boxes) from community contributors that themselves were still under active development and had bugs.
    *   Understanding their (in)compatibilities with each other.

*   Game Scripting:
*   Partially learning GCS (Game Code Script) and CCS (Client Code Script) was required for implementing custom content and unique in-game interactions, adding another layer of technical complexity.


{{ big_heading(name="Availibility") }}

---

*Project Tortuga* was not completed to its intended vision and was never publicly released. The work undertaken largely consisted of initial blocking, asset integration, and partial environmental detailing  and scripting. The source code for the developed elements is preserved.


{{ big_heading(name="Lessons Learned") }}

---

The whole process and hardship provided me with important insights into game development, 3D design, scripting, and most importantly project management:

*   Collaboration:
    *   Experienced collaboration through working with a teammate.
    *   Exchange with other modders and developers in the scene asking for and providing help.
    *   Relying on dependencies such as the game and third-party assets instead of rolling everything ourselves.
    *   Distributing tasks to the best fit team member.
*   3D Environment Development:
    *   I gained hands-on experience with a professional-grade 3D level editor (Radiant).
    *   Got to learn the fundamental concepts of environmental blocking, texturing, and asset placement within a game engine.
*   Game Scripting Fundamentals:
    *   Gained knowledge in game scripting (GCS/CCS) and a general understanding of how game logic differs from straight forward applications.
*   Scope Assessment:
    *   Learned a critical lesson in correctly (re)evaluating project scope.
*   Project Management:
    *   Understood the gap between an expansive creative vision and the practical execution.
    *   Learned to account for consider unknown factors and uncertainties.
    *   Discovered principles of agile development through daily talks and weekly meetups to discuss the project.