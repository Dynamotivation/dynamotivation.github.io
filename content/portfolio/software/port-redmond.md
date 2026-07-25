+++
title = "Port Redmond"
date = 2026-07-25
description = "The Windows apps you already know, rebuilt to run on macOS and Linux. Free, open source, no account and no Copilot."

# Custom splash template. A page's own `template` always wins over the
# `page_template` set by the parent section, so this one page opts out of the
# wiki layout while every other software project keeps it.
# This must stay a top-level key: Zola ignores `template` inside [extra].
template = "sections/software/port-redmond.html"

[taxonomies]
software-categories = ["Application", "Suite", "Upcoming", "Open Source", "Windows", "macOS", "Linux"]
programming-languages = ["C#", "XAML"]

[extra]
project_title = "Port Redmond"
alternate_name = "Port Redmond Project"
date_label = "Announced"
logo = "/images/placeholder/iconBackground.svg"
infobox_images = []
screenshot_urls = []

# JSON-LD SEO for Software
operatingSystem = "macOS, Linux, Windows"
release_notes = "In development. Not yet released."
programming_language = "C#, XAML"
development_environment = "Avalonia UI, .NET"
license = "Free and open source"
availability = "PreOrder"
application_category = "UtilitiesApplication"
price_usd = 0
#aggregate_rating = []

# ---- Page content ----
# The whole page is built from the fields below. There is no markdown body:
# this is a splash page rather than an article, so adding an application or a
# platform difference is an edit here rather than in HTML.

tagline = "The Windows apps you already know, on macOS and Linux."
lede = "Changing operating system means relearning a hundred small things at once. Port Redmond removes some of them."
intro = "Windows ships its core applications in a form that cannot leave Windows. Port Redmond rebuilds them so they run on macOS and Linux, looking and behaving the way you already expect. There is no account to sign in to and no Copilot button in the corner. Where your new desktop does things differently, you choose which way you prefer."
colophon = "Port Redmond is an independent, open source project. It is not affiliated with, endorsed by or sponsored by Microsoft. Windows is a trademark of Microsoft Corporation."

shots = [
    { image = "/images/portRedmond/__PLACEHOLDER__-windows-calculator.png", alt = "Calculator running on Windows 11" },
    { image = "/images/portRedmond/__PLACEHOLDER__-windows-notepad.png", alt = "Notepad running on Windows 11" },
]

claims = [
    { title = "Familiar by default", body = "Same layout, same commands, in the same places. Nothing to relearn on the first day." },
    { title = "At home on your new desktop", body = "Menus, window buttons and rounded corners can follow the platform you moved to instead. One setting each." },
    { title = "Your shortcuts come with you", body = "Keep pressing Ctrl, or let it become Command. You decide which habit is worth keeping." },
    { title = "No accounts, no Copilot", body = "Nothing to sign in to, nothing to agree to, and no assistant offering to rewrite your text. Open it and use it." },
]

differences = [
    { platform = "macOS", rows = [
        { from = "Menus inside the window", to = "Menu bar at the top of the screen" },
        { from = "Window buttons on the right", to = "Window buttons on the left" },
        { from = "Ctrl for shortcuts", to = "Command for shortcuts" },
        { from = "Dialogs centred on screen", to = "Dialogs attached to the window" },
        { from = "Asks before closing unsaved work", to = "Saves as you go" }
    ] },
    { platform = "Linux", rows = [
        { from = "Menus inside the window", to = "A header bar with a single menu button" },
        { from = "Minimise, maximise and close", to = "Only the buttons your desktop shows" },
        { from = "Windows corner rounding", to = "Whatever your desktop uses" },
        { from = "Paste from the clipboard", to = "Middle-click to paste as well" }
    ] },
]

apps = [
    { name = "Redmond Calculator", page = "/portfolio/software/redmond-calculator/", icon_bg = "/images/placeholder/iconBackground.svg", icon_fg = "/images/placeholder/iconForeground.svg", summary = "Standard, scientific and programmer modes, with the keypad and shortcuts in the places you expect." },
    { name = "Redmond Notepad", page = "/portfolio/software/redmond-notepad/", icon_bg = "/images/placeholder/iconBackground.svg", icon_fg = "/images/placeholder/iconForeground.svg", summary = "Plain text editing, with the same find and replace, the same status bar and the same encoding handling." },
]

# Also feeds the FAQ structured data inherited from the software page template.
questions = [
    { question = "What is Port Redmond, in one sentence?", answer = "A set of free applications that recreate the everyday Windows tools on macOS and Linux, so that switching operating system costs you less of what you already know." },
    { question = "Which applications are there?", answer = "Calculator and Notepad are being built now. More will follow, and each one gets its own page here when it is ready." },
    { question = "Can I download it yet?", answer = "No. Nothing has been released. This page exists to announce the project rather than to distribute it." },
    { question = "Is there any Copilot or AI in these?", answer = "No. There is no assistant, no suggestions, and no button in the corner offering to rewrite what you typed. The applications do the job they are named after and nothing else." },
    { question = "Do I need an account?", answer = "No. There is nothing to sign in to, nothing to register, and no prompt on first run asking you to create anything. Install it and it works." },
    { question = "Does it cost anything?", answer = "No. Every application is free, and the source code is open for anyone who wants to read or change it." },
    { question = "Will these look out of place on my Mac or Linux desktop?", answer = "Only if you want them to. By default they look the way they do on Windows. Every place where your new desktop does things differently is offered as a setting, so you can make each application feel as native or as familiar as you like." },
    { question = "Why rebuild the applications instead of running the Windows versions?", answer = "The Windows versions are built with technology that only works on Windows, so they cannot simply be copied across. These are new builds written to run on all three systems from the same source." },
    { question = "Do my keyboard shortcuts still work?", answer = "Yes. They match Windows out of the box. On a Mac you can also switch them over to the Command key, which is what other Mac applications use." },
    { question = "Are these official Microsoft applications?", answer = "No. Port Redmond is an independent project with no connection to Microsoft. It follows the interface design guidelines Microsoft publishes openly, which is what lets the applications look the way they do." },
    { question = "Will my files work the same way?", answer = "Yes. Files are saved in the same formats, and things like text encoding and line endings are handled the way Windows handles them, so documents move between machines without surprises." },
    { question = "Some things are not offered as a choice. Why?", answer = "A few differences are not a matter of taste. Where your files are stored, how the system file picker opens, and how the applications are installed all follow your new platform, because doing otherwise would make them behave badly on it." },
    { question = "How do I install them once they are released?", answer = "In the normal way for your system: an application bundle on macOS, and the usual package formats on Linux. There will be no unfamiliar installer to work through." },
    { question = "When will it be finished?", answer = "There is no date yet. Calculator and Notepad both run today, but neither is ready for other people to rely on." },
]

+++
