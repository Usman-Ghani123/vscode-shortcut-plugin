// Keybinding format: use "|" to separate chord sequences (e.g. "ctrl+k|ctrl+w")
// The `win` field is used for Windows/Linux; `mac` for macOS.
// Categories help users browse related shortcuts.

export interface Shortcut {
  description: string;
  win: string;
  mac: string;
  category: string;
  // Optional keywords to improve fuzzy matching (not shown in UI)
  keywords?: string[];
}

export const SHORTCUTS: Shortcut[] = [
  // ─── General ───────────────────────────────────────────────
  {
    description: "Show Command Palette",
    win: "ctrl+shift+p",
    mac: "cmd+shift+p",
    category: "General",
    keywords: ["commands", "palette", "run command"],
  },
  {
    description: "Quick Open / Go to File",
    win: "ctrl+p",
    mac: "cmd+p",
    category: "General",
    keywords: ["open file", "find file", "navigate"],
  },
  {
    description: "Open User Settings",
    win: "ctrl+,",
    mac: "cmd+,",
    category: "General",
    keywords: ["preferences", "config"],
  },
  {
    description: "Open Keyboard Shortcuts",
    win: "ctrl+k|ctrl+s",
    mac: "cmd+k|cmd+s",
    category: "General",
    keywords: ["keybindings"],
  },
  {
    description: "Toggle Full Screen",
    win: "f11",
    mac: "ctrl+cmd+f",
    category: "General",
  },
  {
    description: "Toggle Zen Mode",
    win: "ctrl+k|z",
    mac: "cmd+k|z",
    category: "General",
    keywords: ["distraction free", "focus"],
  },

  // ─── File Management ───────────────────────────────────────
  {
    description: "New File",
    win: "ctrl+n",
    mac: "cmd+n",
    category: "File",
  },
  {
    description: "Save File",
    win: "ctrl+s",
    mac: "cmd+s",
    category: "File",
  },
  {
    description: "Save All",
    win: "ctrl+k|s",
    mac: "cmd+k|s",
    category: "File",
  },
  {
    description: "Close Tab",
    win: "ctrl+w",
    mac: "cmd+w",
    category: "File",
    keywords: ["close editor", "close file"],
  },
  {
    description: "Close All Tabs",
    win: "ctrl+k|ctrl+w",
    mac: "cmd+k|cmd+w",
    category: "File",
    keywords: ["close everything"],
  },
  {
    description: "Reopen Closed Tab",
    win: "ctrl+shift+t",
    mac: "cmd+shift+t",
    category: "File",
    keywords: ["restore", "undo close"],
  },

  // ─── Editing ───────────────────────────────────────────────
  {
    description: "Cut Line (when nothing selected)",
    win: "ctrl+x",
    mac: "cmd+x",
    category: "Editing",
  },
  {
    description: "Copy Line Down",
    win: "shift+alt+down",
    mac: "shift+alt+down",
    category: "Editing",
    keywords: ["duplicate line"],
  },
  {
    description: "Move Line Up/Down",
    win: "alt+up / alt+down",
    mac: "alt+up / alt+down",
    category: "Editing",
  },
  {
    description: "Delete Line",
    win: "ctrl+shift+k",
    mac: "cmd+shift+k",
    category: "Editing",
  },
  {
    description: "Insert Line Below",
    win: "ctrl+enter",
    mac: "cmd+enter",
    category: "Editing",
  },
  {
    description: "Insert Line Above",
    win: "ctrl+shift+enter",
    mac: "cmd+shift+enter",
    category: "Editing",
  },
  {
    description: "Toggle Line Comment",
    win: "ctrl+/",
    mac: "cmd+/",
    category: "Editing",
  },
  {
    description: "Toggle Block Comment",
    win: "shift+alt+a",
    mac: "shift+alt+a",
    category: "Editing",
  },
  {
    description: "Format Document",
    win: "shift+alt+f",
    mac: "shift+alt+f",
    category: "Editing",
    keywords: ["prettify", "indent"],
  },
  {
    description: "Rename Symbol",
    win: "f2",
    mac: "f2",
    category: "Editing",
    keywords: ["refactor"],
  },

  // ─── Multi-cursor & Selection ──────────────────────────────
  {
    description: "Add Cursor Above/Below",
    win: "ctrl+alt+up / ctrl+alt+down",
    mac: "alt+cmd+up / alt+cmd+down",
    category: "Selection",
    keywords: ["multi cursor"],
  },
  {
    description: "Add Cursor at Next Match",
    win: "ctrl+d",
    mac: "cmd+d",
    category: "Selection",
    keywords: ["select next occurrence"],
  },
  {
    description: "Select All Occurrences",
    win: "ctrl+shift+l",
    mac: "cmd+shift+l",
    category: "Selection",
  },
  {
    description: "Expand Selection",
    win: "shift+alt+right",
    mac: "ctrl+shift+cmd+right",
    category: "Selection",
    keywords: ["smart select"],
  },
  {
    description: "Shrink Selection",
    win: "shift+alt+left",
    mac: "ctrl+shift+cmd+left",
    category: "Selection",
  },

  // ─── Navigation ────────────────────────────────────────────
  {
    description: "Go to Line",
    win: "ctrl+g",
    mac: "ctrl+g",
    category: "Navigation",
  },
  {
    description: "Go to Symbol in File",
    win: "ctrl+shift+o",
    mac: "cmd+shift+o",
    category: "Navigation",
  },
  {
    description: "Go to Symbol in Workspace",
    win: "ctrl+t",
    mac: "cmd+t",
    category: "Navigation",
  },
  {
    description: "Go to Definition",
    win: "f12",
    mac: "f12",
    category: "Navigation",
  },
  {
    description: "Peek Definition",
    win: "alt+f12",
    mac: "alt+f12",
    category: "Navigation",
  },
  {
    description: "Go Back / Forward",
    win: "alt+left / alt+right",
    mac: "ctrl+- / ctrl+shift+-",
    category: "Navigation",
  },

  // ─── Search & Replace ──────────────────────────────────────
  {
    description: "Find in File",
    win: "ctrl+f",
    mac: "cmd+f",
    category: "Search",
  },
  {
    description: "Replace in File",
    win: "ctrl+h",
    mac: "cmd+alt+f",
    category: "Search",
  },
  {
    description: "Find in Files",
    win: "ctrl+shift+f",
    mac: "cmd+shift+f",
    category: "Search",
    keywords: ["search workspace", "global search"],
  },
  {
    description: "Replace in Files",
    win: "ctrl+shift+h",
    mac: "cmd+shift+h",
    category: "Search",
  },

  // ─── Editor Layout ─────────────────────────────────────────
  {
    description: "Split Editor",
    win: "ctrl+\\",
    mac: "cmd+\\",
    category: "Layout",
  },
  {
    description: "Focus Editor Group 1/2/3",
    win: "ctrl+1 / ctrl+2 / ctrl+3",
    mac: "cmd+1 / cmd+2 / cmd+3",
    category: "Layout",
  },
  {
    description: "Toggle Sidebar",
    win: "ctrl+b",
    mac: "cmd+b",
    category: "Layout",
  },
  {
    description: "Toggle Panel (Terminal/Problems)",
    win: "ctrl+j",
    mac: "cmd+j",
    category: "Layout",
  },
  {
    description: "Toggle Terminal",
    win: "ctrl+`",
    mac: "ctrl+`",
    category: "Layout",
  },
  {
    description: "Focus Explorer",
    win: "ctrl+shift+e",
    mac: "cmd+shift+e",
    category: "Layout",
  },
  {
    description: "Focus Source Control",
    win: "ctrl+shift+g",
    mac: "ctrl+shift+g",
    category: "Layout",
    keywords: ["git"],
  },
  {
    description: "Focus Extensions View",
    win: "ctrl+shift+x",
    mac: "cmd+shift+x",
    category: "Layout",
  },

  // ─── Debug ─────────────────────────────────────────────────
  {
    description: "Start / Continue Debugging",
    win: "f5",
    mac: "f5",
    category: "Debug",
  },
  {
    description: "Step Over",
    win: "f10",
    mac: "f10",
    category: "Debug",
  },
  {
    description: "Step Into",
    win: "f11",
    mac: "f11",
    category: "Debug",
  },
  {
    description: "Step Out",
    win: "shift+f11",
    mac: "shift+f11",
    category: "Debug",
  },
  {
    description: "Toggle Breakpoint",
    win: "f9",
    mac: "f9",
    category: "Debug",
  },

  // ─── IntelliSense ──────────────────────────────────────────
  {
    description: "Trigger Suggestion",
    win: "ctrl+space",
    mac: "ctrl+space",
    category: "IntelliSense",
    keywords: ["autocomplete"],
  },
  {
    description: "Trigger Parameter Hints",
    win: "ctrl+shift+space",
    mac: "cmd+shift+space",
    category: "IntelliSense",
  },
  {
    description: "Quick Fix",
    win: "ctrl+.",
    mac: "cmd+.",
    category: "IntelliSense",
    keywords: ["code action", "lightbulb"],
  },
];
