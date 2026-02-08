+++
title = "Project Tortuga: CoD Black Ops 3 Custom Zombies Map"
date = 2017-06-09
description = "Post mortem exploration of Project Tortuga, a custom Call of Duty: Black Ops 3 Zombies map project covering mapping in Radiant and GCS/CCS scripting."
 
[extra]
# Graphic enrichment
project_title = "Project Tortuga"
logo = "https://ucarecdn.com/177ad7a9-ddfe-4e45-9a65-cb5a55705a1e/projecttortugalogo.avif"
infobox_images = [
    { path = "https://ucarecdn.com/177ad7a9-ddfe-4e45-9a65-cb5a55705a1e/projecttortugalogo.avif", imageWidthPx = 512, imageHeightPx = 512, description = "Project Tortuga Call of Duty Black Ops 3 Custom Zombies Map Concept Logo" }
]
screenshot_urls = []
available_on_android = false
available_on_windows = true
available_on_mac = false
available_on_linux = false
available_on_ios = false

# JSON-LD SEO for Software
operatingSystem = "Windows"
release_notes = "Cancelled"
programming_language = "GCS/CCS (Game Code Script/Client Code Script)"
development_environment = "Call of Duty: Black Ops 3 Mod Tools (Radiant)"
license = "Closed Source"
availability = "Discontinued"
application_category = "GameApplication"
price_usd = 0

# FAQ
questions = [
    { question = "Why was Project Tortuga cancelled?", answer = "The project's scope was too ambitious for a solo developer after the original teammate left the project. This led to a pragmatic decision to discontinue mapping and shift towards foundational learning." },
    { question = "Can I play Project Tortuga?", answer = "No, Project Tortuga was never publicly released. An early version with temporary textures was recorded and is available on YouTube, but this is far from the final vision." },
    { question = "What scripting languages were used?", answer = "Two custom scripting languages: GCS (Game Code Script) for server-side logic and CCS (Client Code Script) for client-side effects, both specific to the Call of Duty engine branch." },
    { question = "What software was used for the 3D environment design?", answer = "The map was developed using the Radiant level editor (the official tool for the Black Ops 3 engine), involving environmental block outs, custom texturing, and architectural prefabs." },
    { question = "Were any community assets or forums involved?", answer = "Yes, the project integrated third-party assets and documentation from the UGX-Mods and Modme communities, including custom weapon ports, perks, and UI elements." },
    { question = "What was the tech stack for Project Tortuga?", answer = "Call of Duty: Black Ops 3 Mod Tools, T7 Engine, Radiant, APE, GCS (Game Code Script), CCS (Client Code Script)" }
]

+++

{% infobox(title="Project Tortuga") %}
{{ infobox_images() }}
<dl>
    <dt>Availability</dt>
    <dd>Unreleased</dd>
    <dt>Initial completion</dt>
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

## Development

---

Development for *Project Tortuga* was a joint effort between Dynamotivation and another aspiring mapper from June 2017 onwards at age 15. This initial collaboration consisted of extensive brainstorming, resulting in an ambitious shared vision for the map. A core personal goal for Dynamotivation was to learn 3D environment design using the engines Radiant editor, and to grasp the GCS and CCS scripting languages for custom content.

However, due to the teammate's inability to continue development, Dynamotivation transitioned to solo development. Recognizing the immense scope of the original concept for one person the heavyhearted decision was made to discontinue the project.


## Original Vision

---

The overarching narrative for *Project Tortuga* was intended to branch off the original Zombies lore following "Zetsubo No Shima".\
The story envisioned the Zombies crew successfully capturing the Japanese ship in an alternate opening cutscene, avoiding destruction and stranding on a different island. This setting was supposed to draw architectural and environmental inspiration from Greek, Japanese, and potentially Gibraltarian aesthetics, becoming overrun with zombies upon the crew's arrival.

### Conceptual Areas

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

### Conceptual Features

*   Main and side easter egg quests
*   Evolving environment:
    *   A central thematic element involved a "mountain" in the map's center being revealed as a weaponized active volcano during the Easter Egg quest.
