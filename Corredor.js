class Corredor extends Phaser.Scene {
  constructor() {
    super({key: "Corredor"});
  }

  create() {
    //Variables
    var stylet = { font: "32px Gill Sans MT", fill: "#000055", align: "center" };
    var style = { font: "40px Gill Sans MT", fill: "#000066", align: "center" };
    var moelas;
    document.body.style.cursor = 'auto';

    //SOM
    if(musicVolume==0){
      musicVolume=1;
      soundFX = this.sound.add("sample1", {loop: "true", volume: musicVolume});
      soundFX.play();
    }
    i+=1;
    //Background
    this.add.image(center[0], center[1], "corredor");
    this.add.image(center[0]+500, center[1]-200, "setaD");
    var seta  = this.add.image(center[0]+250, center[1]-200, "setaD");
    seta.setScale(0.7);
    var secrtext = this.add.text(center[0]+180,center[1]-210,locais[8],stylet);
    secrtext.setScale(0.7);
    this.add.image(center[0], center[1]-330, "torre");
    this.add.text(center[0]-70,center[1]-350,torre,stylet);
    this.add.image(center[0]-280, center[1]-280, "nomesalas");
    this.add.image(center[0]-500, center[1]-200, "setaE");

    //definir semestre
    if(corredorLimpo==1 && barLimpo==1 && salasLimpo==1 && secretariaLimpo==1){
      nTarefas =-1;
    }
    if(nTarefas == 0 & semestre == 1){
      semestre += 1;
      nTarefas = listarefas2.length;
    }else if(nTarefas == 0 & semestre == 2){
      semestre += 1;
      nTarefas = listarefas3.length;
    }

    //objetos do cenario
    if(torre == locais[1]){
      if(semestre == 1){
        var vazio = this.add.image(center[0]-180,center[1]+90,"lixovazio").setScale(0.25);
        var trash0 = this.add.sprite(center[0]+300,center[1]+400,"trash0").setRotation(55).setInteractive();
        var trash1 = this.add.sprite(center[0]-100,center[1]+200,"trash1").setInteractive().setScale(1.5);
        trash0.on("pointerover", function (ev) {
          document.body.style.cursor = 'pointer';
        });
        trash1.on("pointerover", function (ev) {
          document.body.style.cursor = 'pointer';
        });
      }
      var cheio = this.add.image(center[0]-180,center[1]+90,"lixocheio").setScale(0.25);
      this.add.text(center[0]+450,center[1]-215,locais[0],style);
      this.add.text(center[0]-580,center[1]-215,locais[2],style);
    }else if(torre == locais[2]){
      if(semestre == 1){
        moelas = this.add.image(center[0]+470,center[1],"cartazmoelas").setScale(0.3).setInteractive();
        moelas.on("pointerover",function(){
          document.body.style.cursor = "pointer";
        })
      }
      this.add.text(center[0]+400,center[1]-215,locais[1],style);
      this.add.text(center[0]-570,center[1]-215,locais[7],style);
    }

    //CARTAZ
    if(torre == locais[2] && semestre == 1){
      var acum=0;
      moelas.on("pointerdown", function (ev) {
        if(acum==0){
          moelas.setScale(1).setPosition(center[0],center[1]);
          acum=1;
        }else{
          moelas.setScale(0.3).setPosition(center[0]+470,center[1]);
          acum=0;
        }
      });
    }

    //Posicao do Player
    if(posicao == locais[6]){
      pos[0] = 351;
      pos[1] = 420;
    }else if(posicao == locais[8]){
      pos[0] = 889;
      pos[1]=420;
    }else if(posicao == locais[7] || posicao == locais[2]){
      pos[0] = 120;
      pos[1]=600;
    }else if(posicao == locais[1] || posicao == locais[0]){
      pos[0] = 1200;
      pos[1]=600;
    }else{
      pos[0]=center[0];
      pos[1]=center[1];
    }

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
    var volume = this.add.text(center[0]-70,center[1]-100,"Volume",s).setInteractive().setTint(unselected);
    var soundOn= this.add.image(center[0]+150, center[1], "soundOnBut").setInteractive();
    var soundOff= this.add.image(center[0]-150, center[1], "soundOffBut").setInteractive();
    var maisVolume= this.add.image(center[0]+50, center[1], "maisBut").setInteractive();
    var menosVolume=this.add.image(center[0]-50, center[1], "menosBut").setInteractive();
    var ajuda = this.add.text(center[0]-50,center[1]-190,"Ajuda",s).setInteractive();
    var menuInicial = this.add.text(center[0]-110,center[1]+60,"Menu Inicial",s).setInteractive();

    //verificar se tarefas foram realizadas, se sim, avançar para o próximo semestre.
    if(semestre ==1){
      for(let i=0;i<listarefas1.length;i++){
        if(listarefas1[i] == "Limpa o DEI\n"){
          if(corredorLimpo==1 && barLimpo==1 && salasLimpo==1 && secretariaLimpo==1){
            listarefas1[i] = "Limpa o DEI ✔\n";
          }
        }else if(listarefas1[i]== "Cartão UC [Secretaria]\n"){
          if(cUC_state ==1){
            listarefas1[i] = "Cartão UC [Secretaria] ✔\n";
          }
        }else if(listarefas1[i]=="Palavra-Passe [HelpDesk]\n"){
          if(pass_state==1){
            listarefas1[i] = "Palavra-Passe [HelpDesk] ✔\n";
          }
        }else if(listarefas1[i]=="QUIZ [Núcleo]\n"){
          if(quiz_state==1){
            listarefas1[i] = "QUIZ [Núcleo] ✔\n";
          }
        }else if(listarefas1[i]=="Aula de AMI [Sala C.1]\n"){
          if(aula_state==1){
            listarefas1[i] = "Aula de AMI [Sala C.1] ✔\n";
          }
        }
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

    pass = this.add.sprite(center[0]-100,center[1]-200,"passe").setInteractive().setScale(0.1);
    chave = this.add.sprite(center[0]-50,center[1]-200,"chave").setInteractive().setScale(0.2);

    //AJUDA
    var ajudaImage=this.add.image(center[0], center[1], "ajuda");
    ajudaImage.alpha=0;

    var backBut = this.add.image(1180, 840, "backBut").setInteractive();

    //INTRO
    var introImage=this.add.image(center[0], center[1], "intro");
    var continuar= this.add.text(center[0]-110,center[1]+360,"Continuar",s).setInteractive().setTint(unselected);

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
    if(i==0){
      introImage.alpha=1;
      continuar.alpha=1;
    }else{
      introImage.alpha=0;
      continuar.alpha=0;
    }

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
    soundOff.on("pointerover", function (ev) {
      document.body.style.cursor = 'pointer';
    })
    soundOff.on("pointerdown", function (ev) {
    musicMuted = true;
    })
    soundOn.on("pointerover", function (ev) {
      document.body.style.cursor = 'pointer';
    })
    soundOn.on("pointerdown", function (ev) {
    musicMuted = false;
    })
    maisVolume.on("pointerover", function (ev) {
      document.body.style.cursor = 'pointer';
    })
    maisVolume.on("pointerdown", function (ev) {
    if(musicVolume<=0.9){
      musicVolume += 0.1;
    }else{
      musicVolume=musicVolume;
    }
    })
    menosVolume.on("pointerover", function (ev) {
      document.body.style.cursor = 'pointer';
    })
    menosVolume.on("pointerdown", function (ev) {
    if(musicVolume>=0.1){
      musicVolume -= 0.1;
    }else{
      musicVolume=musicVolume;
    }
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
    
    continuar.on("pointerdown", function (ev) {
      document.body.style.cursor = 'pointer';
    })
    continuar.on("pointerdown", function (ev) {
      introImage.alpha=0;
      continuar.alpha=0;
    })

    //Limpar DEI
    if(torre == locais[1] && semestre==1){
      trash0.alpha = 0;
      trash1.alpha=0;
      if(corredorLimpo<1){
        trash_obj = 2;
        vazio.alpha = 1;
        cheio.alpha = 0;
        trash0.alpha = 1
        trash1.alpha = 1;
        this.input.setDraggable(trash0);
        this.input.setDraggable(trash1);
      }else{
        cheio.alpha = 1;
        vazio.alpha = 0;
      }

      var rect = vazio.getBounds();
      if(trash_obj>0){
        if(semestre == 1 && corredorLimpo<1){
          this.input.on('drag',function(pointer,gameObject,dragX,dragY){
            gameObject.x = dragX;
            gameObject.y = dragY;
        });
        this.input.on('dragend',function(pointer,gameObject,dragX,dragY){
            if(gameObject.x >= rect.x && gameObject.x<= rect.x + rect.width && gameObject.y >= rect.y && gameObject.y<=rect.y+rect.height){
              gameObject.alpha = 0;
              trash_obj--;
              if(trash_obj==0){
                corredorLimpo = 1;
                cheio.alpha = 1;
                vazio.alpha = 0;
              }}});
        }
    }
    }else if(torre == locais[1]){
      cheio.alpha=1;
    }

    player.setBounce(0);
    player.setCollideWorldBounds(true);

    player.setVelocityX(0);
    player.setVelocityY(0);
    //Input Events
    cursors = this.input.keyboard.createCursorKeys();
  }

  update() {
      var x = player.x;
      var y = player.y;

      //Movimentos
      if (cursors.left.isDown){
        if(y>=500){
          if(x<220){
            if(torre == locais[1]){
              torre = locais[2];
              posicao = locais[1];
              this.scene.start("Corredor");
            }else{
              torre = locais[7];
              posicao = [2];
              this.scene.start("Jardim");
            }
          }else{
            player.setVelocityX(-vel);
          }
        }else{
          if(x >=370 && x<=890 && y>=400){
            player.setVelocityX(-vel);
          }else if(x<370 && y<500){
            if(torre == locais[1]){
              posicao = locais[1];
              this.scene.start("Salas");
            }else{
              posicao = locais[2];
              this.scene.start("Salas");
            }
          }else{
            player.setVelocityX(-vel);
          }
        }
        player.setVelocityY(0);
      }else if (cursors.right.isDown){
        if(y>=550){
          if(x>=1100){
            if(torre == locais[1]){
              posicao = locais[0];
              this.scene.start("Bar");
            }else{
              torre = locais[1];
              posicao = locais[2];
              this.scene.start("Corredor");
            }
          }else{
            player.setVelocityX(vel);
          }
        }else{
          if(x >=350 && x<=890 && y>=400){
            player.setVelocityX(vel);
          }else if(x>890 && y<500){
            player.setVelocityX(vel);
            this.scene.start("Secretaria");
          }else if(x>890 && y>500 && y<600){
            player.setVelocityX(0);
            x=890;
          }else if(x<350){
            player.setVelocityX(vel);
            x=350;
          }
        }
        player.setVelocityY(0);
      }else if (cursors.up.isDown && x >= 350 && x<=890 && cursors.right.isUp && cursors.down.isUp && cursors.left.isUp){
          if(y>=400){
            player.setVelocityY(-vel);
          }else{
            player.setVelocityY(-vel);
            y=400;
          }
          player.setVelocityX(0);
      }else if (cursors.down.isDown && cursors.right.isUp && cursors.left.isUp && cursors.up.isUp){
          player.setVelocityY(vel);
          player.setVelocityX(0);
      }else if(cursors.up.isDown && (player.x <350 || player.x>890) && (player.y >= 550)){
          player.setVelocityY(-vel);
      }else{
          player.setVelocityX(0);
          player.setVelocityY(0);
      }
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
