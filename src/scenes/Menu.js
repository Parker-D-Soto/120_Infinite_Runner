class Menu extends Phaser.Scene {
    constructor() {
        super("menuScene");
    }

    preload(){
        this.load.image('title', './assets/title_screen.png');
    }

    create(time, delta){
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
        
        this.background = this.add.tileSprite(0, 0, 0, 0, 'title').setOrigin(0, 0);
        this.add.text(game.config.width/2 + 200, game.config.height-50, 'Press (f) to play', menuConfig).setOrigin(0.5);
        keyF = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.F);
    }
    update(time, delta){
        if (Phaser.Input.Keyboard.JustDown(keyF)) {
            console.log("here2");
            this.scene.start("instructionsScene", time);
        }
    }
}