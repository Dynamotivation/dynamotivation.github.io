+++
title = "Redmond Notepad"
date = 2026-07-25
description = "The Windows notepad rebuilt on Avalonia for macOS and Linux, keeping its find and replace behaviour, status bar and encoding handling."

[taxonomies]
software-categories = ["Application", "Utility", "Upcoming", "Open Source", "macOS", "Linux", "Windows"]
programming-languages = ["C#", "XAML"]

[extra]
# Graphic enrichment
project_title = "Redmond Notepad"
date_label = "Announced"
logo = "/images/placeholder/iconBackground.svg"
infobox_images = [
    { path = "/images/placeholder/iconBackground.svg", imageWidthPx = 512, imageHeightPx = 512, description = "Redmond Notepad placeholder icon, artwork still to come", radius = "20%" }
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
    { question = "Does it handle line endings and encodings like Windows notepad?", answer = "That is the intent. CRLF and LF are both handled, the detected encoding is shown in the status bar, and files are saved in the encoding they were opened with unless you change it." },
    { question = "Why does text navigation differ on macOS?", answer = "Windows and macOS disagree about what Home, End and the word-jump modifiers do. Redmond Notepad defaults to the Windows behaviour and lets you switch to the macOS one, because this is the difference most likely to trip up someone editing text on their first day." },
    { question = "Can I download it?", answer = "Not yet. Builds exist and run, but nothing has been published for general use." }
]

+++

{% infobox(title="Redmond Notepad") %}
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

***Redmond Notepad*** is a rebuild of the Windows notepad for macOS and Linux, and one of the first two applications in the [Port Redmond](/portfolio/software/port-redmond/) project. It keeps the find and replace behaviour, the status bar and the encoding handling of the original.

## Scope

---

Plain text editing, kept deliberately plain:

*   Find and replace, with the same wrap-around behaviour
*   Word wrap toggle
*   Status bar with line and column, zoom level, line endings and encoding
*   Encoding and line-ending handling that survives a round trip

Tabs are not implemented. The Windows notepad gained them recently enough that they are not yet anyone's muscle memory.

## Text navigation

---

This is where Windows and macOS disagree most sharply, and it is the difference most likely to be noticed within the first minute of editing:

*   On Windows, <kbd>Ctrl</kbd> + <kbd>←</kbd> and <kbd>→</kbd> move by word, and <kbd>Home</kbd> and <kbd>End</kbd> move the caret to the ends of the line.
*   On macOS, <kbd>⌥</kbd> + <kbd>←</kbd> and <kbd>→</kbd> move by word, <kbd>⌘</kbd> + <kbd>←</kbd> and <kbd>→</kbd> go to the line ends, and <kbd>Home</kbd> and <kbd>End</kbd> scroll the document without moving the caret at all.

Redmond Notepad defaults to the Windows behaviour and offers the macOS one as a setting. On Linux it also supports middle-click paste from the PRIMARY selection, which has no Windows equivalent and is easier to leave enabled than to explain.

## Status

---

Builds exist and run. Nothing has been published for general use, and there is no download yet.
