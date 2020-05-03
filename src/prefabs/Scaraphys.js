class Scaraphys extends Phaser.GameObjects.Sprite {
    constructor(scene, x, y, texture, frame, rollingball, playerSpeed) {
        super(scene, x, y, texture, frame);

        scene.add.existing(this)
        scene.physics.add.existing(this); //add object to existing scene

        this.dBall = rollingball;

        this.initialSpeed = playerSpeed;
        this.speed = playerSpeed;

        this.raiseBall = false;
        this.ballCurrentY = this.dBall.y;
    }
    
    update() {
        if(keyLEFT.isDown && this.x >= 10 && !keyF.isDown) {
            this.x -= this.speed;
            var ballSpeed = this.speed * -1
            this.dBall.update(ballSpeed);
            if(this.speed > 0.25) {
                this.speed = this.initialSpeed - this.dBall.speedConversion;
            }
            this.ballCurrentY = this.dBall.y;
        } else if(keyRIGHT.isDown && this.x <= 630 && !keyF.isDown) {
            this.x += this.speed;
            this.dBall.update(this.speed);
            this.ballCurrentY = this.dBall.y;
        } else if(keyF.isDown) {
            this.raiseBall = true;
            this.dBall.y = this.ballCurrentY - 100;
        }
        if(!keyF.isDown) {
            this.dBall.y = this.ballCurrentY;
            this.raiseBall = false;
        }
    }
}