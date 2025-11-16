import BaseLocationScene from './BaseLocationScene.js';

export default class Bar extends BaseLocationScene {
  constructor() {
    super('Bar');
  }

  getLocationDescription() {
    return 'O convívio final. Tira um momento para celebrar e convida a equipa para um mini-jogo.';
  }

  getTaskId() {
    return 'bar-meet';
  }

  getNextScene() {
    return 'MiniJogosMenu';
  }
}
