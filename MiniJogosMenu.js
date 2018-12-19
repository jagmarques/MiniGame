class MiniJogosMenu extends Phaser.Scene {

    constructor() {
        super({key: "MiniJogosMenu"});
    }

    create() {
        this.add.image(625, 450, "background_black");

        var backBut = this.add.image(1180, 840, "backBut").setInteractive();
        var minijogo1 = this.add.image(300, 300, "minijogo1").setInteractive();
        var minijogo2 = this.add.image(800, 300, "minijogo2").setInteractive().setScale(0.5);

        //SOM
        if(musicVolumeMJ==0){
            musicVolume=0;
            musicVolumeMJ=1;
            soundFX.stop();
            soundMJ.play();
        }

        //INPUT & OVER EVENTS
        document.body.style.cursor = 'auto';
        this.input.on("pointerout", function (ev) {
            document.body.style.cursor = 'auto';
        });

        menuNumber = -1;
        backBut.on("pointerdown", function (ev) {
            menuNumber = 0;
        });
        backBut.on("pointerover", function (ev) {
            document.body.style.cursor = 'pointer';
        });

        minijogo1.on("pointerdown", function (ev) {
            menuNumber = 1;
        });
        minijogo1.on("pointerover", function (ev) {
            document.body.style.cursor = 'pointer';
        });

        minijogo2.on("pointerdown", function (ev) {
            menuNumber = 2;
        });
        minijogo2.on("pointerover", function (ev) {
            document.body.style.cursor = 'pointer';
        });
    }

    update() {
        if (menuNumber===0) {
          this.scene.start("MainMenu");
        }else if (menuNumber===1) {
          modo = "MiniJogo";
          this.scene.start("AcertaoCodigo");
        }else if (menuNumber===2) {
          modo = "MiniJogo";
          this.scene.start("AulaAMI");
        }
    }

}
