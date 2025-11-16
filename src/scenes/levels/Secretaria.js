import BaseLocationScene from './BaseLocationScene.js';

export default class Secretaria extends BaseLocationScene {
  constructor() {
    super('Secretaria');
  }

  getLocationDescription() {
    return 'Entrega documentos e desbloqueia o cartão UC. Simula a fila e aproveita para rever as tuas tarefas.';
  }

  getTaskId() {
    return 'secretaria-card';
  }

  getNextScene() {
    return 'Salas';
  }
}
