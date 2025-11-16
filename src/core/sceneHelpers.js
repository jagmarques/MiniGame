import { COLORS, GAME_HEIGHT, GAME_WIDTH, MENU_LAYOUT } from './constants.js';
import { gameState } from './gameState.js';

// Draws a tiled background to keep all scenes visually consistent.
export function createBackground(scene) {
  const bg = scene.add.image(GAME_WIDTH / 2, GAME_HEIGHT / 2, 'background');
  bg.setDisplaySize(GAME_WIDTH, GAME_HEIGHT);
  return bg;
}

// Adds the logo sprite and title text to the scene header.
export function createTitle(scene, title) {
  scene.add.image(GAME_WIDTH / 2, 120, 'logo').setDisplaySize(140, 140);
  return scene.add
    .text(GAME_WIDTH / 2, 220, title, {
      fontSize: '48px',
      color: COLORS.textPrimary,
      fontFamily: 'monospace'
    })
    .setOrigin(0.5);
}

// Creates a reusable text button with hover and click handlers.
export function createMenuButton(scene, { label, y, onSelect }) {
  const container = scene.add.container(GAME_WIDTH / 2, y);
  const hitArea = scene.add
    .image(0, 0, 'button')
    .setDisplaySize(MENU_LAYOUT.width, MENU_LAYOUT.height)
    .setInteractive({ useHandCursor: true });

  const text = scene.add
    .text(0, 0, label, {
      fontSize: '24px',
      color: '#0b132b',
      fontFamily: 'monospace'
    })
    .setOrigin(0.5);

  hitArea.on('pointerover', () => hitArea.setTint(COLORS.accent));
  hitArea.on('pointerout', () => hitArea.clearTint());
  hitArea.on('pointerup', () => onSelect());

  container.add([hitArea, text]);
  return container;
}

// Renders the list of tasks for the current location inside a panel.
export function createTaskPanel(scene, tasks) {
  const panel = scene.add
    .image(GAME_WIDTH / 2, 520, 'panel')
    .setDisplaySize(600, 260)
    .setAlpha(0.95);

  const text = tasks.length
    ? `Tarefas deste local:\n- ${tasks.join('\n- ')}`
    : 'Sem tarefas atribuídas.';

  scene.add
    .text(GAME_WIDTH / 2, 520, text, {
      fontSize: '20px',
      color: COLORS.textPrimary,
      align: 'center',
      wordWrap: { width: 540, useAdvancedWrap: true },
      fontFamily: 'monospace'
    })
    .setOrigin(0.5);

  return panel;
}

// Displays a HUD summary with the active player and task count.
export function createHud(scene) {
  const completed = gameState.completedTasks.size;
  const label = scene.add.text(20, 20, `Jogador: ${gameState.currentPlayer}\nTarefas concluídas: ${completed}`, {
    fontSize: '18px',
    color: COLORS.textPrimary,
    fontFamily: 'monospace'
  });
  label.setDepth(10);
  return label;
}
