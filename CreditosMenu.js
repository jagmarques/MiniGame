class CreditosMenu extends Phaser.Scene {

    constructor() {
        super({key: "CreditosMenu"});
    }

    create() {
        this.add.image(625, 450, "creditos");

        var backBut = this.add.image(1180, 840, "backBut").setInteractive();

        //INPUT & OVER EVENTS
        document.body.style.cursor = 'auto';
        this.input.on("pointerout", function (ev) {
            document.body.style.cursor = 'auto';
        });

        menuNumber = -1;
        backBut.on("pointerdown", function (ev) {
            menuNumber = 4;
        })
        backBut.on("pointerover", function (ev) {
            document.body.style.cursor = 'pointer';
        })
    }

    update() {
        if (menuNumber===4) {
            this.scene.start("MainMenu");
        }
    }
}
