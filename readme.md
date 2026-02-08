This repository includes a git pre-commit hook that automatically validates frontmatter in certain direcotires.
The hook is already installed at `.githooks/pre-commit`. It will automatically run when you commit changes.

A recent version of Python 3 is required to run the hook, additionally `py` is needed on Windows. No pip dependencies are needed.

**Hook not running?**
```bash
git config core.hooksPath
# Should output: .githooks/
# If not, change to .githooks/ and try again
```