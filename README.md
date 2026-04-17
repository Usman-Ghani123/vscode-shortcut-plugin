# Shortcut Finder

A VS Code extension that lets you find keyboard shortcuts by describing what you want to do.

Type `close all tabs` → see `Ctrl+K  Ctrl+W` → hit Enter to copy it. That's it.

## Getting started (development)

```bash
cd vscode-shortcut-finder
npm install
```

Then open the folder in VS Code and press `F5`. A new "Extension Development Host" window opens with the extension loaded.

In that window:

1. Run **Shortcut Finder: Search Shortcuts** from the Command Palette (`Ctrl+Shift+P`), or press `Ctrl+Alt+K` (`Cmd+Alt+K` on Mac).
2. Start typing a description — "close tab", "format", "multi cursor", whatever.
3. Pick a result. The shortcut is copied to your clipboard and the description is shown in a toast.

## How the search works

The QuickPick does fuzzy matching against three things for every shortcut:

- **label** — the human description ("Close All Tabs")
- **description** — the formatted keybinding itself ("Ctrl+K  Ctrl+W"), useful if you half-remember the keys
- **detail** — the category plus hidden keywords ("File • close everything")

Keywords in `src/shortcuts.ts` let you add alternate phrasings without cluttering the UI.

## Adding shortcuts

Open `src/shortcuts.ts` and append to the `SHORTCUTS` array. Each entry has:

- `description` — what shows in the picker
- `win` — Windows/Linux binding (use `|` between chords, `+` between modifiers)
- `mac` — macOS binding
- `category` — free-form grouping
- `keywords` — optional array, boosts fuzzy match without showing in the label

Example:

```ts
{
  description: "Fold All",
  win: "ctrl+k|ctrl+0",
  mac: "cmd+k|cmd+0",
  category: "Editing",
  keywords: ["collapse", "hide code"],
}
```

## Packaging

```bash
npm install -g @vscode/vsce
vsce package
```

Produces a `.vsix` you can install via **Extensions → … → Install from VSIX**.

## Next steps for v2

- Detect the user's custom keybindings from `keybindings.json` and flag overrides
- Add extension-contributed shortcuts (Git, Python, Jupyter, etc.)
- Natural-language search via the Claude API for descriptions that don't match any keyword
