import { completeTask, getTasksForLocation } from '../../core/gameState.js';
import { createBackground, createHud, createMenuButton, createTaskPanel, createTitle } from '../../core/sceneHelpers.js';

// Base scene shared by each campus tour location.
export default class BaseLocationScene extends Phaser.Scene {
  constructor(key) {
    super(key);
  }

  // Returns the friendly name shown in the title.
  getLocationName() {
    return this.scene.key;
  }

  // Returns the location description for the body text.
  getLocationDescription() {
    return '';
  }

  // Called when the player marks the main task as done.
  getNextScene() {
    return 'ModoHistoriaMenu';
  }

  // Returns the identifier of the main task for this location.
  getTaskId() {
    return '';
  }

  create() {
    createBackground(this);
    createTitle(this, this.getLocationName());
    createHud(this);

    this.add
      .text(512, 300, this.getLocationDescription(), {
        fontSize: '22px',
        color: '#f1faee',
        align: 'center',
        wordWrap: { width: 760 },
        fontFamily: 'monospace'
      })
      .setOrigin(0.5);

    const tasks = getTasksForLocation(this.scene.key).map((task) => task.label);
    createTaskPanel(this, tasks);

    createMenuButton(this, {
      label: 'Concluir tarefa principal',
      y: 620,
      onSelect: () => {
        const result = completeTask(this.getTaskId(), this.scene.key);
        if (result) {
          this.sound.play('notify', { volume: 0.2 });
        }
        if (this.getNextScene()) {
          this.scene.start(this.getNextScene());
        }
      }
    });

    createMenuButton(this, {
      label: 'Voltar ao mapa',
      y: 700,
      onSelect: () => this.scene.start('ModoHistoriaMenu')
    });
  }
}
