class Dungball extends Phaser.GameObjects.Sprite {
    constructor(scene, x, y, texture, frame) {
        super(scene, x, y, texture, frame);

        scene.add.existing(this); //add object to existing scene

        this.scalingX = 1
        this.scalingY = 1
    }
    
    update(direction) {
        this.x = this.x + direction;
        this.scalingX += 0.005;
        this.scalingY += 0.005;
        this.setScale(this.scalingX, this.scalingY);
    }
}