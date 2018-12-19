var soundVolume;
var musicVolume;
class Bar extends Phaser.Scene {
  constructor() {
      super({key: "Bar"});
  }

  create() {
    //Background
    this.add.image(center[0], center[1], "bar");
    var vazio = this.add.image(center[0]-290,center[1],"lixovazio").setScale(0.25);
    var cheio = this.add.image(center[0]-290,center[1],"lixocheio").setScale(0.25);
    var trash0 = this.add.sprite(center[0]+370,center[1]+400,"trash0").setRotation(55).setInteractive();
    var trash1 = this.add.sprite(center[0]-100,center[1]+200,"trash1").setInteractive().setScale(1.5);
    var trash2 = this.add.sprite(center[0]-350,center[1]+250,"trash2").setInteractive().setScale(0.7);
    var trash3 = this.add.sprite(center[0],center[1]+300,"trash3").setInteractive().setScale(1);

    //definir semestre
    if(nTarefas == 0 & semestre == 1){
      semestre += 1;
      nTarefas = listarefas2.length;
      this.scene.start("Corredor");
    }else if(nTarefas == 0 & semestre == 2){
      semestre += 1;
      nTarefas = listarefas3.length;
    }

    // Lixo
    trash0.on("pointerover", function (ev) {
      document.body.style.cursor = 'pointer';
    });
    trash1.on("pointerover", function (ev) {
      document.body.style.cursor = 'pointer';
    });
    trash2.on("pointerover", function (ev) {
      document.body.style.cursor = 'pointer';
    });
    trash3.on("pointerover", function (ev) {
      document.body.style.cursor = 'pointer';
    });

    pos[0]=120;
    pos[1]=600;

    //Player
    if(menuNumber===5){
      player = this.physics.add.image(pos[0],pos[1], 'personagem1');
    }
    if(menuNumber===6){
      player = this.physics.add.image(pos[0],pos[1], 'personagem2');
    }

    //BOTAO MENU
    var texto, c=0, selected = 0x01b0b2, unselected = 0x006677;
    var s = { font: "45px Britannic Bold", fill: "#006677", align: "center" };
    var estilo = { font: "35px Courier New", fill: "#000077", align: "center" };
    var bottar = this.add.image(70, 30, "bottar").setInteractive();
    fundo = this.add.image(center[0],center[1],"tarefas");
    var tarefasbot = this.add.text(center[0]-370,center[1]-320,"TAREFAS",s).setInteractive().setTint(unselected);
    var bagbot = this.add.text(center[0]-120,center[1]-320,"MOCHILA",s).setInteractive().setTint(unselected);
    var optionsbot = this.add.text(center[0]+130,center[1]-320,"DEFINIÇÕES",s).setInteractive().setTint(unselected);
    var gamemusic = this.sound.add('sample1');
    var volume = this.add.text(center[0]-70,center[1]-100,"Volume",s).setInteractive();
    var soundOn= this.add.image(center[0]+150, center[1], "soundOnBut").setInteractive();
    var soundOff= this.add.image(center[0]-150, center[1], "soundOffBut").setInteractive();
    var maisVolume= this.add.image(center[0]+50, center[1], "maisBut").setInteractive();
    var menosVolume=this.add.image(center[0]-50, center[1], "menosBut").setInteractive();
    var ajuda = this.add.text(center[0]-50,center[1]-190,"Ajuda",s).setInteractive();
    var menuInicial = this.add.text(center[0]-110,center[1]+60,"Menu Inicial",s).setInteractive();
    //AJUDA
    var ajudaImage=this.add.image(center[0], center[1], "ajuda");
    var backBut = this.add.image(1180, 840, "backBut").setInteractive();
    ajudaImage.alpha=0;

    //verificar se tarefas foram realizadas, se sim, avançar para o próximo semestre.
    var nTarefas;
    if(semestre ==1){
      nTarefas = listarefas1.length;
      for(let i=0;i<listarefas1.length;i++){
        if(listarefas1[i] == "Limpa o DEI\n"){
          if(corredorLimpo==1 && barLimpo==1 && salasLimpo==1 && secretariaLimpo==1){
            listarefas1[i] = "Limpa o DEI ?\n";
            nTarefas-=1;
          }
        }else if(listarefas1[i]== "Cartão UC [Secretaria]\n"){
          if(cUC_state ==1){
            listarefas1[i] = "Cartão UC [Secretaria] ?\n";
            nTarefas-=1;
          }
        }else if(listarefas1[i]=="Palavra-Passe [HelpDesk]\n"){
          if(pass_state==1){
            listarefas1[i] = "Palavra-Passe [HelpDesk] ?\n";
            nTarefas-=1;
          }
        }else if(listarefas1[i]=="QUIZ [Núcleo]\n"){
          if(quiz_state==1){
            listarefas1[i] = "QUIZ [Núcleo] ?\n";
            nTarefas-=1;
          }
        }else if(listarefas1[i]=="Aula de AMI [Sala C.1]\n"){
          if(quiz_state==1){
            listarefas1[i] = "Aula de AMI [Sala C.1] ?\n";
            nTarefas-=1;
          }
        }
      }
      if(nTarefas == 0){
        semestre += 1;
      }
    }

    //ESCREVER TAREFAS
    if(semestre == 1){
      listarefas1.toString();
      texto = this.add.text(center[0]-250,center[1]-200,listarefas1,estilo);
    }
    else if(semestre == 2){
      listarefas2.toString();
      texto = this.add.text(center[0]-250,center[1]-200,listarefas2,estilo);
    }else{
      listarefas3.toString();
      texto = this.add.text(center[0]-250,center[1]-200,listarefas6,estilo);
    }

    //OBJETOS DA MOCHILA
    if(menuNumber===5){
        cUC = this.add.image(center[0]-300, center[1]-200, "cartaoUC1").setScale(0.2);
      }
    if(menuNumber===6){
        cUC = this.add.image(center[0]-300, center[1]-200, "cartaoUC2").setScale(0.2);
      }

    pass = this.add.sprite(center[0]-50,center[1]-200,"passe").setInteractive().setScale(0.1);
    chave = this.add.sprite(center[0]-50,center[1]-200,"chave").setInteractive().setScale(0.2);

    chave.alpha = 0;
    pass.alpha=0;
    cUC.alpha = 0;
    bagbot.alpha = 0;
    optionsbot.alpha = 0;
    tarefasbot.alpha = 0;
    texto.alpha = 0;
    fundo.alpha = 0;
    volume.alpha=0;
    soundOn.alpha=0;
    soundOff.alpha=0;
    maisVolume.alpha=0;
    menosVolume.alpha=0;
    ajuda.alpha=0;
    menuInicial.alpha=0;
    backBut.alpha=0;

    //INPUT & OVER EVENTS
    this.input.on("pointerout", function (ev) {
        document.body.style.cursor = 'auto';
    });


    bottar.on("pointerover", function (ev) {
      document.body.style.cursor = 'pointer';
    });
    bottar.on("pointerdown", function (ev) {
      if(c==0){
        fundo.alpha = 1;
        bagbot.alpha = 1;
        optionsbot.alpha = 1;
        tarefasbot.alpha = 1;
        tarefasbot.setTint(selected);
        texto.alpha = 1;
        bagbot.setTint(unselected);
        optionsbot.setTint(unselected);
        c=1;
      }else{
        fundo.alpha = 0;
        cUC.alpha = 0;
        pass.alpha = 0;
        chave.alpha = 0;
        bagbot.alpha = 0;
        optionsbot.alpha = 0;
        tarefasbot.alpha = 0;
        texto.alpha=0;
        c=0;
        volume.alpha=0;
        soundOn.alpha=0;
        soundOff.alpha=0;
        maisVolume.alpha=0;
        menosVolume.alpha=0;
        ajuda.alpha=0;
        menuInicial.alpha=0;
      }
    })


    tarefasbot.on("pointerover", function (ev) {
      document.body.style.cursor = 'pointer';
    });
    tarefasbot.on("pointerdown", function (ev) {
      texto.alpha=1;
      cUC.alpha = 0;
      chave.alpha = 0;
      pass.alpha=0;
      volume.alpha=0;
      soundOn.alpha=0;
      soundOff.alpha=0;
      maisVolume.alpha=0;
      menosVolume.alpha=0;
      ajuda.alpha=0;
      menuInicial.alpha=0;
      tarefasbot.setTint(selected);
      bagbot.setTint(unselected);
      optionsbot.setTint(unselected);
    })
    bagbot.on("pointerover", function (ev) {
      document.body.style.cursor = 'pointer';
    });
    bagbot.on("pointerdown", function (ev) {
      texto.alpha=0;
      if(cUC_state == 1) {
        cUC.alpha = 1;
      }
      if(pass_state==1){
        pass.alpha = 1;
      }
      if(quiz_state==1){
        chave.alpha = 1;
      }
      volume.alpha=0;
      soundOn.alpha=0;
      soundOff.alpha=0;
      maisVolume.alpha=0;
      menosVolume.alpha=0;
      ajuda.alpha=0;
      menuInicial.alpha=0;
      tarefasbot.setTint(unselected);
      bagbot.setTint(selected);
      optionsbot.setTint(unselected);
    })
    optionsbot.on("pointerover", function (ev) {
      document.body.style.cursor = 'pointer';
    });
    optionsbot.on("pointerdown", function (ev) {
      texto.alpha=0;
      cUC.alpha = 0;
      pass.alpha=0;
      chave.alpha = 0;
      volume.alpha=1;
      soundOn.alpha=1;
      soundOff.alpha=1;
      maisVolume.alpha=1;
      menosVolume.alpha=1;
      ajuda.alpha=1;
      menuInicial.alpha=1;
      tarefasbot.setTint(unselected);
      bagbot.setTint(unselected);
      optionsbot.setTint(selected);
    })

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

    ajuda.on("pointerover", function (ev) {
      document.body.style.cursor = 'pointer';
    })

    ajuda.on("pointerdown", function (ev) {
      ajudaImage.alpha=1;
      backBut.alpha=1;
    })

    backBut.on("pointerover", function (ev) {
      document.body.style.cursor = 'pointer';
    })

    backBut.on("pointerdown", function (ev) {
      ajudaImage.alpha=0;
      backBut.alpha=0;
    })

    menuInicial.on("pointerover", function (ev) {
      document.body.style.cursor = 'pointer';
    })

    menuInicial.on("pointerdown", function (ev) {
      menuNumber = 4;

    })


    //Limpar DEI

    trash0.alpha = 0;
    trash1.alpha=0;
    trash2.alpha=0;
    trash3.alpha=0;
    if(barLimpo<1){
      trash_obj = 4;
      vazio.alpha = 1;
      cheio.alpha = 0;
      trash0.alpha = 1
      trash1.alpha = 1;
      trash2.alpha = 1
      trash3.alpha = 1;
      this.input.setDraggable(trash0);
      this.input.setDraggable(trash1);
      this.input.setDraggable(trash2);
      this.input.setDraggable(trash3);
    }else{
      cheio.alpha = 1;
      vazio.alpha = 0;
    }

    var rect = vazio.getBounds();
    if(trash_obj>0){
      if(semestre == 1 && barLimpo<1){
        this.input.on('drag',function(pointer,gameObject,dragX,dragY){
          gameObject.x = dragX;
          gameObject.y = dragY;
      });
      this.input.on('dragend',function(pointer,gameObject,dragX,dragY){
          if(gameObject.x >= rect.x && gameObject.x<= rect.x + rect.width && gameObject.y >= rect.y && gameObject.y<=rect.y+rect.height){
            gameObject.alpha = 0;
            trash_obj--;
            if(trash_obj==0){
              barLimpo = 1;
              cheio.alpha = 1;
              vazio.alpha = 0;
            }}});
      }
    }

    player.setVelocityX(0);
    player.setVelocityY(0);
    player.setBounce(0);
    player.setCollideWorldBounds(true);


    //Input Events
    cursors = this.input.keyboard.createCursorKeys();

  }

  update() {
    var x =player.x;
    var y =player.y;

    if(cursors.left.isDown){
      if(x<=220){
        posicao = locais[0];
        this.scene.start("Corredor");
      }else{
        player.setVelocityX(-vel);
      }
    }else if(cursors.right.isDown){
      if(x<=600 && y>=450){
        player.setVelocityX(vel);
      }else if(x<=500 && y>=370){
        player.setVelocityX(vel);
      }else{
        player.setVelocityX(0);
      }
    }else if(cursors.up.isDown){
      if(x>400 && y>=500){
        player.setVelocityY(-vel);
      }else if(x<=400 && y>=370){
        player.setVelocityY(-vel);
      }else{
        player.setVelocityY(0);
      }
    }else if(cursors.down.isDown){
      player.setVelocityY(vel);
    }else{
      player.setVelocityX(0);
      player.setVelocityY(0);
    }
    //SOM
    if(musicMuted){
      soundFX.volume = 0;
    }
    if(!musicMuted) {
      soundFX.volume = musicVolume;
    }

    if (menuNumber===4) {
      this.scene.start("MainMenu");
    }
  }
}
