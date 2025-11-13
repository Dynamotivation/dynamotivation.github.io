+++
title = "BenPlaysGames Soundboard"
date = 2018-10-10
description = "An Android soundboard for YouTuber and Twitch streamer BenPlaysGames."

[extra]
logo = "https://ucarecdn.com/6d67fb50-8a57-4fb5-bc12-8ab6b20857b4/benplaysgamessoundboardlogoremastered.avif"
infobox_images = [
    { path = "https://ucarecdn.com/6d67fb50-8a57-4fb5-bc12-8ab6b20857b4/benplaysgamessoundboardlogoremastered.avif", imageWidthPx = 512, imageHeightPx = 512, description = "*BenPlaysGames Soundboard* new logo", radius = "20%" },
    { path = "https://ucarecdn.com/5bc20435-afe3-4f75-88eb-52a653bdcb0b/BenPlaysGamesSoundboard.avif", imageWidthPx = 512, imageHeightPx = 512, description = "*BenPlaysGames Soundboard* original logo", radius = "20%" }
]
available_on_android = true
available_on_windows = false
available_on_mac = false
available_on_linux = false
available_on_ios = false

alternate_title = "Ben Plays Games Soundboard"

application_category = "EntertainmentApplication"

price_usd = 0

screenshot_urls = [
    "https://ucarecdn.com/0ab91ca7-92ce-4992-8473-ef9bcf1e10f8/benplaysgamessoundboardnormal.avif",
    "https://ucarecdn.com/3be5b8cd-8601-4c9e-949a-6b80a209e89d/benplaysgamessoundboardlive.avif",
    "https://ucarecdn.com/e68a4eaa-d8e4-40c2-84ff-d59aabd4b236/benplaysgamessoundboardfavs.avif",
    "https://ucarecdn.com/20c4aca4-ac43-4432-ab90-e96ced20efea/benplaysgamessoundboardlandscapetablet.avif"
]

# SEO
operatingSystem = "Android"
release_notes = "Unreleased"
programming_language = "Java"
development_environment = "Android Studio"
license = "Closed Source (Source Code Decompiled)"
aggregate_rating = { rating_value = 4.5, rating_count = 8, best_rating = 5, worst_rating = 1, rating_explanation = "Based on Google Play Console data of 10th October 2025" }
availability = "Discontinued"
+++

{% infobox(title="BenPlaysGames Soundboard") %}
{{ infobox_images() }}
<dl>
    <dt>Availability</dt>
    <dd>Delisted<br>Formerly on Google Play</dd>
    <dt>Initial completion</dt>
    <dd>October 10, 2018</dd>
    <dt>Development environment</dt>
    <dd>Android Studio</dd>
    <dt>Written in</dt>
    <dd>Java</dd>
    <dt>Operating system(s)</dt>
    <dd>Android</dd>
    <dt>Source code</dt>
    <dd>Lost<br>Closed Source</dd>
</dl>
{% end %}

***BenPlaysGames Soundboard*** was the second soundboard application for Android developed by Dynamotivation and published by Mr. Unp3rf3ct in late 2018. This time it featured sound clips of the UK based YouTuber [BenPlaysGames](https://www.youtube.com/@BensPlaysGames) which Dynamotivation befriended before age 16. Hence this time the stage was set for a release without copyright troubles.


{{ big_heading(name="Development") }}

---

The development of the first version of the *BenPlaysGames Soundboard* happened in around a day in October 2018. Rather than reuse the limited codebase of the previous soundboard [*GerMemz*](/portfolio/software/germemz/), the decision was made to base the entire project around an Apache-2.0 licensed template application developed [first](https://github.com/csabatini/android-Soundboard) by [Caleb Sabatini](https://github.com/csabatini) and having [its UI built](https://github.com/firekesti/Jay-Soundboard) by [Kate "firekesti" Kelly](https://github.com/firekesti).

The app was developed entirely free of charge and published with approval, but without direct involvement of the Ben.


{{ big_heading(name="Features") }}

---

Drawing more parallels with [*GerMemz*](/portfolio/software/germemz/), the template also relied exclusively on Java in an Android Studio project. Therefore, given the previous experience, it was not hard to modify. While the first version only included library updates, minor sorting state bug fixes, new sounds and a differently themes UI; the second version expanded upon the template by incorporating a livestream indicator utilizing the youtube API. What ordinarily used to be a simple channel link, turned into an "on the air" indicator during live streams.

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
        description="*BenPlaysGames Soundboard* screenshot.",
        radius="1rem",
        figcaption="true",
        imageWidthPx=1080,
        imageHeightPx=1920
    ) }}
    </div>
    <div>
    {{ screenshot(
        index=1,
        width="100%",
        description="*BenPlaysGames Soundboard* screenshot with live stream indicator.",
        radius="1rem",
        figcaption="true",
        imageWidthPx=1080,
        imageHeightPx=1920
    ) }}
    </div>
    <div>
    {{ screenshot(
        index=2,
        width="100%",
        description="*BenPlaysGames Soundboard* favorites view screenshot.",
        radius="1rem",
        figcaption="true",
        imageWidthPx=1080,
        imageHeightPx=1920
    ) }}
    </div>
</div>

<div class="blogImageList" id="singleLandscapeTabletScreenshot">
    <style>
        #singleLandscapeTabletScreenshot {
            width: 70%;
            margin-left: auto;
            margin-right: auto;
            min-width: 35rem;
        }
    </style>
    <style>
        @media (max-width: 40rem) {
            #blogImageList {
                width: 100%;
            }
        }
    </style>
    <div>
    {{ screenshot(
        index=3,
        width="100%",
        description="*BenPlaysGames Soundboard* screenshot in landscape mode on a table.",
        radius="1rem",
        figcaption="true",
        imageWidthPx=3072,
        imageHeightPx=1920
    ) }}
    </div>
</div>


{{ big_heading(name="Challenges") }}

---

There were only 2 real challenges this time around, both of which boiled down to waiting on Googles confirmation:

* Getting granted access to the YouTube Data API
* Finding out what mild foul language to censor store listing content


{{ big_heading(name="Availability") }}

---

The *BenPlaysGames Soundboard* was a well received, low effort gag application for a small circle of friends and audience members. It was mainly used in lieu of a proper stream deck. Availability was limited to Android as this is what most participants used at the time.


{{ big_heading(name="Lessons Learned") }}

---

Since this was a quick and short lived project there really was not much to be learned. It mainly marked a turning point away from the "solo developed from the ground up"-mindset which would eventually culminate in [*Stellenwerttafel Plus*](/portfolio/software/stellenwerttafel-plus/).