# Port Redmond — assets

Every image on the Port Redmond pages is a stand-in. Each filename contains
`__PLACEHOLDER__`, and the pre-commit hook refuses any commit while a file
carrying that token exists in the working tree, or while any source file still
references one.

To commit before they are replaced: `ALLOW_PLACEHOLDERS=1 git commit`.

## What is in the repository now

These are real screenshots of the Windows applications, pulled from Wikimedia
Commons so the layouts can be judged against something that looks like the
finished thing rather than a grey box.

| File | Shows | Source | Licence |
| --- | --- | --- | --- |
| `__PLACEHOLDER__-windows-calculator.png` | Windows 11 Calculator, English, light | [Commons](https://commons.wikimedia.org/wiki/File:Calculator_on_Windows_11.png) | MIT |
| `__PLACEHOLDER__-windows-notepad.png` | Windows 11 Notepad, English, light | [Commons](https://commons.wikimedia.org/wiki/File:Windows_Notepad_.LOG_file.png) | CC BY-SA 4.0, by Yuika Izumi |

Neither is suitable for release. They are pictures of Microsoft's applications,
not of yours, and the Notepad one carries a share-alike licence that would
require attribution and would place conditions on the page around it.

## What has to replace them

Screenshots of **Redmond Calculator** and **Redmond Notepad**, taken on
**Windows**, so a visitor can compare them against the applications they already
use.

- Both windows at the same scale, shot at 2× and downscaled.
- Light theme, matching each other.
- No personal data: no real file names, paths or account names.
- PNG is fine; AVIF or WebP preferred to match the rest of the site.
- Minimum 1600 px wide for the pair, so they survive a HiDPI display.

The applications are meant to be indistinguishable from the Windows originals,
so these screenshots are the proof of the entire project. They are worth taking
carefully.

## Still outstanding

Application icons for Redmond Calculator and Redmond Notepad. All three pages
currently use the site's existing `images/placeholder` mark, which is a real
asset rather than a placeholder file, so the pre-commit hook cannot catch this
one. It has to be remembered.

Icons should be 512 × 512, supplied as full squares without pre-rounded corners,
since the site applies its own large radius to make them read as app icons.
