"""Checks data/releases.json before the site is built.

Run from the repository root: python scripts/validate_releases.py
Exits with status 1 and prints one line per problem when the file is invalid.
"""

import datetime
import json
import re
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
RELEASES = ROOT / "data" / "releases.json"
SOFTWARE = ROOT / "content" / "portfolio" / "software"

VERSION = re.compile(r"^\d+\.\d+(\.\d+)?([-+][0-9A-Za-z.+-]+)?$")
DATE = re.compile(r"^\d{4}-\d{2}-\d{2}$")
ALLOWED_KEYS = {"version", "date", "highlights"}


def validate(data):
    errors = []
    if not isinstance(data, dict):
        return ["top level must be an object keyed by page slug"]

    for slug, entry in data.items():
        where = f"{slug}"
        if not (SOFTWARE / f"{slug}.md").is_file():
            errors.append(f"{where}: no content/portfolio/software/{slug}.md")
        if not isinstance(entry, dict) or set(entry) != {"releases"}:
            errors.append(f'{where}: expected exactly one key, "releases"')
            continue
        releases = entry["releases"]
        if not isinstance(releases, list):
            errors.append(f"{where}: releases must be a list")
            continue

        seen = set()
        previous = None
        for index, release in enumerate(releases):
            at = f"{where}[{index}]"
            if not isinstance(release, dict):
                errors.append(f"{at}: release must be an object")
                continue
            unknown = set(release) - ALLOWED_KEYS
            if unknown:
                errors.append(f"{at}: unknown keys {sorted(unknown)}")

            version = release.get("version")
            if not isinstance(version, str) or not VERSION.match(version):
                errors.append(f"{at}: version must look like 1.2 or 1.2.3, got {version!r}")
            elif version in seen:
                errors.append(f"{at}: duplicate version {version}")
            else:
                seen.add(version)

            date = release.get("date", "")
            if date != "":
                if not isinstance(date, str) or not DATE.match(date):
                    errors.append(f"{at}: date must be YYYY-MM-DD, got {date!r}")
                else:
                    try:
                        parsed = datetime.date.fromisoformat(date)
                    except ValueError:
                        errors.append(f"{at}: not a real date: {date}")
                    else:
                        if previous is not None and parsed > previous:
                            errors.append(f"{at}: releases must be newest first ({date} is after the release before it)")
                        previous = parsed

            highlights = release.get("highlights", [])
            if not isinstance(highlights, list) or not all(
                isinstance(h, str) and h.strip() for h in highlights
            ):
                errors.append(f"{at}: highlights must be a list of non-empty strings")
    return errors


def main():
    try:
        data = json.loads(RELEASES.read_text(encoding="utf-8"))
    except (OSError, json.JSONDecodeError) as error:
        print(f"{RELEASES}: {error}")
        return 1
    errors = validate(data)
    for error in errors:
        print(error)
    if errors:
        return 1
    print(f"releases.json OK ({len(data)} pages)")
    return 0


if __name__ == "__main__":
    sys.exit(main())
