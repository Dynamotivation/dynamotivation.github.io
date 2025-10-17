+++
title = "Stellenwerttafel Plus"
date = 2019-02-07

[extra]
logo = "https://ucarecdn.com/ec6e0f7a-c00e-4e3c-bdc6-82b8715368f9/stellenwerttafelPlusLogo.avif"
available_on_android = true
available_on_windows = true
available_on_mac = false
available_on_linux = false
available_on_ios = false

# SEO
operatingSystem = "Windows, Android"
applicationCategory = "Educational"
releaseNotes = "Unreleased"
programmingLanguage = "GML (GameMaker Language)"
developmentEnvironment = "GameMaker Studio 1.4"
license = "Closed Source (Source Code Preserved)"
+++

{% infobox(title="Stellenwerttafel Plus") %}
{{ image(
    path="https://ucarecdn.com/ec6e0f7a-c00e-4e3c-bdc6-82b8715368f9/stellenwerttafelPlusLogo.avif",
    width="100%",
    description="Stellenwerttafel Plus Placeholder Image",
    rendering="pixelated",
    radius="20%"
) }}
<dl>
    <dt>Availability</dt>
    <dd>Unreleased</dd>
    <dt>Initial development</dt>
    <dd>January 2019</dd>
    <dt>Development environment</dt>
    <dd>GameMaker Studio 1.4</dd>
    <dt>Written in</dt>
    <dd>GML (GameMaker Language)</dd>
    <dt>Operating system(s)</dt>
    <dd>Windows<br>Android</dd>
    <dt>Source code</dt>
    <dd>Preserved<br>Closed Source</dd>
</dl>
{% end %}

***Stellenwerttafel Plus*** was an educational application developed by Dynamotivation in early 2019 at age 16. It represented a multi-platform port and enhancement of [Ulrich Kortenkamp](https://kortenkamps.net)'s ["Stellenwerttafel" IOS app](https://apps.apple.com/us/app/place-value-chart/id568750442), designed to facilitate a playful understanding of various number systems for students. The project was conceived as an internal school project with its creation provided significant insights into client-driven development and cross-platform adaptation.


{{ big_heading(name="Development") }}

---

Development for *Stellenwerttafel Plus* took place over a few days in late January and early February 2019. The project originated as a "contract work" assignment for school, undertaken at age 16 in exchange for promised extra credit.

At the time the school faced a challenge: A lack of iPads for IT classes, reliance on old Windows 7 PCs, and prohibition of private phone use met with demand from parents and the curriculum to adequately teach in a digital manner.\
This necessitated a solution to bring the elected original "Stellenwerttafel" educational tool to cheaper platforms.

For its Windows and Android, GameMaker Studio 1.4 was chosen as the platform after being proven to be viable through [*O.S.S.: Space Adventure*](/portfolio/software/oss-space-adventure) and the [*Everyone Joins The Battle Generator*](/portfolio/software/everyone-joins-the-battle-generator) respectively. This effort addressed the school's immediate needs by extending the live of their old devices. The original "Stellenwerttafel" app, by Ulrich Kortenkamp, was not ported directly, but rather its interactive approach to teaching number systems through visual manipulation remade in the new engine.

Although development was brought to completion after school within a week and the final result was accepted, the app went ultimately unused due to other teachers disproving the enablement of old devices as a strategy going forwards.\
Any and all payment in form of credit was refused despite a 1-hour presentation detailing the application's capabilities, mathematical implementations and coding style being explored in detail as proof of work.


{{ big_heading(name="Challenges") }}

---

The development of *Stellenwerttafel Plus* presented several distinct challenges:

*   Platform adaptation:
    *   Retain all required functionality while adapting the user experience to both Windows and Android environments.
    *   Consistent behavior of math, especially floating points, were needed across all platforms.
*   New functionality to support for "base n" number systems.
*   External stakeholder
*   Time constraints:
    *   Completion of development was achieved within a highly compressed timeframe to address the requesting teachers deadline for a proof of concept to keeping costs low.
*   Dealing with nonpayment:
    *   Even though all requirements were met faster than expected, the school did not uphold their end of the bargain and did not provide any extra credit.
    *   In response neither the app, nor its source code was not turned over.


{{ big_heading(name="Features") }}

---

*Stellenwerttafel Plus* faithfully replicated the learning methodology of the original "Stellenwerttafel" app.\
A particular focus was placed on a playful user experience for younger students, with "balls" representing different numbers which slid apart in a smooth and satisfying way when split into a lower denomination.

Key features included:

*   Interactive number learning:
    *   Students could intuitively manipulate numerical representations by dragging a "ball" that would visually fuse and split, thereby fostering an understanding of place value.
    *   Marking overflows to showcase where several digits could be optimized away into a bigger digit.
*   Comprehensive support for various number systems:
    *   Decimal (base 10)
    *   Binary (base 2)
    *   Hexadecimal (base 16)
    *   Octal (base 8)
    *   Custom "base n" systems
*   Generating the German word for any given number
*   Cross-platform availability:
    *   Windows
    *   Android

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
            path="https://ucarecdn.com/7ff7d6d6-e097-40d1-a531-fb6207b25651/stellenwerttafelplusbinaryscreenshot.avif",
            width="100%",
            
            description="*Stellenwerttafel Plus* binary mode screenshot",
            radius="1rem",
            figcaption="true",
            itemprop="screenshot",
            imageWidthPx=1920,
            imageHeightPx=1080
        ) }}
    </div>
    <div>
        {{ image(
            path="https://ucarecdn.com/394b018b-1655-4ebe-884e-23d263e6ef11/stellenwerttafelplusdecimalscreenshot.avif",
            width="100%",
            
            description="*Stellenwerttafel Plus* decimal mode screenshot",
            radius="1rem",
            figcaption="true",
            itemprop="screenshot",
            imageWidthPx=1920,
            imageHeightPx=1080
        ) }}
    </div>
    <div>
        {{ image(
            path="https://ucarecdn.com/f00b51f6-ba74-4a81-a9df-f4aaa2f04e89/stellenwerttafelplusdecimalscreenshotoverflow.avif",
            width="100%",
            
            description="*Stellenwerttafel Plus* decimal mode with overflow screenshot",
            radius="1rem",
            figcaption="true",
            itemprop="screenshot",
            imageWidthPx=1920,
            imageHeightPx=1080
        ) }}
    </div>
    </div>
</div>


{{ big_heading(name="Availability") }}

---

For the aforementioned reasons *Stellenwerttafel Plus* was never formally released to the public or provided to the school.\
Ultimately, the extra credit was not required, and the school successfully secured funding for iPads, minimizing impact on both sides.

Out of respect for the original author, Ulrich Kortenkamp, and due to the absence of explicit permission for distribution, *Stellenwerttafel Plus* was never made publicly available. The original source code is preserved, though there are no current plans for its release or further development.


{{ big_heading(name="Lessons Learned") }}

---

The development of *Stellenwerttafel Plus* provided insights into educational software development, client-based projects, and intellectual property management:

*   Client-driven development:
    *   Practical experience was gained in understanding, adapting to, and fulfilling specific client requirements.
*   Cross-platform adaptation:
    *   Solidified skills in porting existing application interfaces and logic to multiple distinct operating systems (Windows and Android) from a single codebase.
*   Project documentation:
    *   Gained experience in formally presenting project outcomes and technical capabilities.