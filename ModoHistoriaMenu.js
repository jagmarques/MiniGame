class ModoHistoriaMenu extends Phaser.Scene {

    constructor() {
        super({key: "ModoHistoriaMenu"});
    }

    create() {
        this.add.image(625, 450, "escolherJogador");

        var jogador1 = this.add.image(400, 480, "personagem1").setInteractive();
        var jogador2 = this.add.image(850, 480, "personagem2").setInteractive();
        var backBut = this.add.image(1180, 840, "backBut").setInteractive();
        this.add.image(625, 800, "select").setInteractive();
        menuNumber = -1;

        //SOM
        var soundOn= this.add.image(200, center[1]+410, "soundOnBut").setInteractive();
        var soundOff= this.add.image(50, center[1]+410, "soundOffBut").setInteractive();
        var maisVolume= this.add.image(150, center[1]+410, "maisBut").setInteractive();
        var menosVolume=this.add.image(100, center[1]+410, "menosBut").setInteractive();

        soundOff.on("pointerdown", function (ev) {
            musicMuted = true;
          })

        soundOn.on("pointerdown", function (ev) {
            musicMuted = false;
          })

          maisVolume.on("pointerdown", function (ev) {
            if(musicVolume<=0.9){
              musicVolume += 0.1;
            }else{
              musicVolume=musicVolume;
            }
          })

          menosVolume.on("pointerdown", function (ev) {
            if(musicVolume>=0.1){
              musicVolume -= 0.1;
            }else{
              musicVolume=musicVolume;
            }
          })


        //INPUT & OVER
        document.body.style.cursor = 'auto';
        this.input.on("pointerout", function (ev) {
            document.body.style.cursor = 'auto';
        });
        backBut.on("pointerdown", function (ev) {
            menuNumber = 4;
        });
        backBut.on("pointerover", function (ev) {
            document.body.style.cursor = 'pointer';
        });

        jogador1.on("pointerdown", function (ev) {
            menuNumber = 5;

        })
        jogador1.on("pointerover", function (ev) {
            document.body.style.cursor = 'pointer';
        });

        jogador2.on("pointerdown", function (ev) {
            menuNumber = 6;
        })
        jogador2.on("pointerover", function (ev) {
            document.body.style.cursor = 'pointer';
        });
    }

    update() {
        if (menuNumber===4) {
            this.scene.start("MainMenu");
        }
        if (menuNumber===5) {
            modo = "História";
            this.scene.start("Corredor");
        }
        if (menuNumber===6) {
            modo = "História";
            this.scene.start("Corredor");
        }

        //SOM
        if(musicMuted){
            soundFX.volume = 0;
        }
        if(!musicMuted) {
            soundFX.volume = musicVolume;
        }

    }
}
