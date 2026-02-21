+++
title = "Unofficial Sonic Mania Mobile Port for Android"
date = 2019-05-01
description = "An unreleased fan port of the video game Sonic Mania to Android using the GameMaker: Studio Engine and Sonic MAX Framework."

[extra]
# Graphic enrichment
project_title = "Unofficial Sonic Mania Mobile Prototype"
alternate_name = "Unofficial Sonic Mania Mobile Port"
logo = "https://ucarecdn.com/d03cdf7e-4a3f-430d-8c09-d30ba87b4ecc/sonicmaniamobilelogo.avif"
infobox_images = [
    {
        path = "https://ucarecdn.com/d03cdf7e-4a3f-430d-8c09-d30ba87b4ecc/sonicmaniamobilelogo.avif",
        imageWidthPx = 512,
        imageHeightPx = 512,
        description = "Unofficial Sonic Mania Mobile Prototype Logo",
        radius = "20%"
    }
]
screenshot_urls = []
available_on_android = true
available_on_windows = false
available_on_mac = false
available_on_linux = false
available_on_ios = false

# JSON-LD SEO for Software
operatingSystem = "Android"
release_notes = "Unreleased"
programming_language = "GML (GameMaker Language)"
development_environment = "GameMaker Studio 1.4"
license = "Closed Source"
availability = "Discontinued"
application_category = "EntertainmentApplication"
price_usd = 0
#aggregate_rating = []

# FAQ
questions = [
  { 
    question = "Is the Unofficial Sonic Mania Mobile Port available for download?", 
    answer = "No, this was a short-term proof of concept and remains unreleased; additionally, the original source code has been lost." 
  },
  { 
    question = "What features were implemented in the Unofficial Sonic Mania Mobile Port?",
    answer = "The project focused on recreating challenging elements of Sonic Mania, including the title screen, certain menu and UI elements, the drop dash mechanic, blue sphere bonus stages, and a Mania-style Green Hill Zone Act 1."
  },
  { 
    question = "How were the 3D effects on the title screen achieved?", 
    answer = "The clouds used a custom shader for distortion correction and surface rendering, while the spinning island utilized GameMaker's primitive 3D engine with a camera and projection matrix." 
  },
  { 
    question = "How did the project handle the Blue Sphere bonus stages?", 
    answer = "The projection logic was recreated by charting x and y screen locations against distance and approximating them with first and second-degree mathematical functions." 
  },
  {
    question = "What was the tech stack for the Unofficial Sonic Mania Mobile Port?",
    answer = "GML (GameMaker Language), GameMaker Studio 1.4, Sonic MAX Framework"
  }
]
+++

{% infobox(title="Unofficial Sonic Mania Mobile Prototype") %}
{{ infobox_images() }}
<dl>
    <dt>Availability</dt>
    <dd>Unreleased</dd>
    <dt>Initial completion</dt>
    <dd>May 30, 2019</dd>
    <dt>Development environment</dt>
    <dd>GameMaker Studio 1.4</dd>
    <dt>Written in</dt>
    <dd>GML (GameMaker Language)</dd>
    <dt>Operating system(s)</dt>
    <dd>Android</dd>
    <dt>Source code</dt>
    <dd>Lost</dd>
</dl>
{% end %}

The ***Unofficial Sonic Mania Mobile Port*** was an unreleased fan port of the video game Sonic Mania for Android devices. It was briefly developed using the GameMaker: Studio engine and the Sonic MAX Framework in 2019 at age 17. The intent was to bring the experience of Sonic Mania to mobile platforms.


## Development

---

Development for this game porting project took place across a few short days in May 2019. The original Sonic Mania was released in 2017 to critical acclaim as a return to form for the franchise. Its engine was an evolved version of the engine powering the Sonic 1, 2 and CD ports to mobile before it. Hence it was confusing to not get any sort of mobile port of Sonic Mania at the time. There were a few other projects online to be stumbled upon when searching Sonic Mania Android / IOS. Motivated by this a proof of concept was created of Sonic Mania running in another Engine, namely the familiar GameMaker: Studio engine utilizing the Sonic MAX framework for its included physics and game objects.


