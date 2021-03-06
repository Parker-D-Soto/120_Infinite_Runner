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
        this.load.image("background", "./assets/background.png")
        this.load.image("foreground", "./assets/foreground.png")
        this.load.image("badbug", "./assets/dungbad_01.png")
        this.load.audio('music', "./assets/loop.mp3");
        this.load.audio('steal_sound', "./assets/Slime-SoundBible.com-803762203.wav");
        this.load.audio('splat_sound', "./assets/Spit_Splat-Mike_Koenig-1170500447.wav");
    }

    create(time) {
        this.startTime = time;
        this.timeElapsed = 0;
        this.previousTime = 0;
        this.totalScore = 0;
        this.timeFound = false;
        this.gameOverText = false;

        //create ground
        this.background = this.add.tileSprite(0, 0, 0, 0, 'background').setOrigin(0, 0);
        this.foreground = this.add.tileSprite(0, 0, 0, 0, 'foreground').setOrigin(0, 0);
        this.ball = new Dungball(this, game.config.width / 2 + 145, 432, 'dung').setOrigin(0.5, 0.5);
        this.player = new Scaraphys(this, game.config.width / 2 + 60, 300, 'playerSprite', 0, this.ball, game.settings.startingSpeed).setOrigin(0, -1).setScale(.5,.5);
        var foot_x = Phaser.Math.Between(50, game.config.width-50);
        this.foot = new Foot(this, foot_x, -1000, 'foot').setOrigin(0, 0).setScale(.5,.5);
        this.badbug = new Dungbad(this, -490, 400, 'badbug');
        this.shadow = new Shadow(this, 500, 300, 'shadow').setOrigin(0, 0);

        //define keyboard keys
        keyLEFT = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.LEFT);
        keyRIGHT = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.RIGHT);
        keyF = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.F);
        this.gameOver = false;

        var music = this.sound.add('music');
        this.steal_sound = this.sound.add('steal_sound');
        this.splat_sound = this.sound.add('splat_sound');
        music.setLoop(true);
        this.check_music;
        if (this.check_music != false) {
            music.play();
        }

        function foot_smash() {
            if (this.foot.check_falling() == 1){
                return true;
            }else{
                return false;
            }
        };

        
        this.physics.add.overlap(this.player, this.foot, this.setgameOver, foot_smash, this);
        //this.physics.add.overlap(this.player, this.badbug, this.setBadbug, this);
    }

    update(time, delta) {
        this.timeElapsed = Math.floor(time - this.startTime);

        if(!this.gameOver) {
            this.background.tilePositionX += 1;
            this.foreground.tilePositionX += 2;
            this.player.update();
            this.badbug.update();
            if (this.foot.check_falling() == 1 || this.foot.check_falling() == 3) {
                this.foot.update();
            } else if (this.foot.check_falling() == 2) {
                this.foot.set_falling(3);
                this.clock = this.time.delayedCall(1000, () => {
                    var foot_x = Phaser.Math.Between(50, game.config.width-50);
                    this.foot.reset(foot_x);
                    this.shadow.reset(foot_x);
                    this.foot.set_falling(1);
                }, null, this);
            }
            
           if(this.player.x - 100 <= this.badbug.x && this.badbug.x <= this.player.x + 100) {
               this.setBadbug();
           }

           this.totalScore += this.ball.scalingX / 2;
        }
        if(this.gameOver) {
            if(!this.gameOverText) {
                this.add.text(game.config.width/2, game.config.height/2, 'GAME OVER').setOrigin(0.5);
                this.add.text(game.config.width/2, game.config.height/2 + 32, 'Score: ' + this.totalScore).setOrigin(0.5);
                this.add.text(game.config.width/2, game.config.height/2 + 64, '(F) to Return To Main Screen').setOrigin(0.5);
                this.gameOverText = true;
            }
        }
        if (this.gameOver && Phaser.Input.Keyboard.JustDown(keyF)) {
            this.check_music = false;
            this.scene.start("menuScene");
        }

        if(!this.badbug.alive) {
            this.clock = this.time.delayedCall(2000, () => {
                this.badbug.alive = true;
            }, null, this);
            this.badbug.x = -490;
        }
    }

    setgameOver() {
        this.splat_sound.play();
        if(!this.timeFound) {
            this.timeFound = true;
            this.totalScore += Math.floor(this.timeElapsed / 1000);
            this.totalScore = Math.round(this.totalScore, 0);
        }
        this.gameOver = true;
    }

    setBadbug () {
        if (!this.player.raiseBall) {
            this.steal_sound.play();
            this.badbug.alive = false;
            this.ball.scalingX = this.ball.scalingX / 2;
            this.ball.scalingY = this.ball.scalingY / 2;
            this.ball.speedConversion = this.ball.speedConversion / 2;
            this.ball.update(0);
        }
    }
}