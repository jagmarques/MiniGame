import BaseMenuScene from './BaseMenuScene.js';

// Menu for the two included mini-games.
export default class MiniJogosMenu extends BaseMenuScene {
  constructor() {
    super('MiniJogosMenu');
  }

  getMenuTitle() {
    return 'Mini-jogos';
  }

  getMenuDescription() {
    return 'Pratica com desafios rápidos. Cada mini-jogo desbloqueia uma tarefa extra.';
  }

  getMenuOptions() {
    return [
      { label: 'Acerta o Código', action: () => this.scene.start('AcertaoCodigo') },
      { label: 'Aula AMI', action: () => this.scene.start('AulaAMI') }
    ];
  }
}
