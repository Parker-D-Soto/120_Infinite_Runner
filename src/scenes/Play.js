class Play extends Phaser.Scene {

    constructor() {
        super("playScene")
    }

    preload() {
        //load assets
        this.load.image("playerSprite", "./assets/dungo_01.png");
        this.load.image("dung", "./assets/dungball.png");
        this.load.image("foot", "./assets/deathfoot.png");
        this.load.image("shadow", "./assets/shadow.png")
    }

    create() {
        //create ground
        this.add.rectangle(0, 443, 780, 32, 0x0000FF).setOrigin(0, 0);
        this.ball = new Dungball(this, game.config.width / 2 + 145, 432, 'dung').setOrigin(0.5, 0.5);
        this.player = new Scaraphys(this, game.config.width / 2, 300, 'playerSprite', 0, this.ball, game.settings.startingSpeed).setOrigin(0, 0);
        this.foot = new Foot(this, 500, -1000, 'foot').setOrigin(0, 0).setScale(.5,.5);
        this.shadow = new Shadow(this, 500, 300, 'shadow').setOrigin(0, 0);

        //define keyboard keys
        keyLEFT = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.LEFT);
        keyRIGHT = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.RIGHT);
        keyF = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.F);
        this.gameOver = false;

        this.physics.add.overlap(this.player, this.foot, this.setgameOver, null, this);
    }

    update() {
        if(!this.gameOver) {
            this.player.update();
            if (this.foot.check_falling() == 1 || this.foot.check_falling() == 3) {
                this.foot.update();
            } else if (this.foot.check_falling() == 2) {
                this.foot.set_falling(3);
                this.clock = this.time.delayedCall(1000, () => {
                    var foot_x = Phaser.Math.Between(100, game.config.width-100);
                    this.foot.reset(foot_x);
                    this.shadow.reset(foot_x);
                    this.foot.set_falling(1);
                }, null, this);
            }
        }

        if (this.gameOver && Phaser.Input.Keyboard.JustDown(keyF)) {
            this.scene.start("playScene");
        } 
    }

    setgameOver() {
        this.gameOver = true;
    }
}