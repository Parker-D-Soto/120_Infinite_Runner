class Play extends Phaser.Scene {

    constructor() {
        super("playScene")
    }

    preload() {
        //load assets
        this.load.image("playerSprite", "./assets/Dungbeatle.png");
        this.load.image("dung", "./assets/Dungball.png");
    }

    create() {

        //create ground
        this.add.rectangle(0, 443, 780, 32, 0x0000FF).setOrigin(0, 0);
        this.ball = new Dungball(this, game.config.width / 2 + 80, 432, 'dung').setOrigin(0);
        this.player = new Scaraphys(this, game.config.width / 2, 380, 'playerSprite', 0, this.ball, game.settings.startingSpeed).setOrigin(0, 0);

        
        
        //define keyboard keys
        keyLEFT = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.LEFT);
        keyRIGHT = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.RIGHT);
    }

    update() {
        this.player.update();
    }
}