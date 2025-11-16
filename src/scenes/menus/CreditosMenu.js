import BaseMenuScene from './BaseMenuScene.js';

export default class CreditosMenu extends BaseMenuScene {
  constructor() {
    super('CreditosMenu');
  }

  getMenuTitle() {
    return 'Créditos';
  }

  getMenuDescription() {
    return 'Mini protótipo produzido para demonstrar organização e fluxo de jogo em Phaser 3.';
  }

  getMenuOptions() {
    return [
      {
        label: 'Site do Phaser',
        action: () => window.open('https://phaser.io', '_blank')
      }
    ];
  }
}
