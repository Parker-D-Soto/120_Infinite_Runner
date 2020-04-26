class Dungball extends Phaser.GameObjects.Sprite {
    constructor(scene, x, y, texture, frame) {
        super(scene, x, y, texture, frame);

        scene.add.existing(this); //add object to existing scene

        this.scalingX = 1;
        this.scalingY = 1;
        this.rotationAngle = 0;
        this.heightDifference = 0;
        this.currentHeight = this.height;
        this.initialY = this.y;
        this.initialX = this.x;
        this.speedConversion = 0;
    }
    
    update(direction) {
        this.setAngle(this.rotationAngle);
        this.rotationAngle += 1;
        this.x = this.x + direction;
        if (this.scalingX < 10){
            this.scalingX += 0.005;
            this.scalingY += 0.005;
            this.speedConversion += 0.005;
        }
        this.setScale(this.scalingX, this.scalingY);
        this.currentHeight = this.height * this.scalingY;
        this.heightDifference = this.currentHeight - this.height;
        this.y = this.initialY - this.heightDifference;
    }
}