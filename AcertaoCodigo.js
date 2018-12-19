class AcertaoCodigo extends Phaser.Scene {
    constructor() {
        super({key: "AcertaoCodigo"});
    }

    create() {
        //Variables
        tentativas = 0;
        style = {font: "45px Gill Sans MT", fill: "#006600", align: "center"};
        style2 = {font: "35px Gill Sans MT", fill: "#000000", align: "center"};
        //Background
        this.add.image(center[0], center[1], "jardim");
        pontuacao = this.add.text(center[0]+360, center[1]-450, "Pontuação: \n"+score,style);
        life = this.add.text(center[0], center[1]-450, "Tentativas: \n"+tentativas,style);
        info = this.add.text(center[0], center[1]-200, "Pressione enter para começar o jogo.",style2);

        var ground = this.physics.add.staticGroup();

        ground.create(460, 800, 'ground').setScale(0.2);
        //Player
        if(menuNumber===6){
            player = this.physics.add.image(1100, 712, "personagem2");
        }else {
            player = this.physics.add.image(1100,712, 'personagem1');
        }
        player.setBounce(0);
        player.setCollideWorldBounds(true);
        this.add.text(700,100,"Pressiona S para voltar.",style2).setScale(0.9);

        player.on("pointerdown", function (ev) {
            menuNumber = 0;
        });

        cerveja = this.physics.add.image(110,900, 'cerveja');
        //cerveja.setScale(0.8);
        cerveja.setCollideWorldBounds(true);

        livro = this.physics.add.image(500,450, 'livro');
        livro.setCollideWorldBounds(true);

        //Input Events
        cursors = this.input.keyboard.createCursorKeys();
        spacebar = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);
        enter = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.ENTER);
        sair = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.S);
    }


    update() {
        
        if (cursors.left.isDown && stat == 1){
            player.setVelocityX(-vel);

        }else if(cursors.right.isDown && player.x < 1100 && stat == 1){
            player.setVelocityX(vel);

        }else {
            player.setVelocityX(0);
        }

        if (Phaser.Input.Keyboard.JustDown(spacebar)){
            if (stat == 1) {
                if(player.y >= 700) {
                    player.setVelocityY(-vely);
                    player.body.gravity.set(0, 700);
                }
            }
        }

        if (Phaser.Input.Keyboard.JustDown(enter)) {
            // start game
            stat = 1;
            vel = 250;
            velc = 200;
            vell = 300;
            cerveja.setVelocityX(velc);
            if (tentativas % 2 == 0) {
                livro.x = 110;
                livro.y = 450;
            } else {
                livro.x = 1100;
                livro.y = 450;
            }
            livro.alpha = 1;
            livro.setVelocityX(vell);
            if(tentativas > 0) {
                player2.alpha = 0;
            }
            player.alpha = 1;
            player.x = 1100;
            player.y = 712;
            cerveja.alpha = 1;
            livro.alpha = 1;
            info.alpha = 0;
            pontuacao.alpha = 0;
            score = 0;
            pontuacao = this.add.text(center[0]+360, center[1]-450, "Pontuação: \n"+score,style);
        }

        if (cerveja.x >= 1100) {
            cerveja.setVelocityX(-velc);
        }
        if (cerveja.x <= 100) {
            cerveja.setVelocityX(velc);
        }
        if (livro.x >= 1100) {
            livro.setVelocityX(-vell);
        }
        if (livro.x <= 100) {
            livro.setVelocityX(vell);
        }

        if(Phaser.Input.Keyboard.JustDown(sair)){
            if(menuNumber===6 || menuNumber ===5){
                posicao = locais[7];
                this.scene.start("Jardim");
                stat = 0;
                pontuacao = 0;
            }else {
                this.scene.start("MiniJogosMenu");
                stat = 0;
                pontuacao = 0;
            }            
        }

        function playerHit(player, cerveja) {
            stat = 0;
            cerveja.x = 110;
            cerveja.y = 900;
            tentativas += 1;
            life.alpha = 0;
            life = this.add.text(center[0], center[1]-450, "Tentativas: \n"+tentativas,style);
            cerveja.setVelocityX(0);
            livro.setVelocityX(0);
            cerveja.alpha = 0;
            livro.alpha = 0;
            player.alpha = 0;
            if(menuNumber===6){
                player2 = this.physics.add.image(player.x, 712, "personagem2_beer");
            }else {
                player2 = this.physics.add.image(player.x,712, 'personagem1_beer');
            }
            player2.setScale(0.95);
            player2.alpha = 1;
            if(tentativas > 0) {
                info.alpha = 0;
                info = this.add.text(center[0], center[1]-200, "Pressione enter para voltar a jogar.",style2);
                info.alpha = 1;
            }
        }

        function livroHit(player, livro) {
            livro.alpha = 0;
            score += 100;
            if (score < 500){
                if (score % 200 == 0) {
                    livro.x = 110;
                    livro.y = 450;
                } else {
                    livro.x = 1100;
                    livro.y = 450;
                }
                vell += 5;
            }
            if (score >= 500 && score < 1700){
                if (score % 200 == 0) {
                    livro.x = 110;
                    livro.y = 450;
                } else {
                    livro.x = 1000;
                    livro.y = 450;
                }
                vell += 10;
                velc += 20;
            }
            if (score == 1700  && (menuNumber == 6 || menuNumber == 5)){
                livro.alpha = 0;
                cerveja.alpha = 0;
                var congratz = this.add.text(center[0], center[1], "Parabéns, conseguiste obter os 2000 pontos!", style);
                torre = locais[7];
                posicao = [2];
                this.scene.start("Jardim");
                
            }
            livro.setVelocityY(0);
            livro.setVelocityX(vell);
            livro.alpha = 1;

            pontuacao.alpha = 0;
            pontuacao = this.add.text(center[0]+360, center[1]-450, "Pontuação: \n"+score,style);
        }

        this.physics.add.collider(player, cerveja,playerHit, null, this);
        this.physics.add.collider(player, livro, livroHit, null, this);
    }
}
