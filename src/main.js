import PreloaderScene from './scenes/PreloaderScene.js';
import MainMenuScene from './scenes/MainMenuScene.js';
import ModoHistoriaMenu from './scenes/menus/ModoHistoriaMenu.js';
import MiniJogosMenu from './scenes/menus/MiniJogosMenu.js';
import CreditosMenu from './scenes/menus/CreditosMenu.js';
import AjudaMenu from './scenes/menus/AjudaMenu.js';
import Corredor from './scenes/levels/Corredor.js';
import Secretaria from './scenes/levels/Secretaria.js';
import Salas from './scenes/levels/Salas.js';
import Sala from './scenes/levels/Sala.js';
import Jardim from './scenes/levels/Jardim.js';
import Bar from './scenes/levels/Bar.js';
import AcertaoCodigo from './scenes/minigames/AcertaoCodigo.js';
import AulaAMI from './scenes/minigames/AulaAMI.js';
import { GAME_HEIGHT, GAME_WIDTH } from './core/constants.js';

const config = {
  type: Phaser.AUTO,
  width: GAME_WIDTH,
  height: GAME_HEIGHT,
  parent: 'game-container',
  backgroundColor: '#000',
  scene: [
    PreloaderScene,
    MainMenuScene,
    ModoHistoriaMenu,
    MiniJogosMenu,
    CreditosMenu,
    AjudaMenu,
    Corredor,
    Secretaria,
    Salas,
    Sala,
    Jardim,
    Bar,
    AcertaoCodigo,
    AulaAMI
  ]
};

window.addEventListener('load', () => {
  // eslint-disable-next-line no-new
  new Phaser.Game(config);
});
