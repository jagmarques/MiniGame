# Escape DEI

Escape DEI is a lightweight Phaser 3 prototype that showcases how the original "MiniGame" repository can be organised without the legacy `.rar` bundles. The game ships with a guided tour (story mode), two mini-games, placeholder assets created on the fly and a repeatable QA workflow.

## Project structure

```
assets/              # Placeholder audio/image files generated locally
src/
  core/             # Shared constants and state helpers
  scenes/           # Scene implementations split by domain
    levels/         # Story-mode locations
    menus/          # Menu/overlay scenes
    minigames/      # Self-contained mini-games
```

## Getting started

1. Install dependencies (Phaser is provided locally via `phaser.js`). If you plan to run ESLint, install the dev dependencies with `npm install`.
2. Generate the placeholder assets by running `python assets/create_placeholders.py`. This creates PNG and WAV files ignored by Git so the repository contains no binary blobs.
3. Launch a local server (for example `npx http-server` or the VS Code Live Server extension).
4. Open `http://localhost:8080` (or whichever port you used) and interact with the menus.

## Available scripts

The repository defines a small toolchain for consistency:

| Command | Description |
| --- | --- |
| `npm run lint` | Runs ESLint using the flat config in `.eslintrc.cjs`. |
| `npm run format` | Executes Prettier for quick formatting (no files are changed automatically). |

> **Note:** Dependency installation requires internet access. When working offline, keep the configuration files but skip the npm commands.

## Testing and debugging checklist

- Story mode: open each location from the `Modo História` menu and ensure the completion sound plays when clicking "Concluir tarefa".
- Mini-games: verify both games load, that incorrect answers show feedback and that clicking the correct option increments the task counter in the HUD.
- HUD: from the main menu restart the progress and confirm the counter is reset.
- Browser DevTools: open the console to review the audit log produced by `gameState.logEvent` while switching scenes.

## Asset pipeline

All placeholder art and audio files are generated via the script in `assets/` (see `create_placeholders.py`). Replace them with proper assets at any point; keep the same filenames or update `PreloaderScene`.

## Contributing

1. Fork the repository and create a feature branch.
2. Run `npm run lint` before opening a PR.
3. Include screenshots when making UI changes and document any new troubleshooting tips.

Have fun exploring the DEI! :)
