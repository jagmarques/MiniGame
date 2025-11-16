import { logEvent } from '../core/gameState.js';

// Preloads placeholder art/audio shared across all scenes.
export default class PreloaderScene extends Phaser.Scene {
  constructor() {
    super('Preloader');
  }

  preload() {
    this.load.image('background', 'assets/images/background.png');
    this.load.image('button', 'assets/images/button.png');
    this.load.image('panel', 'assets/images/panel.png');
    this.load.image('logo', 'assets/images/logo.png');
    this.load.audio('notify', 'assets/audio/notify.wav');
  }

  create() {
    logEvent('Recursos carregados.');
    this.scene.start('MainMenu');
  }
}
