+++
title = "Joins the Battle Meme Generator: Fighting Game Memes"
date = 2018-11-03
description = "Create authentic \"Joins the Battle\" fighting game splash screens and memes. Customize characters, text, colors and effects in multiple iconic styles!"

[extra]
# Graphic enrichment
project_title = "Joins the Battle Meme Generator"
alternate_name = "... Joins the Battle! Meme Generator"
logo = "https://ucarecdn.com/20719464-83fb-4d9e-8940-29de5a3275ec/joinsthebattleeditorlogoremastered.avif"
infobox_images = [
    {
        path = "https://ucarecdn.com/20719464-83fb-4d9e-8940-29de5a3275ec/joinsthebattleeditorlogoremastered.avif",
        imageWidthPx = 512,
        imageHeightPx = 512,
        description = "*Joins the Battle Meme Generator* remastered logo", radius = "20%"
    },
    {
        path = "https://ucarecdn.com/53467976-971a-4278-beb9-4947a99103a6/JoinsTheBattleMemeGeneratorLogo.avif",
        imageWidthPx = 512,
        imageHeightPx = 512,
        description = "*Joins the Battle Meme Generator* original logo",
        radius = "20%"
    }
]
screenshot_urls = [
    "https://ucarecdn.com/324e7ae4-6169-4635-a49c-7c6563178caa/joinsthebattlemainmenu.avif",
    "https://ucarecdn.com/8de5babc-76fe-48b4-8ecc-37dacbccdf61/joinsthebattleeditormenu.avif",
    "https://ucarecdn.com/79a7577d-cf7f-4efa-a593-21121d70a5de/joinsthebattlebackgroundmenu.avif",
    "https://ucarecdn.com/f1a1eab7-238f-429e-bba7-c6ba5e073eef/joinsthebattle2018style.avif",
    "https://ucarecdn.com/3586305e-2e3c-43df-8345-04a1646145a3/joinsthebattle2014style.avif",
    "https://ucarecdn.com/1047f267-98fa-4b83-a891-101a11a3cde5/joinsthebattle2018unlockstyle.avif",
    "https://ucarecdn.com/c2794126-6cd2-4eaa-ad20-237246836ffb/joinsthebattle2018thumbnailstyle.avif"
]
available_on_android = true
available_on_windows = false
available_on_mac = false
available_on_linux = false
available_on_ios = false

# JSON-LD SEO for Software
operatingSystem = "Android"
release_notes = "Delisted from Google Play"
programming_language = "GML (GameMaker Language)"
development_environment = "GameMaker Studio 1.4"
license = "Closed Source"
availability = "Discontinued"
application_category = "DesignApplication"
price_usd = 0
aggregate_rating = {
    rating_value = 4.3,
    rating_count = 2123,
    best_rating = 5,
    worst_rating = 1,
    rating_explanation = "Based on Google Play Console data of 10th October 2025; Historical data available at: https://web.archive.org/web/20190601032534/https://play.google.com/store/apps/details?id=de.unp3rf3ct.JoinsTheBattleGenerator"
}

# FAQ
questions = [
    { 
        question = "What is the Joins the Battle Meme Generator?", 
        answer = "It is a specialized content creation tool for Android that allows users to create authentic-looking 'Joins the Battle' splash screen memes, similar to those seen in fighting game character reveals." 
    },
    { 
        question = "How successful was the application?", 
        answer = "The app was a significant success, reaching over 500,000 total installs and maintaining a 4.3+ star rating on Google Play before being delisted." 
    },
    { 
        question = "What technical challenges were involved in using GameMaker for a utility app?", 
        answer = "Since GameMaker Studio 1.4 lacks native UI components, I had to develop a custom Material Design framework from scratch, including a density-independent pixel (DIP) system and reactive UI elements." 
    },
    { 
        question = "Why was the app delisted, and will it return?", 
        answer = "The app was temporarily delisted due to educational and employment commitments, but maintenance has recently resumed with plans for a modernized relaunch." 
    },
    { 
        question = "How does the generator differ from a simple image template?", 
        answer = "Unlike static templates, this app uses a game engine to dynamically render components using shaders and math-based constraints, allowing for non-destructive editing and precise visual effects." 
    },
    {
        question = "What was the tech stack for Joins the Battle Meme Generator?",
        answer = "GML (GameMaker Language), GameMaker Studio 1.4"
    }
]
+++

