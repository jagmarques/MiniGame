import { completeTask } from '../../core/gameState.js';
import { createBackground, createHud, createMenuButton, createTitle } from '../../core/sceneHelpers.js';

export default class BaseMiniGameScene extends Phaser.Scene {
  constructor(key) {
    super(key);
  }

  // Returns the display title for the mini-game.
  getMiniGameTitle() {
    return this.scene.key;
  }

  // Returns the instruction text rendered in the scene body.
  getMiniGameInstructions() {
    return '';
  }

  // Returns the task identifier unlocked by completing the mini-game.
  getTaskId() {
    return '';
  }

  create() {
    createBackground(this);
    createTitle(this, this.getMiniGameTitle());
    createHud(this);

    this.add
      .text(512, 300, this.getMiniGameInstructions(), {
        fontSize: '22px',
        color: '#f1faee',
        align: 'center',
        wordWrap: { width: 780 },
        fontFamily: 'monospace'
      })
      .setOrigin(0.5);

    this.createGameContent();

    createMenuButton(this, {
      label: 'Voltar ao menu de mini-jogos',
      y: 700,
      onSelect: () => this.scene.start('MiniJogosMenu')
    });
  }

  // eslint-disable-next-line class-methods-use-this
  createGameContent() {}

  notifyCompletion() {
    const result = completeTask(this.getTaskId(), this.scene.key);
    if (result) {
      this.sound.play('notify', { volume: 0.2 });
    }
  }
}
