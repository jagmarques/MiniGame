var AulaAMI = new Phaser.Class({

    Extends: Phaser.Scene,

    initialize:

    function AulaAMI ()
    {
        Phaser.Scene.call(this, { key: 'AulaAMI' });

        this.bricks;
        this.paddle;
        this.ball;
        this.vidastext;
        this.perdestetext;
        this.leveltext;
        this.level=1;
    },

    create: function ()
    {
      var s = { font: "45px Gill Sans MT", fill: "#ffffff", align: "center" };
      var titulo = { font: "60px Britannic Bold", fill: "#009999", align: "center" };
      vidas = 3;
      this.add.image(center[0],center[1],"quadro");
      this.vidastext = this.add.text(50,50,"Vidas: "+vidas,s);
      this.perdestetext = this.add.text(center[0]-370,center[1]+150,"Perdeste! Tenta outra vez...",titulo);
      this.leveltext = this.add.text(center[0]-130,center[1]+150,"NIVEL "+this.level,titulo).setScale(1.5);
      this.perdestetext.alpha=0;
      this.leveltext.alpha=0;
      if(modo=="História"){
        this.add.text(900,50,"Pressiona S para voltar à Sala.",s).setScale(0.5);
      }else{
        this.leveltext.alpha=1;
        this.add.text(900,50,"Pressiona S para voltar ao Menu.",s).setScale(0.5);
      }

      this.physics.world.setBoundsCollision(true, true, true, false);


      if(this.level ==1){
        this.bricks = this.physics.add.staticGroup({
            key: "blue1",
            frameQuantity: 35,
            gridAlign: { width: 7, height: 5, cellWidth: 150, cellHeight: 100, x: 180, y: 150 }
        });
      }else if(this.level==2){
        this.bricks = this.physics.add.staticGroup({
            key: "red1",
            frameQuantity: 30,
            gridAlign: { width: 5, height: 7, cellWidth: 200, cellHeight: 110, x: 180, y: 150 }
        });
      }else if(this.level==3){
        this.bricks = this.physics.add.staticGroup({
            key: "silver1",
            frameQuantity: 42,
            gridAlign: { width: 7, height: 6, cellWidth: 150, cellHeight: 120, x: 180, y: 150 }
        });
      }
      this.ball = this.physics.add.image(center[0], 800, 'bola').setCollideWorldBounds(true).setBounce(1);
      this.ball.setData('onPaddle', true);

      this.paddle = this.physics.add.image(center[0], 850, 'paddle1').setImmovable();


      this.physics.add.collider(this.ball, this.bricks, this.hitBrick, null, this);
      this.physics.add.collider(this.ball, this.paddle, this.hitPaddle, null, this);

      //  Input events
      this.input.on('pointermove', function (pointer) {
          this.paddle.x = Phaser.Math.Clamp(pointer.x, 120, 1110);

            if (this.ball.getData('onPaddle'))
            {
                this.ball.x = this.paddle.x;
            }
    }, this);

      this.input.on('pointerup', function (pointer) {
          this.perdestetext.alpha=0;
          this.leveltext.alpha=1;
          if (this.ball.getData('onPaddle'))
          {
              this.ball.setVelocity(-75, -300);
              this.ball.setData('onPaddle', false);
          }

      }, this);

      sair = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.S);

    },

    hitBrick: function (ball, brick)
    {
        brick.disableBody(true, true);

        if (this.bricks.countActive() === 0)
        {
            this.resetLevel();
        }
    },

    resetBall: function ()
    {
        this.ball.setVelocity(0);
        this.ball.setPosition(this.paddle.x, 800);
        this.ball.setData('onPaddle', true);
    },

    resetLevel: function ()
    {
        this.resetBall();
        if(modo=="História"){
          aula_state = 1;
          nTarefas -= 1;
          this.scene.start("Sala");
        }else{
            this.level += 1;
            this.scene.start("AulaAMI");
            if(this.level<4){
              this.leveltext.setText("Nivel "+this.level);
            }else{
              this.leveltext.setText("OBRIGADO POR JOGARES! :)").setScale(0.5);
            }
        }
    },

    resetLevelLost: function ()
    {
      this.scene.start("AulaAMI");
      this.leveltext.alpha=0;
      this.perdestetext.alpha=1;
    },

    hitPaddle: function (ball, paddle)
    {
        var diff = 0;

        if (ball.x < paddle.x)
        {
            //  Ball is on the left-hand side of the paddle
            diff = paddle.x - ball.x;
            ball.setVelocityX(-10 * diff);
        }
        else if (ball.x > paddle.x)
        {
            //  Ball is on the right-hand side of the paddle
            diff = ball.x -paddle.x;
            ball.setVelocityX(10 * diff);
        }
        else
        {
            //  Ball is perfectly in the middle
            //  Add a little random X to stop it bouncing straight up!
            ball.setVelocityX(2 + Math.random() * 8);
        }
    },

    update: function (){
      if(Phaser.Input.Keyboard.JustDown(sair)){
        if(modo=="MiniJogo"){
          this.scene.start("MiniJogosMenu");
        }else{
          this.scene.start("Sala");
        }
      }

        if (this.ball.y > 900)
        {
          vidas-=1;
          this.vidastext.setText("Vidas: "+vidas);
          if(vidas == 0){
            this.resetLevelLost();
          }else{
            this.resetBall();
          }
        }
    }

});
