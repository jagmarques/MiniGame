import BaseLocationScene from './BaseLocationScene.js';

export default class Jardim extends BaseLocationScene {
  constructor() {
    super('Jardim');
  }

  getLocationDescription() {
    return 'Tempo de respirar ar puro. Partilha uma ideia criativa com o teu par enquanto relaxas no jardim.';
  }

  getTaskId() {
    return 'jardim-break';
  }

  getNextScene() {
    return 'Bar';
  }
}
