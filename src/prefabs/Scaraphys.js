class Scaraphys extends Phaser.GameObjects.Sprite {
    constructor(scene, x, y, texture, frame, rollingball, playerSpeed) {
        super(scene, x, y, texture, frame);

        scene.add.existing(this); //add object to existing scene

        this.dBall = rollingball

        this.speed = playerSpeed
    }
    
    update() {
        if(keyLEFT.isDown && this.x >= 10) {
            this.x -= this.speed;
            var ballSpeed = this.speed * -1
            this.dBall.update(ballSpeed);
        } else if(keyRIGHT.isDown && this.x <= 630) {
            this.x += this.speed;
            this.dBall.update(this.speed);
        }
    }
}