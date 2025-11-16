import { createBackground, createHud, createMenuButton, createTitle } from '../core/sceneHelpers.js';
import { resetProgress } from '../core/gameState.js';

// Entry point that links to every other flow in the game.
export default class MainMenuScene extends Phaser.Scene {
  constructor() {
    super('MainMenu');
  }

  create() {
    createBackground(this);
    createTitle(this, 'Escape DEI');
    createHud(this);

    const buttons = [
      { label: 'Modo História', target: 'ModoHistoriaMenu' },
      { label: 'Mini-jogos', target: 'MiniJogosMenu' },
      { label: 'Ajuda', target: 'AjudaMenu' },
      { label: 'Créditos', target: 'CreditosMenu' }
    ];

    buttons.forEach((button, index) =>
      createMenuButton(this, {
        label: button.label,
        y: 320 + index * 80,
        onSelect: () => this.scene.start(button.target)
      })
    );

    createMenuButton(this, {
      label: 'Reiniciar progresso',
      y: 320 + buttons.length * 80,
      onSelect: () => {
        resetProgress();
        this.scene.restart();
      }
    });
  }
}
