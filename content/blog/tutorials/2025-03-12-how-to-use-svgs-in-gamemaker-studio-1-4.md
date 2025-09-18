+++
title = "How to Use SVG Vector Graphics in any Version of GameMaker + Studio 1.4 & 2"
description = "This tutorial will teach you how to convert SVG files to SWF files for use in GameMaker, GameMaker Studio 2, and GameMaker: Studio 1.4"
+++

GameMaker has supported vector graphics for a long time, but few people know how to use them due to the ancient format we are stuck with.\
So let's catch you up to speed on how to use vector art in all versions of GameMaker I have used!

Let's think back a decade. The year is 2015 and Adobe Flash Games are still all the hype online.\
Naturally, in such a proprietary environment, the decision was made to use a proprietary format for vector graphics, SWF files.\
Faced with Flash on the front of browser games, the creators of GameMaker decided it best to incorporate the same file format for their handling of vector graphics, but there is a catch.\
Normal SWF files could include action scripts, layers, buttons, and a whole bunch more features that don't work in GameMaker. They are basically just glorified SVGs. And what do you know?\
Here we are in 2025 with SVGs as the clear mainstay for vector graphics with SWFs having fallen into obscurity.

Thankfully the process has not changed over the years, so this should work for you wether you are using **GameMaker Studio: 1.4**, **GameMaker Studio 2** or the latest version of **GameMaker**.

{% step(name="Step 1a: Adobe Illustrator or Adobe Animate", description="You can still use the official Adobe Tools (Illustrator and Animate) to create SWF files") %}

For the sake of completion, let's get the obvious approach out of the way:\
As it stands, you can still use the official Adobe Tools (Illustrator and Animate) to create SWF files, however, if this will stay the case is up for debate:

*"Although you can’t edit SWF files directly, you can import them into Adobe Animate. It’s worth noting that if imported, you may miss critical data, such as sound. Alternatively, Flash players may enable simple edits if you want to trim an existing file, but these aren’t officially supported."*\
\- Adobe 2025 ([https://www.adobe.com/creativecloud/file-types/video/container/swf.html](https://www.adobe.com/creativecloud/file-types/video/container/swf.html))

It will be the easiest way if you still hold one of the old licenses or have access to the software in *other ways*.

However, I assume you reading this means you'd rather just use modern SVG tooling and convert your result.\
So let me show you how to convert SVGs to the SWF format without all the paid Adobe tools.

{% end %}

{% step(name="Step 1b: Preparations", description="Use Inkscape or another tool to create your SVG and prepare it for conversion") %}

First of all, use **Inkscape** or something else to create your SVG.
Set the canvas size to the size you'd want the sprite to be in GameMaker. Make sure nothing is outside of the canvas.
When saving the file, make sure to save a copy as a **plain / normal SVG**, **not** as an optimized or "Inkscape SVG" this ensures the other tools understand your file.

{{ image(path="https://ucarecdn.com/99d9b5b8-ea3d-490e-bff4-dd3e0bf5a621/saveAsPlainSvg.webp", widthPixels="363", heightPixels="395", scalePercentage="50", description="Selecting the correct export format in Inkscape") }}
*Note how almost all file types end in .svg, yet the difference is in their metadata, encoding, and compression.*

{% end %}

{% step(name="Step 2a: reaConverter Online", description="Use reaConverter online to convert your SVG to an SWF file") %}

Next, use reaConverter online to convert your SVG to an SWF file.\

{{ image(path="https://ucarecdn.com/c97b7d28-d37f-4378-880c-90a2596cb8d2/reaConverterWeb.webp", widthPixels="468", heightPixels="473", scalePercentage="50", description="Screenshot from the reaConverter online website.") }}

Normally I'd advise you NOT to use online converters for data protection reasons, but here it's by far the easiest and most straightforward way. So go ahead.
I've tried out dozens of websites, but there's only one that actually works - when it works!

As reaConverter offers more services for free online than in their free tier software, they may discontinue it any day.

If it works for you, skip straight to [step 3](#step-3-restoring-transparency-with-jpexs).

{% end %}

{% step(name="Step 2b: reaConverter for Windows", description="Use the paid or trial version of reaConverter for Windows to convert your SVG to an SWF file") %}

If your employer prohibits the use of online converters or it gets discontinued, you can always settle for their paid non-Adobe option (Currently reaConverter 7 for Windows).

The software comes in editions, you'll need at least the Standard Edition of reaConverter 7 for this to work from my limited experiments. Older versions may also work.

**A free trial is available**

Once done, continue with [step 3](#step-3-restoring-transparency-with-jpexs).

{% end %}

{% step(name="Step 2c: SVG2SWF", description="Use the open-source SVG2SWF tool to convert your SVG to an SWF file") %}

This method relies on the old free and open-source software SVG2SWF.\
[https://sourceforge.net/projects/svg2swf/files/svg2swf/0.5/](https://sourceforge.net/projects/svg2swf/files/svg2swf/0.5/)

Outside of being free indefinitely, it offers no benefit over the prior methods.\
Sounds simple enough right? You'd be **wrong**.\
This program is *very* old, but still works with a catch. It's made for 32bit Windows, specifically Windows XP 32bit.

To save yourself the headache of trying out other Windows versions, set up a Windows XP 32bit VM. There are plenty of tutorials for setting up a VM. If you are on Windows, use VMware Workstation for simplicity.\
**Remember to not connect Windows XP VMs to the internet**

When that's done, transfer the tool and SVG file onto it and run the following command with your paths:

*svg2swf.exe input.svg output.swf*\
input.svg = path to your file (has to exist)\
output.swf = path to the output file (will be created)

{% end %}

{% step(name="Step 3: Restoring Transparency with JPEXS", description="Use JPEXS to restore native transparency to your SWF file") %}

You'll have to install JPEXS on your PC for this to work.
[https://github.com/jindrapetrik/jpexs-decompiler/releases](https://github.com/jindrapetrik/jpexs-decompiler/releases)

Just import your SWF into JPEXS to delete the added background layer(s) and save/recompile the SWF file.

{{ image(path="https://ucarecdn.com/b3ca8a4e-08be-447f-85e0-b9e399bf1309/jpexsRestoreTransparency.webp", widthPixels="1000", heightPixels="700", scalePercentage="100", description="Screenshot from JPEXS.") }}

{% end %}

{% step(name="Step 4: Importing into GameMaker", description="Import your SWF file into GameMaker and enable anti-aliasing") %}

Please note, you will need to use the *draw_set_swf_aa_level* and *draw_enable_swf_aa* functions in GameMaker to enable anti-aliasing of your SWFs, otherwise, they will look very jagged.

---

draw_set_swf_aa_level(1);\
draw_enable_swf_aa(true);

---

For more information consult the official documentation:\
[https://manual.gamemaker.io/monthly/en/Settings/Texture_Information/Non-Bitmap_Sprites.htm](https://manual.gamemaker.io/monthly/en/Settings/Texture_Information/Non-Bitmap_Sprites.htm)

{% end %}

And that's all I have to teach you about using SVGs in GameMaker.

Feel free to reach out if you know of a better way or if this becomes outdated!