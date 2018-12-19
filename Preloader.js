class Preloader extends Phaser.Scene {
    constructor() {
        super({key: "Preloader"})
    }
    preload() {
        //MainMenu and backBut
        this.load.image("cartazmoelas","assets/cartaz_moelas.png");
        this.load.image("lixocheio","assets/lixo-cheio.png");
        this.load.image("lixovazio","assets/lixo-vazio.png");
        this.load.image("bag","assets/bag.png");
        this.load.image("cartaoUC1","assets/cartaoUC1.png");
        this.load.image("cartaoUC2","assets/cartaoUC2.png");
        this.load.image("NEIsign","assets/NEIsign.png");
        this.load.image("secretariafundo","assets/secretaria.png");
        this.load.image("helpdesk","assets/helpdesksign.png");
        this.load.image("tarefas","assets/pergaminho.png");
        this.load.image("bottar","assets/botao-tarefas.png");
        this.load.image("background", "assets/dei_principal.png");
        this.load.image("background_black", "assets/dei_principal_black.png");
        this.load.image("jardim", "assets/jardim_mini.png");
        this.load.image("bar", "assets/bar.png");
        this.load.image("corredor", "assets/corredor.png");
        this.load.image("torre", "assets/nometorre.png");
        this.load.image("nomesalas", "assets/nomesalas.png");
        this.load.image("salafundo","assets/sala1.png");
        this.load.image("salasfundo", "assets/salas.png");
        this.load.image("setaD", "assets/setadireita.png");
        this.load.image("setaE", "assets/setaesquerda.png");
        this.load.image("title", "assets/titulo.png");
        this.load.image("minijogo1", "assets/acertaocodigo.png");
        this.load.image("jogarBut", "assets/botao1.png");
        this.load.image("mini_jogosBut", "assets/botao2.png");
        this.load.image("papel", "assets/papel.png");
        this.load.image("creditosBut", "assets/botao3.png");
        this.load.image("ajudaBut", "assets/botao4.png");
        this.load.image("personagem1", "assets/personagem1.png");
        this.load.image("personagem2", "assets/personagem2.png");
        this.load.image("personagem1_beer", "assets/personagem1_beer.png");
        this.load.image("personagem2_beer", "assets/personagem2_beer.png");
        this.load.image("titulo", "assets/titulo.png");
        this.load.image("backBut", "assets/botao_back.png");
        this.load.image("escolherJogador", "assets/escolher_personagem.png");
        this.load.image("select", "assets/select.png");
        this.load.image("ajuda","assets/ajuda.png");
        this.load.image("creditos","assets/creditos.png");
        this.load.image("cerveja","assets/beer_cup.png");
        this.load.image("bonus","assets/bonus.png");
        this.load.image("livro","assets/livros.png");
        this.load.image("trash0","assets/lata.png");
        this.load.image("trash1","assets/trash1.png");
        this.load.image("trash2","assets/twix.png");
        this.load.image("trash3","assets/kinder.png");
        this.load.image("passe","assets/passepapel.png");
        this.load.image("pc","assets/computador.png");
        this.load.image('tile', 'assets/tile.png');
        this.load.image('win', 'assets/win.png');
        this.load.image("quadro",'assets/quadro.png');
        this.load.image("bola",'assets/ball1.png');
        this.load.image("paddle1",'assets/paddle1.png');
        this.load.image("silver1",'assets/silver1.png');
        this.load.image("red1",'assets/red1.png');
        this.load.image("yellow1",'assets/yellow1.png');
        this.load.image("green1",'assets/green1.png');
        this.load.image("blue1",'assets/blue1.png');
        this.load.image("purple1",'assets/purple1.png');
        this.load.image("minijogo2",'assets/minijogo2.png');
        this.load.image("ground","assets/ground.png");
        this.load.image("beerpapel","assets/beerpapel.png");
        this.load.image("soundOnBut","assets/soundOn.png");
        this.load.image("soundOffBut","assets/soundOff.png");
        this.load.image("maisBut","assets/maisBut.png");
        this.load.image("menosBut","assets/menosBut.png");
        this.load.image("chave","assets/chave.png");
        this.load.image("branco","assets/fundobranco.png");
        this.load.image("papelcartao","assets/papelcartao.png");
        this.load.image("intro","assets/intro.png");

        //sounds
        this.load.audio('sample1',['assets/sample1.mp3']);
        this.load.audio('sample2',['assets/sample2.mp3']);

        //Player
        this.load.spritesheet('anime', 'assets/personagem1animation.png', { frameWidth: 150, frameHeight: 301.5});


        this.load.script('2048', 'minijogos/2048.js');
    }

    update() {
        this.scene.start("MainMenu");
    }


}
