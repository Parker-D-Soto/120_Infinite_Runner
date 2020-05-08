class Instructions extends Phaser.Scene {
    constructor() {
        super("instructionsScene");
    }

    preload(){
        this.load.image("playerSprite", "./assets/dungo_01.png");
        this.load.image("dung", "./assets/dungball.png");
        this.load.image("background", "./assets/background.png");
        this.load.image("foreground", "./assets/foreground.png");
        this.load.image("badbug", "./assets/dungbad_01.png");
        this.load.image("foot", "./assets/deathfoot.png");
    }

    create(){
        let menuConfig = {
            fontFamily: 'Courier',
            fontSize: '28px',
            backgroundColor: '#F3B141',
            color: '#843605',
            align: 'right',
            padding: {
                top: 5,
                bottom: 5,
            },
            fixedWidth: 0
        }

        let centerX = game.config.width/2;
        let centerY = 0 + 100;
        let textSpacer = 32;

        this.add.text(centerX, centerY, 'How to Play', menuConfig).setOrigin(0.5);
        this.add.text(centerX, centerY + textSpacer, 'Use the arrows to move', menuConfig).setOrigin(0.5);
        this.add.text(centerX, centerY + textSpacer * 2, 'Press F to raise your ball', menuConfig).setOrigin(0.5);
        this.add.text(centerX, centerY + textSpacer * 3, 'Move to increase the size of your ball', menuConfig).setOrigin(0.5);
        this.add.text(centerX, centerY + textSpacer * 4, 'Enemy beetles make your ball smaller', menuConfig).setOrigin(0.5);
        this.add.text(centerX, centerY + textSpacer * 5, 'Raise your ball to avoid enemy beetles', menuConfig).setOrigin(0.5);
        this.add.text(centerX, centerY + textSpacer * 6, 'Bigger the ball the more points earned', menuConfig).setOrigin(0.5);
        this.add.text(centerX, centerY + textSpacer * 7, 'But the bigger the ball the slower you move', menuConfig).setOrigin(0.5);
        this.add.text(centerX, centerY + textSpacer * 8, 'Avoid getting squashed by the foot', menuConfig).setOrigin(0.5);
        this.add.text(centerX, centerY + textSpacer * 9, 'Press (F) to countiue', menuConfig).setOrigin(0.5);
        keyF = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.F);
    }

    update(time, delta){
        if (Phaser.Input.Keyboard.JustDown(keyF)) {
            console.log("here");
            this.scene.start("playScene", time);
        }
    }
}