*   Custom weapons:
    *   The primary Easter Egg quest would involve collecting parts for different elemental staffs not seen in *Origins* or *Der Eisendrache*.
*   Weapons from Call of Duty: WWII


## Implemented Features

---

Even before the decision to discontinue the project, several foundational elements were already implemented:

*   Environmental block outs:
    *   Initial block outs were created for the shore and the crew's boat, serving as the maps starting areas.
*   Architectural prefab:
    *   A *Fachwerk haus* prefab was developed as a template for consistent architecture style in town sections.
*   Third-party asset integration from the UGX and Modme forums:
    *   Custom weapons
    *   Mystery boxes
    *   Custom perks
*   Custom crafting and brewing system
*   UI elements to reflect different systems


<div class="blogVideoList">
{{ blog_video(title="Modified Archaicvirus Custom Buildable Script Showcase | Project Tortuga | CoD: BO3 Mod Tools", description="Video showcasing the primitive custom buildable and power switch script.", url="DX2yZ10RhU0") }}
{{ blog_video(title="Brewing in Archaicvirus Custom Buildable Script | Project Tortuga | CoD: BO3 Mod Tools", description="Video showcasing a custom perk brewing script.", url="6-dcCJUq5f4") }}
</div>


## Challenges

---

Due to *Project Tortuga* premature cancellation it presented more than just technical challenges:

*   Team dissolution:
    *   The unexpected shift from a team project to a solo endeavor necessitated a re-evaluation and eventual cancellation of projects scope.
*   Unfamiliar tooling:
    *   Jumping from the Java Android App [*GerMemz*](/portfolio/software/germemz) straight into the, at the time, sparingly documented mod tools of a 3d game was too big of a jump.
    *   Two similar programming languages in GCS and CCS.
    *   Much discussion taking place across multiple different forums, some invite only.
*   Project dependencies:
    *   Integrating numerous custom assets (weapons, perks, mystery boxes) from community contributors that themselves were still under active development and had bugs.
    *   Understanding their (in)compatibilities with each other.

*   Game Scripting:
    *   Partially learning GCS (Game Code Script) and CCS (Client Code Script) was required for implementing custom content.


## Availability

---

*Project Tortuga* was not completed to its intended vision and was never publicly released.
However one early version of the developed elements is preserved and has been recorded for easy preservation.

The walkthrough of an early block out with temporary textures is available on YouTube:

<div class="blogVideoList">
{{ blog_video(title="Walkthrough of Cancelled Project Tortuga Custom Zombies Map | CoD: BO3 Mod Tools", description="Video walkthrough of an early block out of the starting area with temporary textures.", url="6-TWUN5PdHc") }}
</div>

Regrettably, this is not anywhere near the final version or the point where development was cancelled, but it does include the Fachwerk house, bar with corridor to wine cellar, stage with guillotine and the smiths corner.
Absent are the mystery box, wine cellar itself, military base and any of the finished vista models for the backdrop.


## Lessons Learned

---

The whole process and hardship provided me with important insights into game development, 3D design, scripting, and most importantly project management:

*   Collaboration:
    *   Experienced the good and bad aspects of collaboration through working with a teammate.
    *   Exchange with other modders and developers in the scene asking for and providing help.
    *   Relying on dependencies such as the game and third-party assets instead of rolling everything ourselves.
    *   Distributing tasks to the best fit team member.
*   3D Environment Development:
    *   I gained hands-on experience with a professional-grade 3D level editor (Radiant).
    *   Got to learn the fundamental concepts of environmental blocking, texturing, and asset placement within a game engine.
*   Game Scripting Fundamentals:
    *   Gained knowledge in game scripting (GCS/CCS) and a general understanding of how game modding differs from straight forward source code access.
*   Project Management:
    *   Understood the gap between an expansive creative vision and the practical execution.
    *   Learned to account for consider unknown factors and uncertainties.
    *   Discovered principles of agile development through daily talks and weekly meetups to discuss the project.
*   Scope Assessment:
    *   Learned a critical lesson in correctly (re)evaluating project scope.
    *  Prevented falling for the sunken cost fallicy by accepting the cancellation.