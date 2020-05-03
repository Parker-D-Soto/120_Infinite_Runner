class Dungball extends Phaser.GameObjects.Sprite {
    constructor(scene, x, y, texture, frame) {
        super(scene, x, y, texture, frame);

        scene.add.existing(this); //add object to existing scene

        this.scalingX = 0.05;
        this.scalingY = 0.05;
        this.setScale(this.scalingX, this.scalingY);
        this.rotationAngle = 0;
        this.speedConversion = 0;
        this.originalWidth = this.width * this.scalingX;
        this.originalHeight = this.height * this.scalingY;
    }
    
    update(direction) {
        this.setAngle(this.rotationAngle);
        this.rotationAngle += 1;
        this.x = this.x + direction;
        if (this.scalingX < 3){
            this.scalingX += 0.005 * .05;
            this.scalingY += 0.005 * .05;
            this.speedConversion += 0.005;
        }
        this.setScale(this.scalingX, this.scalingY);
        this.newHeight = this.height * this.scalingX;
        this.newWidth = this.width * this.scalingY;
        this.x += (this.newWidth - this.originalWidth) / 2;
        this.y -= (this.newHeight - this.originalHeight) / 2;
        this.originalWidth = this.newWidth;
        this.originalHeight = this.newHeight;
    }
}