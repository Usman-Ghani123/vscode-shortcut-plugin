import * as vscode from "vscode";
import { SHORTCUTS, Shortcut } from "./shortcuts";

/**
 * Format a keybinding string for display.
 * Internal format uses "|" to separate chords and "+" between modifiers.
 * e.g. "ctrl+k|ctrl+w" → "Ctrl+K  Ctrl+W"
 */
function formatKeybinding(binding: string): string {
  return binding
    .split("|")
    .map((chord) =>
      chord
        .split("+")
        .map((key) => {
          // Capitalize single letters, keep symbols as-is, title-case modifiers
          if (key.length === 1) return key.toUpperCase();
          const modifierMap: Record<string, string> = {
            ctrl: "Ctrl",
            cmd: "Cmd",
            alt: "Alt",
            shift: "Shift",
            meta: "Meta",
            enter: "Enter",
            space: "Space",
            tab: "Tab",
            escape: "Esc",
            up: "↑",
            down: "↓",
            left: "←",
            right: "→",
          };
          return modifierMap[key.toLowerCase()] ?? key.toUpperCase();
        })
        .join("+")
    )
    .join("  "); // double space between chords reads better than another separator
}

/**
 * Pick the right binding for the current OS.
 * VS Code runs on win32, darwin, linux — we treat linux like windows for keybindings.
 */
function getBindingForPlatform(shortcut: Shortcut): string {
  return process.platform === "darwin" ? shortcut.mac : shortcut.win;
}

interface ShortcutQuickPickItem extends vscode.QuickPickItem {
  shortcut: Shortcut;
}

function buildQuickPickItems(): ShortcutQuickPickItem[] {
  return SHORTCUTS.map((s) => {
    const binding = getBindingForPlatform(s);
    return {
      label: s.description,
      description: formatKeybinding(binding),
      detail: s.category + (s.keywords?.length ? `  •  ${s.keywords.join(", ")}` : ""),
      shortcut: s,
    };
  });
}

export function activate(context: vscode.ExtensionContext) {
  const disposable = vscode.commands.registerCommand(
    "shortcutFinder.search",
    async () => {
      const items = buildQuickPickItems();

      const picked = await vscode.window.showQuickPick(items, {
        placeHolder: "Describe what you want to do (e.g. 'close all tabs')",
        matchOnDescription: true, // match against the keybinding text too
        matchOnDetail: true, // match against category + keywords
      });

      if (!picked) return;

      const binding = getBindingForPlatform(picked.shortcut);
      const pretty = formatKeybinding(binding);

      // Copy to clipboard + confirmation toast with an action to re-open the picker.
      await vscode.env.clipboard.writeText(pretty);

      const again = "Find another";
      const choice = await vscode.window.showInformationMessage(
        `${picked.shortcut.description}: ${pretty}  (copied)`,
        again
      );
      if (choice === again) {
        vscode.commands.executeCommand("shortcutFinder.search");
      }
    }
  );

  context.subscriptions.push(disposable);
}

export function deactivate() {}
