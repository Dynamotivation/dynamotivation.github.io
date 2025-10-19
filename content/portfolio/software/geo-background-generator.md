+++
title = "Geo Background Generator"
date = 2018-04-01

[extra]
logo = "https://ucarecdn.com/af30c773-bf10-495b-b181-115f6fe5a3e0/GeoBackgroundGenerator.avif"
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
license = "Closed Source (Source Code Lost)"
+++

{% infobox(title="Geo Background Generator") %}
{{ image(
    path="https://ucarecdn.com/af30c773-bf10-495b-b181-115f6fe5a3e0/GeoBackgroundGenerator.avif",
    width="100%",
    imageWidthPx=512,
    imageHeightPx=512,
    description="Geo Background Generator Logo",
    radius="20%"
) }}
<dl>
    <dt>Availability</dt>
    <dd>Delisted<br>Formerly on Google Play</dd>
    <dt>Initial completion</dt>
    <dd>April 1st, 2018</dd>
    <dt>Development environment</dt>
    <dd>GameMaker Studio 1.4</dd>
    <dt>Written in</dt>
    <dd>GML (GameMaker Language)<br>Java</dd>
    <dt>Operating system(s)</dt>
    <dd>Android</dd>
    <dt>Source code</dt>
    <dd>Lost</dd>
</dl>
{% end %}


***Geo Background Generator*** was the first GameMaker Studio 1.4 powered utility developed by Dynamotivation and published by Mr. Unp3rf3ct in 2018 at age 16. It was used to generate aesthetically pleasing geometry pattern based backgrounds from user input colors and parameters.


{{ big_heading(name="Development") }}

---

The development of *Geo Background Generator* came along quickly in a couple of days in 2018 after a few days spent working out the real time graphic capabilities of GameMaker Studio 1.4. The achieved effects proved to be pretty and a nice contrast with the at the time popular material design of Android. The core system was extracted from a game prototype being worked on and integrated with its own pixel art UI, reminiscent of said prototype.\
Later on the small UI library *GMX Material Design Lite*, developed too by Dynamotivation for the [*... Joins the Battle! Meme Generator*](portfolio/software/joins-the-battle-meme-generator), was integrated to better show off the intended use as a contrast to the sterile system UI.


{{ big_heading(name="Challenges") }}

---

During the development of *Geo Background Generator* a few minor challenges arose:

*   Optimizing math operations using caching
*   Scaling to the devices resolution without introducing pixelation
*   Interop with the operating system
    *   Interop capabilities written in Java were needed to talk to the underlying Android OS for saving the generated backgrounds.\
    This is necessitated by the sandboxing GameMaker Studio 1.4 imposes on applications for security. 


{{ big_heading(name="Features") }}

---

In the latest version the features included:

*   Selecting shapes
    *   Users could choose between parallelograms, squares and triangles.
*   Selecting shape size
*   Selecting background gradient
    *   Unicolor, horizontal and vertical gradients, and quadricolor effects for colorful shape blending.
*   Brightness control of the color blend
*   Prompting permission and saving to the devices storage


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
            path="https://ucarecdn.com/5bb09828-843b-4877-958f-b01dd1e662ca/geobackgroundgeneratornewui.avif",
            width="100%",
            description="Geo Background Generator screenshot of the new user interface.",
            radius="1rem",
            figcaption="true",
            itemprop="screenshot",
            imageWidthPx=432,
            imageHeightPx=768
        ) }}
    </div>
    <div>
        {{ image(
            path="https://ucarecdn.com/9bc23bd1-fed1-40a3-b889-77dd5203f44b/geobackgroundgeneratorcomplexexamplepattern.avif",
            width="100%",
            description="Geo Background Generator screenshot of a simple horizontal gradient background with big squares.",
            radius="1rem",
            figcaption="true",
            itemprop="screenshot",
            imageWidthPx=432,
            imageHeightPx=768
        ) }}
    </div>
    <div>
        {{ image(
            path="https://ucarecdn.com/746df704-5b06-4b57-9558-2b092b119f58/geobackgroundgeneratorsimpleexamplepattern.avif",
            width="100%",
            description="Geo Background Generator screenshot of a more complex quadricolor background with small triangles.",
            radius="1rem",
            figcaption="true",
            itemprop="screenshot",
            imageWidthPx=432,
            imageHeightPx=768
        ) }}
    </div>
    <div>
        {{ image(
            path="https://ucarecdn.com/489c6beb-7edb-4403-85a2-33bcbda91848/geobackgroundgeneratoroldui.avif",
            width="100%",
            description="Geo Background Generator screenshot of the old user interface.",
            radius="1rem",
            figcaption="true",
            itemprop="screenshot",
            imageWidthPx=432,
            imageHeightPx=768
        ) }}
    </div>
</div>


{{ big_heading(name="Availability") }}

---

The application used to be officially available on Google Play, but has been unavailable for several years due to educational and employment obligations on top of lost interest by the initial publisher. The source code has also been lost in the meantime, but with the skill set achieved in the meantime would be easy to remake.


{{ big_heading(name="Lessons Learned") }}

---

The development of *Geo Background Generator* proved GameMaker Studio to be a viable platform not only for games, but also for regular software and utilities. Other than that the main learning was how to work around the sandbox and interact with the operating system.