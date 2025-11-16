import { createBackground, createHud, createMenuButton, createTitle } from '../../core/sceneHelpers.js';

// Abstract helper shared by every simple menu-style scene.
export default class BaseMenuScene extends Phaser.Scene {
  constructor(key) {
    super(key);
  }

  // Returns the title rendered at the top of the menu.
  getMenuTitle() {
    return 'Menu';
  }

  // Returns the body copy shown under the title.
  getMenuDescription() {
    return '';
  }

  // Returns the list of selectable options for the menu.
  getMenuOptions() {
    return [];
  }

  // Returns the scene key to go back to or null to disable the button.
  getBackScene() {
    return 'MainMenu';
  }

  create() {
    createBackground(this);
    createTitle(this, this.getMenuTitle());
    createHud(this);

    if (this.getMenuDescription()) {
      this.add
        .text(512, 280, this.getMenuDescription(), {
          fontSize: '20px',
          color: '#f1faee',
          align: 'center',
          wordWrap: { width: 700 },
          fontFamily: 'monospace'
        })
        .setOrigin(0.5);
    }

    this.getMenuOptions().forEach((option, index) =>
      createMenuButton(this, {
        label: option.label,
        y: 360 + index * 80,
        onSelect: option.action
      })
    );

    if (this.getBackScene()) {
      createMenuButton(this, {
        label: 'Voltar',
        y: 360 + this.getMenuOptions().length * 80,
        onSelect: () => this.scene.start(this.getBackScene())
      });
    }
  }
}
