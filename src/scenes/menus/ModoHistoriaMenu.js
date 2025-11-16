import BaseMenuScene from './BaseMenuScene.js';
import { STORY_TASKS, gameState } from '../../core/gameState.js';

// Explains the story mode and gives access to the locations.
export default class ModoHistoriaMenu extends BaseMenuScene {
  constructor() {
    super('ModoHistoriaMenu');
  }

  getMenuTitle() {
    return 'Modo História';
  }

  getMenuDescription() {
    const completed = gameState.completedTasks.size;
    return `Segue a rota para conheceres o DEI. Existem ${STORY_TASKS.length} tarefas e já concluíste ${completed}.`;
  }

  getMenuOptions() {
    const destinations = [
      { label: 'Corredor', scene: 'Corredor' },
      { label: 'Secretaria', scene: 'Secretaria' },
      { label: 'Salas', scene: 'Salas' },
      { label: 'Sala C.1', scene: 'Sala' },
      { label: 'Jardim', scene: 'Jardim' },
      { label: 'Bar', scene: 'Bar' }
    ];

    return destinations.map((entry) => ({
      label: `${entry.label} (${this.progressFor(entry.scene)})`,
      action: () => this.scene.start(entry.scene)
    }));
  }

  progressFor(location) {
    const tasks = STORY_TASKS.filter((task) => task.location === location);
    const done = tasks.filter((task) => gameState.completedTasks.has(task.id)).length;
    return tasks.length ? `${done}/${tasks.length}` : '—';
  }
}