{% infobox(title="Joins the Battle Meme Generator") %}
{{ infobox_images() }}
<dl>
    <dt>Availability</dt>
    <dd>Delisted<br>Formerly on Google Play</dd>
    <dt>Initial completion</dt>
    <dd>November 3, 2018</dd>
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

***Joins the Battle Meme Generator*** (originally *... Joins the Battle Meme Generator*) was a successful Android application developed by Dynamotivation at age 16 and initially published by Mr. Unp3rf3ct. The application allowed users to create custom "X Joins the Battle" style splash screen memes, replicating the visual makeup seen in fighting game character reveal trailers. This project marked a significant pivot towards developing specialized content creation tools, mimicking preestablished art styles without without incorporating copyrighted assets.


## Development

---

Development for *Joins the Battle Meme Generator* first started in October 2018 and continued up till April 2019, using GameMaker Studio 1.4. The project was inspired by a perceived gap in the market: Despite the rising popularity of the "X Joins the Battle" meme template, especially coinciding with the announcement of a major all-star fighting game, no dedicated feature-rich generator existed.

This application represented a combination of the previous concept "style it yourself", from [*Geo Background Generator*](/portfolio/software/geo-background-generator), and riding the popularity of external content, as [*GerMemz*](/portfolio/software/germemz) did years prior. Importantly it also carved the way back from game development to traditional software utilities.


## Challenges

---

Developing *Joins the Battle Meme Generator* presented a set of challenges, extending from core UI implementation to post-launch updates and architectural design:

*   Custom UI implementation:
    *   GameMaker Studio 1.4 lacked native UI components, necessitating a partial reimplementation of Material Design elements. This included shadows, fonts, regular and floating action buttons (FABs), and a custom density-independent pixel (DIP) system. 
*   Post-Launch management:
    *   As the first successful application a new aspect to development was added, communicating with users, planning and developing updates and fixes, and providing support.
*   Application of object-oriented programming:
    *   Early prototypes resembled spaghetti code more than anything proper.\
    Inheritance structures were an afterthought at first, but were eventually implemented to enable sharing and reuse of components, bringing back the learnings from other Java-based projects. This significantly deepened the understanding and practical application of Object-Oriented Programming (OOP) concepts in a tangible way.
*   Reuse of components:
    *   These OOP advancements allowed for the efficient creation of different submenus and editors for the different game styles featured in this editor.\
    In this process the resolution and aspect ratio handling, and UI were spun out into the private Libraries. The *DynaScale Framework* was used and evolved in all future GameMaker projects and *GMS Material Design Lite* was used in [*Stellenwerttafel Plus*](/portfolio/software/stellenwerttafel-plus) and backported to [*Geo Background Generator*](/portfolio/software/geo-background-generator).


## Features

---

Being a specialized utility allowed users extensive customization to replicate the iconic fighting game splash screen aesthetic. Key features included:

*   Included visually similar components and presets
    *   The included components were already made from scratch in the style and colors of the source material.
*   Composition editor
    *   Users could precisely position, rotate and scale these and their own assets including character portraits, background splash effects and stylized text overlays.
*   Color control
    *   Backgrounds were fully colorable by the user. A few color pallets extracted from trailers were shipped as presets. Accents and gradients were calculated on the fly.
*   Reactive components
    *   The biggest feature was that this app was more than a mere template for an image editor and instead utilizing a game engine. Everything was rendered dynamically leveraging shaders and surfaces offered by the engine. This is very much akin to "non destructive editing" workflows and effect stacks found in modern paid photo editing software, but for free, premade, and smarter!\
    Thanks to being in a game engine, a lot of features could be powered by pure math and constraints, such as the sadly never published video export feature. All animation featured was calculated based on composition and how reference trailers would behave, be it the timing, slide in or trajectory of lense flare effects.
*   Stylized Text Manipulation
    *   The "Joins the Battle" text was editable and of course also dynamically rendered on the fly in terms of styling and appearance.