## Features

---

Armed with an idea and an engine a handful of "difficult" considered scenarios from Sonic Mania were recreated. This was largely influenced by what online communities cited as the features blocking a port:
- The title screen
- Some menu and UI elements
- The drop dash
- Blue sphere bonus stages
- Mania-style Green Hill Zone Act 1

Two early builds of the title screen portion remain and can be seen in action here, one on real hardware (Samsung Galaxy S4 Mini) and one running through the LDPlayer 9 emulator for better video capture (the stutter is caused by the recording software).

<div class="blogVideoList">
{{
    blog_video(
        title="Unofficial Cancelled Sonic Mania 2019 Mobile Port | Title Screen Showcase",
        description="Video showcasing the title screen of the cancelled Sonic Mania Mobile Port.",
        url="JnqwKowlnvw"
    )
}}
{{
    blog_video(
        title="Unofficial Cancelled Sonic Mania Mobile 2019 Port Real | Real Hardware Showcase"
        description="Video showcasing the title screen of the cancelled Sonic Mania Mobile Port running on real hardware (Samsung Galaxy S4 Mini).",
        url="63cwSdtklNw"
    )
}}
</div>


## Challenges

---

This time there weren't any noteworthy hurdles in development as the engine and its programming language had become very familiar. The biggest hurdle faced had to do with projection.

The project featured 3 counts of difficult projections, 2 caught in the above videos.\
First of all there were the clouds in the title screen. While it may appear to be an easy argument to be made for draw_sprite_pos(...), there was much more to it. Most obvious of all is that the function does not correct its rendering for distortion of the triangles making of the sky plane. This had to be fixed with a custom shader. Additionally the scrolling nature of the cloud necessitated temporary off screen rendering to texture (called surface in GameMaker) and then back to the screen with transformations applied.\
Secondly there was the island on the lower half of the title screen spinning around. This time instead of computing the offset in sprite drawing coordinates in screen space, GameMakers primitive 3d engine was used in combination with a camera and projection matrix. To line the projection up with the real game, a series of screenshots was used to line them up just perfectly. As for the trees and such on the island (not present in the videos sadly), these were simple billboard sprites positioned on the island always rotating themselves to face the camera perfectly.
The third difficult projection was the blue spheres bonus stages. Mathematically the projection does not make *any* sense based on a realistic sphere. This is where we have to remember the origin of this effect, Sonic 3. This means the projection logic cannot have been computationally heavy. And indeed, charting the x and y locations on screen against Sonics actual distance from them reveals a point cluster for each axis that can be approximated closely with functions of the first and second degree (line and parabolic function).

With all these effects solved with the tools at hand the only missing thing was adding ripped textures and sound effects to the build to capture the demos.


## Availability

---

Not before long the project was cancelled after these few "difficult" elements were proved to be possible and ran well on the at the time already old Samsung Galaxy S4 Mini.\
It's source code remains lost as it was stored on a now defunct source control solution.

Nowadays this project appears fully superseded by the official Netflix Sonic Mania Mobile Port and the fan decompilation and port to various platforms. Strangely the Netflix port appears to run way worse in the scenes present in both versions.


## Lessons Learned

---

This project featured a few nice opportunities for me to learn as I had never before worked with any sort of difficult projection logic at noteworthy performance levels. Previous exposure in the [Everyone Joins the Battle Meme Generator](/portfolio/software/joins-the-battle-meme-generator/) were limited to screen space transformations without any FPS requirements. Surfaces were also only drawn once and cached.\
This time proper world space coordinates and real time performance were required, leading to the usage of the 3D systems.\
Unbeknownst to me at this time this would be a huge help for my next project.