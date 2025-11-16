import BaseMiniGameScene from './BaseMiniGameScene.js';
import { createMenuButton } from '../../core/sceneHelpers.js';

export default class AcertaoCodigo extends BaseMiniGameScene {
  constructor() {
    super('AcertaoCodigo');
  }

  getMiniGameTitle() {
    return 'Acerta o Código';
  }

  getMiniGameInstructions() {
    return 'Memoriza o código gerado e escolhe a combinação correta. Cada ronda gera novos números.';
  }

  getTaskId() {
    return 'minigame-code';
  }

  createGameContent() {
    this.resultText = this.add
      .text(512, 360, '', { fontSize: '24px', color: '#f1faee', fontFamily: 'monospace' })
      .setOrigin(0.5);

    this.generateRound();
  }

  generateRound() {
    const target = Phaser.Math.RND.integerInRange(1111, 9999);
    const distractors = new Set([target]);
    while (distractors.size < 4) {
      distractors.add(Phaser.Math.RND.integerInRange(1111, 9999));
    }

    const options = [...distractors.values()].sort(() => Math.random() - 0.5);
    this.clearButtons?.();
    this.buttons = [];

    this.roundText?.destroy();
    this.roundText = this.add
      .text(512, 420, `Código alvo: ${target}`, {
        fontSize: '28px',
        color: '#f1faee',
        fontFamily: 'monospace'
      })
      .setOrigin(0.5);

    options.forEach((value, index) => {
      const button = createMenuButton(this, {
        label: value.toString(),
        y: 500 + index * 70,
        onSelect: () => this.resolveSelection(value === target)
      });
      this.buttons.push(button);
    });

    this.clearButtons = () => {
      this.buttons.forEach((btn) => btn.destroy());
      this.roundText.destroy();
    };
  }

  resolveSelection(correct) {
    if (correct) {
      this.resultText.setText('Correto! Tarefa concluída.');
      this.notifyCompletion();
    } else {
      this.resultText.setText('Ups! Tenta novamente.');
    }
    this.time.delayedCall(800, () => this.generateRound());
  }
}
