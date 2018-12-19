class MainMenu extends Phaser.Scene {
    constructor() {
        super({key: "MainMenu"});
    }

    create() {
        this.add.image(625, 450, "background");
        var jogarBut = this.add.image(300, 250, "jogarBut").setInteractive();
        var mini_jogosBut = this.add.image(300, 400, "mini_jogosBut").setInteractive();
        var creditosBut = this.add.image(300, 700, "creditosBut").setInteractive();
        var ajudaBut = this.add.image(300, 550, "ajudaBut").setInteractive();
        this.add.image(750, 630, "personagem1").setInteractive();
        this.add.image(1020, 630, "personagem2").setInteractive();
        this.add.image(1000, 150, "titulo");

        //SOM
        if(musicVolumeMJ==1){
            soundMJ.stop();
            musicVolumeMJ=0;
        }
        if(musicVolume==0){
            musicVolume=1;
            soundFX = this.sound.add("sample2", {loop: "true", volume: musicVolume});
            soundMJ= this.sound.add("sample1", {loop: "true", volume: musicVolume});
            soundFX.play();
        }

        var soundOn= this.add.image(200, center[1]+410, "soundOnBut").setInteractive();
        var soundOff= this.add.image(50, center[1]+410, "soundOffBut").setInteractive();
        var maisVolume= this.add.image(150, center[1]+410, "maisBut").setInteractive();
        var menosVolume=this.add.image(100, center[1]+410, "menosBut").setInteractive();

        //SOM
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

          soundOff.on("pointerover", function (ev) {
              document.body.style.cursor = 'pointer';
            })

            soundOn.on("pointerover", function (ev) {
              document.body.style.cursor = 'pointer';
            })

            maisVolume.on("pointerover", function (ev) {
              document.body.style.cursor = 'pointer';
            })

            menosVolume.on("pointerover", function (ev) {
              document.body.style.cursor = 'pointer';
            })

        menuNumber = -1;
        var minijogos = 1;
        var ajuda  = 2;
        var creditos = 3;

        jogarBut.on("pointerdown", function (ev) {
            menuNumber = 0;
        });
        jogarBut.on("pointerover", function (ev) {
            document.body.style.cursor = 'pointer';
        });

        this.input.on("pointerout", function (ev) {
            document.body.style.cursor = 'auto';
        });

        mini_jogosBut.on("pointerdown", function (ev) {
            menuNumber = minijogos;
        });
        mini_jogosBut.on("pointerover", function (ev) {
            document.body.style.cursor = 'pointer';
        });

        creditosBut.on("pointerdown", function (ev) {
            menuNumber = ajuda;
        });
        creditosBut.on("pointerover", function (ev) {
            document.body.style.cursor = 'pointer';
        });

        ajudaBut.on("pointerdown", function (ev) {
            menuNumber = creditos;
        });
        ajudaBut.on("pointerover", function (ev) {
            document.body.style.cursor = 'pointer';
        });

        if(musicVolume==0){
            musicVolume=1;
            soundFX = this.sound.add("sample2", {loop: "true", volume: musicVolume});
            soundFX.play();
        }

    }

    update() {
        if(menuNumber===0){
            this.scene.start("ModoHistoriaMenu");
        }
        else if (menuNumber===1){
            this.scene.start("MiniJogosMenu");
        }
        else if (menuNumber===2){
            this.scene.start("CreditosMenu");
        }
        else if (menuNumber===3){
            this.scene.start("AjudaMenu");
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
