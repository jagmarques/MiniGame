import BaseLocationScene from './BaseLocationScene.js';

export default class Corredor extends BaseLocationScene {
  constructor() {
    super('Corredor');
  }

  getLocationName() {
    return 'Corredor Principal';
  }

  getLocationDescription() {
    return 'O ponto de partida da aventura. Observa os murais e planifica a tua rota para o resto do edifício.';
  }

  getTaskId() {
    return 'corredor-tour';
  }

  getNextScene() {
    return 'Secretaria';
  }
}
