This file provides guidelines to agents working on this repository.
The rules in here are "house rules" and should be followed at all times unless the user instructs otherwise. You are allowed to suggest breaking rules where it makes sense.

# Description
This repository contains the css, html templates, js and other assets for a website build using the zola static site generator.

# Repository structure
- `content/` contains the markdown files for the website, which are rendered into html by zola. They can contain front matter in TOML format, which is used to provide metadata and configuration for the page.
- `data/` contains json files which are used to provide data for the templates.
- `static/` contains static assets such as css, js and images. These are copied as-is to the output directory during the build process. This also allows for the creation of custom html pages outside of the templating system, which can be useful for soft redirects of moved urls and other edge cases.
- `templates/` contains the html templates used to render the pages. These can include macros and shortcodes, which are reusable components that can be included in the markdown files or other templates.

# Code guidelines
Any and all changes should be accomplished using the vast templating system in zola, consisting of templates, macros and shortcodes. Be mindful to not confuse it with full blown terra. The syntax is similar, in some areas even compatible. When unsure consult the zola documentation.
Changes should mainly consist of html, css and config changes. You are to avoid js wherever possible. There are lots of advanced CSS features that have reached baseline support already. When considering a feature, search the web for examples powered "using css only" or "without js". Consult MDD to confirm a features availability.
JS should only be used to enhance the experience.

# Design guidelines
The goal of this website is to be simple in terms of appearance with just the right amount of being fun and bubbly without looking either too bland or too corporate. Rounded corners and vibrant yet pastel colors are commonplace.
Always consult with existing CSS files. Especially consider the CSS root and properties.

When introducing new values into CSS, use properly named variables instead of magic numbers within the css file.
Reuse existing variables within a file where it makes sense.
Variables that are meant for a specific component should be placed just above it within the css file. If dark mode requires tweaking of said variable, add a dark mode media query override to it instead of introducing a second one specifically for dark mode.

Logo images specifically should have a large border radius as already present in the codebase, since they are meant to look like app icons.
Other elements should have smaller but consistent radii in proximity to each other and within a visual hierarchy of nested cards.

# Reviewing CSS
When asked to review CSS, make sure the above rules are followed. Suggest changes to better align the CSS with above presented ideas before applying them.

# Building and running
Always test your changes.
To test your changes make sure to run the ".\zola build" command. Never run ".\zola serve".
To make sure your changes are actually reflected, read the "public" directory which contains the build output.

# Moving and renaming markdown files
Moving and renaming markdown files affects the url of the page, which can lead to broken links. If you need to move or rename a markdown file, make sure to also create a file in the "static/" directory with the same name as the old url, which contains a meta refresh tag that redirects to the new url. This way, any existing links to the old url will still work and redirect to the new page.