import BaseLocationScene from './BaseLocationScene.js';

export default class Sala extends BaseLocationScene {
  constructor() {
    super('Sala');
  }

  getLocationDescription() {
    return 'A aula de multimédia está a começar. Regista duas notas rápidas para não esquecer o conteúdo.';
  }

  getTaskId() {
    return 'sala-notes';
  }

  getNextScene() {
    return 'Jardim';
  }
}
