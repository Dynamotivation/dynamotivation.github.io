+++
title = "Redmond Notepad"
date = 2026-07-25
description = "A version of the Windows notepad built with Avalonia for macOS and Linux, with find and replace, a status bar and encoding handling."

[taxonomies]
software-categories = ["Application", "Utility", "Upcoming", "Open Source", "macOS", "Linux", "Windows"]
programming-languages = ["C#", "XAML"]

[extra]
# Graphic enrichment
project_title = "Redmond Notepad"
date_label = "Announced"
logo = "https://assets.dynamotivation.com/files/projects/redmond-notepad/logo.svg"
infobox_images = [
    { path = "https://assets.dynamotivation.com/files/projects/redmond-notepad/logo.svg", imageWidthPx = 512, imageHeightPx = 512, description = "Redmond Notepad application icon", radius = "20%" }
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
    { question = "Why does text navigation differ on macOS?", answer = "Windows and macOS disagree about what Home, End and the word-jump modifiers do. Redmond Notepad defaults to the Windows behaviour and lets you switch to the macOS one." },
    { question = "Can I download it?", answer = "Not yet. Nothing has been released." }
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

***Redmond Notepad*** is a version of the Windows notepad built with Avalonia for macOS and Linux. It is one of the first two applications in the [Port Redmond](/portfolio/software/port-redmond/) project, together with [Redmond Calculator](/portfolio/software/redmond-calculator/). It has find and replace, a status bar and encoding handling.

## Scope

---

Plain text editing, with:

*   Find and replace, with wrap-around
*   Word wrap toggle
*   Status bar with line and column, zoom level, line endings and encoding
*   Encoding and line-ending handling

Tabs are not implemented yet.

## Text navigation

---

Windows and macOS handle text navigation differently:

*   On Windows, <kbd>Ctrl</kbd> + <kbd>←</kbd> and <kbd>→</kbd> move by word, and <kbd>Home</kbd> and <kbd>End</kbd> move the caret to the ends of the line.
*   On macOS, <kbd>⌥</kbd> + <kbd>←</kbd> and <kbd>→</kbd> move by word, <kbd>⌘</kbd> + <kbd>←</kbd> and <kbd>→</kbd> go to the line ends, and <kbd>Home</kbd> and <kbd>End</kbd> scroll the document without moving the caret at all.

Redmond Notepad defaults to the Windows behaviour and offers the macOS one as a setting. On Linux it also supports middle-click paste from the PRIMARY selection.

## Status

---

Nothing has been released yet, and there is no download.
