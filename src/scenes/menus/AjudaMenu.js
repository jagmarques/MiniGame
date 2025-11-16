import BaseMenuScene from './BaseMenuScene.js';
import { gameState } from '../../core/gameState.js';

export default class AjudaMenu extends BaseMenuScene {
  constructor() {
    super('AjudaMenu');
  }

  getMenuTitle() {
    return 'Ajuda';
  }

  getMenuDescription() {
    return 'Explora os espaços e conclui tarefas clicando nos botões. Todo o progresso fica guardado localmente.';
  }

  getMenuOptions() {
    return [
      {
        label: 'Ver tarefas concluídas',
        action: () => {
          const msg = `Tarefas: ${[...gameState.completedTasks].join(', ') || 'nenhuma ainda.'}`;
          alert(msg);
        }
      }
    ];
  }
}
