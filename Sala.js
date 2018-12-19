var chavegrande, branco,avancar,respondido=0;
class Sala extends Phaser.Scene {
  constructor() {
      super({key: "Sala"});
      this.pc;
  }

  create() {


    //Background
    this.add.image(center[0], center[1], "salafundo");
    var style = { font: "35px Courier New Bold", fill: "#001188", align: "center" };
    this.add.text(center[0]+500,center[1]-200,sala,style);
    var textoAcertou = this.add.text(center[0]-200,center[1]-200,"JÁ PODES USAR \nA TUA PALAVRA PASSE!",style).setInteractive().setTint(0x550055).setScale(0.85);
    textoAcertou.alpha=0;



    //definir semestre
    if(nTarefas == 0 & semestre == 1){
      semestre += 1;
      nTarefas = listarefas2.length;
      this.scene.start("Corredor");
    }else if(nTarefas == 0 & semestre == 2){
      semestre += 1;
      nTarefas = listarefas3.length;
    }

    //Player
    if(menuNumber===5){
      player = this.physics.add.image(625,700, 'personagem1');
    }

    if(menuNumber===6){
      player = this.physics.add.image(625,700, 'personagem2');
    }
    player.x=center[0];
    player.y=center[1]+200;
    player.setVelocityX(0);
    player.setVelocityY(0);
    player.setCollideWorldBounds(true);

    if(torre == locais[2] && sala == locais[5]){
      this.add.text(center[0]-120,center[1]-400,"HELPDESK",style);
      //password
      if(pass_state==0){
        var password = this.add.sprite(center[0]-50,center[1]-250,"passe").setInteractive().setScale(0.25);
      }
    }else if(torre == locais[1] && sala == locais[5]){
      //QUIZ
      if(quiz_state==0){
        var st = { font: "35px Courier New Bold", fill: "#ffffff", align: "center" };
        var titulo = this.add.text(center[0]-150,center[1]-400,"QUIZ DO NEI",style);
        this.add.image(center[0]-110,center[1]-230,"silver1");
        this.add.image(center[0]+60,center[1]-230,"silver1");
        this.add.image(center[0]-110,center[1]-150,"silver1");
        this.add.image(center[0]+60,center[1]-150,"silver1");
        avancar = this.add.text(center[0]-185,center[1]-100,"Carrega no ESPAÇO para avançar ->",st).setScale(0.7);
        a = this.add.text(center[0]-170,center[1]-50,"ACERTASTE! :)",st);
        a.alpha=0;
        e = this.add.text(center[0]-170,center[1]-50,"ERRASTE! :C",st);
        e.alpha=0;
      }
    }else if(torre == locais[1] && sala == locais[3]){
      //AMI jogo
      this.pc = this.add.sprite(center[0]+400,center[1]+250,"pc").setInteractive().setScale(1.2);
    } else {
      this.add.text(center[0]-200,center[1]-300,"Tarefas",s);
    }


    //QUIZ
    if(torre == locais[1] && sala == locais[5] && quiz_state==0){
      var combo,resposta;
      var style = { font: "35px Britannic Bold", fill: "#441144", align: "center" };
      p = this.add.text(center[0]-200,center[1]-350,perguntas[i],style).setScale(0.8).setFont("35px Britannic Bold");
      i=0;
      if(i == 0){
        resp = respostas1;
      }else if(i == 1){
        resp = respostas2;
      }else if(i == 2){
        resp = respostas3;
      }

      for (let j = 0; j < 4; j++){
        if (j == 0){
          bot1 = this.add.text(center[0]+10 , center[1] - 250, resp[j],s).setScale(0.8).setFont("35px Britannic Bold").setTint(0x006600).setInteractive();
        }
        if (j == 1){
          bot2 = this.add.text(center[0] - 150, center[1] - 170, resp[j],s).setScale(0.8).setFont("35px Britannic Bold").setTint(0x006600).setInteractive();
        }
        if (j == 2){
          bot3 = this.add.text(center[0] - 150, center[1] - 250, resp[j],s).setScale(0.8).setFont("35px Britannic Bold").setTint(0x006600).setInteractive();
        }
        if (j == 3){
          bot4 = this.add.text(center[0]+10, center[1] - 170, resp[j],s).setScale(0.8).setFont("35px Britannic Bold").setTint(0x006600).setInteractive();
        }
      }
      branco = this.add.image(center[0],center[1],"branco");
      chavegrande = this.add.image(center[0],center[1]-300,"chave");
      final = this.add.text(center[0]-185,center[1]-150,"Ganhaste uma chave!",style);
      final.alpha=0;
      branco.alpha=0;
      chavegrande.alpha=0;

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
    //AJUDA
    var ajudaImage=this.add.image(center[0], center[1], "ajuda");
    var backBut = this.add.image(1180, 840, "backBut").setInteractive();
    ajudaImage.alpha=0;

    //verificar se tarefas foram realizadas, se sim, avançar para o próximo semestre.
    if(semestre ==1){
      for(let i=0;i<listarefas1.length;i++){
          if(listarefas1[i] == "Limpa o DEI\n"){
            if(corredorLimpo==1 && barLimpo==1 && salasLimpo==1 && secretariaLimpo==1){
              listarefas1[i] = "Limpa o DEI ✔\n";
              limpar_state=1;
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

  // definiçoes
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

  cursors = this.input.keyboard.createCursorKeys();
  spacebar = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);



    //password
    if(torre ==locais[2] && sala == locais[5] && pass_state ==0){
      var aux = 0;
      password.on("pointerdown", function (ev) {
        if(aux == 0){
          password.setScale(1);
          password.setPosition(center[0], center[1]);
          aux = 1;
          var combo = game.input.keyboard.createCombo('COIMBRA');
          game.input.keyboard.on('keycombomatch', function (event) {
              pass_state = 1;
              nTarefas-=1;
              password.alpha=0;
              textoAcertou.alpha=1;
            });
        }else if(aux == 1 && pass_state == 0){
          password.setScale(0.25);
          password.setPosition(center[0]-50,center[1]-250);
          aux = 0;
        }
      })
    }


    //jogo amii
    untz = 0;
    if(torre==locais[1] && sala ==locais[3]){
      this.pc.on("pointerdown",function(ev){
        untz = 1;
      });
    }

  }

  update() {
    if(untz==1 && aula_state ==0){
      this.scene.start("AulaAMI");
    }
    if(cursors.down.isDown){
      player.setVelocityY(vel);
      posicao = locais[4];
      this.scene.start("Salas");
      player.x = pos[0];
      player.y = pos[1];
    }else{
      player.setVelocityY(0);
    }

    function atualizarBot(i) {

      a.alpha = 0;
      e.alpha = 0;
      respondido=0;
      p.setText(perguntas[i]);

      if(i == 0){
        var resp = respostas1;
      }else if(i == 1){
        var resp = respostas2;
      }else if(i == 2){
        var resp = respostas3;
      }
      bot1.setText(resp[0]).setTint(0x006600).setInteractive();
      bot2.setText(resp[1]).setTint(0x006600).setInteractive();
      bot3.setText(resp[2]).setTint(0x006600).setInteractive();
      bot4.setText(resp[3]).setTint(0x006600).setInteractive();
      avancar.setText("Carrega no ESPAÇO para avançar ->");

    }

    if(torre == locais[1] && sala == locais[5]){
      bot1.on("pointerdown", function (ev) {
          if(i > 0) {
            bot1.setTint(0x990000);
            a.alpha = 0;
            e.alpha = 1;
          }else { // i == 0
            e.alpha = 0;
            a.alpha = 1;
            respondido = 1;
            bot1.setTint(0x009900);
          }
        });

      bot2.on("pointerdown", function (ev) {
        bot2.setTint(0x990000);
        a.alpha =0;
        e.alpha =1;
      });

      bot3.on("pointerdown", function (ev) {
        if (i != 1){
          bot3.setTint(0x990000);
          a.alpha =0;
          e.alpha =1;
        }else {
          bot3.setTint(0x009900);
          e.alpha =0;
          a.alpha =1;
          respondido = 1;
        }
      });

      bot4.on("pointerdown", function (ev) {
        if (i != 2){
          bot4.setTint(0x990000);
          a.alpha =0;
          e.alpha =1;
        }else {
          bot4.setTint(0x009900);
          e.alpha =0;
          a.alpha =1;
          respondido = 1;
        }
      });

      if(Phaser.Input.Keyboard.JustDown(spacebar)){
        if(i<3 && respondido == 1){
          i = i + 1;
          if(i>=3){
            branco.alpha=1;
            chavegrande.alpha=1;
            e.alpha =0;
            a.alpha =0;
            avancar.alpha=0;
            final.alpha=1;
            quiz_state = 1;
            nTarefas -=1;
          }else{
            atualizarBot(i);
          }
        }else if(i<3 && respondido == 0){
          avancar.setText("Clica na opção certa!");
        }
      }
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
