This file provides guidelines to agents working on this repository.
The rules in here are "house rules" and should be followed at all times unless the user instructs otherwise. You are allowed to suggest breaking rules where it makes sense.

# Description
This repository contains the css, html templates, js and other assets for a website build using the zola static site generator.

# Code guidelines
Any and all changes should be accomplished using the vast templating system in zola, consisting of templates, macros and shortcodes. Be mindful to not confuse it with full blown tera. The syntax is similar, in some areas even compatible. When unsure consult the zola documentation.
Changes should mainly consist of html, css and config changes. You are to avoid js wherever possible. There are lots of advanced CSS features that have reached baseline support already. When considering a feature, search the web for examples powered "using css only" or "without js". Consult MDD to confirm a features availability.
JS should only be used to enhance the experience.

# Design guidelines
The goal of this website is to be simple in terms of appearance with just the right amount of being fun and bubbly without looking either too bland or too corporate. Rounded corners and vibrant yet pastel colors are commonplace.
Always consult with existing CSS files. Especially consider the CSS root and properties.

# Building and running
To test your changes make sure to run the ".\zola build" command. Do not run ".\zola serve".
To make sure your changes are actually reflected, read the "public" directory which contains the build output.