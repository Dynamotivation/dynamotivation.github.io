+++
title = "Redmond Calculator"
date = 2026-07-25
description = "The Windows calculator rebuilt on Avalonia for macOS and Linux, with the same keypad layout, the same modes and the same keyboard shortcuts."

[taxonomies]
software-categories = ["Application", "Utility", "Upcoming", "Open Source", "macOS", "Linux", "Windows"]
programming-languages = ["C#", "XAML"]

[extra]
# Graphic enrichment
project_title = "Redmond Calculator"
date_label = "Announced"
logo = "/images/placeholder/iconBackground.svg"
infobox_images = [
    { path = "/images/placeholder/iconBackground.svg", imageWidthPx = 512, imageHeightPx = 512, description = "Redmond Calculator placeholder icon, artwork still to come", radius = "20%" }
]
screenshot_urls = []

# JSON-LD SEO for Software
operatingSystem = "macOS, Linux, Windows"
release_notes = "In development. Not yet released."
programming_language = "C#, XAML"
development_environment = "Avalonia UI, .NET"
license = "Open source, licence not yet finalised"
availability = "PreOrder"
application_category = "UtilitiesApplication"
price_usd = 0
#aggregate_rating = []

# FAQ
questions = [
    { question = "Which calculator modes are supported?", answer = "Standard, scientific and programmer, matching the modes offered by the Windows calculator." },
    { question = "Do the keyboard shortcuts match Windows?", answer = "Yes by default. Mode switching, memory keys and operators use the same bindings. On macOS you can choose whether those bindings stay on Ctrl or move to Command." },
    { question = "Can I download it?", answer = "Not yet. Builds exist and run, but nothing has been published for general use." }
]

+++

{% infobox(title="Redmond Calculator") %}
{{ infobox_images() }}
<dl>
    <dt>Part of</dt>
    <dd><a href="/portfolio/software/port-redmond/">Port Redmond</a></dd>
    <dt>Availability</dt>
    <dd>In development</dd>
    <dt>Development Environment</dt>
    <dd>Avalonia UI<br>.NET</dd>
    <dt>Written in</dt>
    <dd>C#<br>XAML</dd>
    <dt>Operating system(s)</dt>
    <dd>macOS<br>Linux<br>Windows</dd>
    <dt>Source code</dt>
    <dd>Open source<br>Licence not finalised</dd>
</dl>
{% end %}

***Redmond Calculator*** is a rebuild of the Windows calculator for macOS and Linux, and one of the first two applications in the [Port Redmond](/portfolio/software/port-redmond/) project. It reproduces the keypad layout, the calculation modes and the keyboard shortcuts of the original, on a codebase that runs outside Windows.

## Scope

---

The application covers the three modes people actually reach for:

*   Standard
*   Scientific
*   Programmer

Unit and date conversion are not implemented yet. They are the parts of the Windows calculator least tied to muscle memory, so they sit behind the core modes in priority.

## Keyboard behaviour

---

The shortcut set matches Windows by default, including the mode switches, the memory keys and the operator bindings.

On macOS this creates the one genuinely contested decision in the whole project: whether <kbd>Ctrl</kbd> should stay <kbd>Ctrl</kbd> or become <kbd>⌘</kbd>. Both are defensible, so both are available, and the choice is a setting rather than an opinion baked into the build. See [platform integration](/portfolio/software/port-redmond/) for the full list.

## Status

---

Builds exist and run. Nothing has been published for general use, and there is no download yet.
