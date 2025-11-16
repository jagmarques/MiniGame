import BaseLocationScene from './BaseLocationScene.js';

export default class Salas extends BaseLocationScene {
  constructor() {
    super('Salas');
  }

  getLocationDescription() {
    return 'Mapa das salas teóricas. Escolhe onde vais estudar e partilha com a tua equipa.';
  }

  getTaskId() {
    return 'salas-plan';
  }

  getNextScene() {
    return 'Sala';
  }
}
