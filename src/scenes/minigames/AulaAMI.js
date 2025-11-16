import BaseMiniGameScene from './BaseMiniGameScene.js';
import { createMenuButton } from '../../core/sceneHelpers.js';

export default class AulaAMI extends BaseMiniGameScene {
  constructor() {
    super('AulaAMI');
  }

  getMiniGameTitle() {
    return 'Aula AMI';
  }

  getMiniGameInstructions() {
    return 'Reforça conceitos de multimédia escolhendo a afirmação correta. Apenas uma resposta está certa.';
  }

  getTaskId() {
    return 'minigame-ami';
  }

  createGameContent() {
    this.questionText = this.add
      .text(512, 420, '', {
        fontSize: '26px',
        color: '#f1faee',
        align: 'center',
        wordWrap: { width: 760 },
        fontFamily: 'monospace'
      })
      .setOrigin(0.5);

    this.feedbackText = this.add
      .text(512, 600, '', { fontSize: '24px', color: '#f1faee', fontFamily: 'monospace' })
      .setOrigin(0.5);

    this.buildQuestion();
  }

  buildQuestion() {
    const questions = [
      {
        prompt: 'Qual o formato indicado para guardar ícones vetoriais escaláveis?',
        answers: ['SVG', 'BMP', 'RAW', 'TIFF'],
        correct: 'SVG'
      },
      {
        prompt: 'Qual destes conceitos descreve a quantidade de informação de cor?',
        answers: ['Bit depth', 'Frame rate', 'Latency', 'Buffer size'],
        correct: 'Bit depth'
      }
    ];

    const selection = Phaser.Utils.Array.GetRandom(questions);
    this.questionText.setText(selection.prompt);

    this.answerButtons?.forEach((btn) => btn.destroy());
    this.answerButtons = selection.answers.map((answer, index) =>
      createMenuButton(this, {
        label: answer,
        y: 500 + index * 60,
        onSelect: () => this.resolveAnswer(answer === selection.correct)
      })
    );

    this.feedbackText.setText('');
  }

  resolveAnswer(correct) {
    if (correct) {
      this.feedbackText.setText('Boa! Guardaste o conceito.');
      this.notifyCompletion();
    } else {
      this.feedbackText.setText('Quase... revê os apontamentos.');
    }
    this.time.delayedCall(1200, () => this.buildQuestion());
  }
}