<div class="blogImageList">
    <style>
        @media (max-width: 40rem) {
            .blogImageList {
                flex-direction: column;
            }
        }
    </style>
    <div>
        {{ screenshot(
            index=0,
            width="100%",
            description="*Joins the Battle Meme Generator* main menu screenshot",
            radius="1rem",
            figcaption="true",
            imageWidthPx=1920,
            imageHeightPx=1080
        ) }}
    </div>
    <div>
        {{ screenshot(
            index=1,
            width="100%",
            description="*Joins the Battle Meme Generator* main editor menu screenshot",
            radius="1rem",
            figcaption="true",
            imageWidthPx=1920,
            imageHeightPx=1080
        ) }}
    </div>
    <div>
        {{ screenshot(
            index=2,
            width="100%",
            description="*Joins the Battle Meme Generator* background editor menu screenshot",
            radius="1rem",
            figcaption="true",
            imageWidthPx=1920,
            imageHeightPx=1080
        ) }}
    </div>
</div>

The target audience for the generator was broad, encompassing fighting game fans across all age brackets and various game franchises, as well as content creators and social media users seeking to create mockups of their concepts and memes.


<div class="blogImageList">
    <style>
        @media (max-width: 40rem) {
            .blogImageList {
                flex-direction: column;
            }
        }
    </style>
    <div>
        {{ screenshot(
            index=3,
            width="100%",
            description="*Joins the Battle Meme Generator* 2018 trailer style example screenshot",
            radius="1rem",
            figcaption="true",
            imageWidthPx=1920,
            imageHeightPx=1080
        ) }}
    </div>
    <div>
        {{ screenshot(
            index=4,
            width="100%",
            description="*Joins the Battle Meme Generator* 2014 trailer style example screenshot",
            radius="1rem",
            figcaption="true",
            imageWidthPx=1920,
            imageHeightPx=1080
        ) }}
    </div>
    <div>
        {{ screenshot(
            index=5,
            width="100%",
            description="*Joins the Battle Meme Generator* ingame unlock style example screenshot",
            radius="1rem",
            figcaption="true",
            imageWidthPx=1920,
            imageHeightPx=1080
        ) }}
    </div>
        <div>
        {{ screenshot(
            index=6,
            width="100%",
            description="*Joins the Battle Meme Generator* video thumbnail style example screenshot",
            radius="1rem",
            figcaption="true",
            imageWidthPx=1920,
            imageHeightPx=1080
        ) }}
    </div>
</div>


## Reception and Availability

---

*Joins the Battle Meme Generator* received stellar feedback, achieving an average rating of approximately 4.5 stars across 350,000 installs on Google Play alone, over half a million in total. This success led to a high volume of reviews, user emails, and even attracted multiple sponsorship and acquisition offers, demonstrating its significant impact and popularity within its niche.

The application has been unavailable for several years due to educational and employment obligations, and a disconnect with the initial publisher. However, maintenance has resumed behind the scenes, with plans for the application to return soon, integrating lessons learned in the years since.


## Lessons Learned

---

*Joins the Battle Meme Generator* provided critical insights into mobile application development, user experience, and the realities of public software distribution.

*   UI considerations
    *   Learned to watch out for the strength and weaknesses in terms of UI of any given engine or framework. The need to create *GMS Material Design Lite* took away time and resources from developing the app, but taught valuable lessons in exchange about scaling and user experience.
*   User-centric design
    *   Successfully developed a tool that was easy to pick up and use across a wide target audience, providing powerful customization options for a popular meme format.
*   Product lifecycle management
    *   Gained invaluable experience in managing a public release, including handling user feedback, planning updates, and the ongoing responsibilities of maintaining a live application.
*   Practical object-oriented programming
    *   Deepened understanding of OOP by retroactively implementing inheritance and reusable components, demonstrating the practical application of architectural design for scalability.
*   Market niche identification
    *   Proved the ability to identify an underrepresented, yet marketable market niche and develop a highly successful product to fill it, unlike the copyright setbacks encountered with [*GerMemz*](/portfolio/software/germemz).