class Foot extends Phaser.GameObjects.Sprite {
    constructor(scene, x, y, texture, frame) {
        super(scene, x, y, texture, frame);

        scene.add.existing(this); //add object to existing scene


    }
    
    update() {
        if (this.y < 400) {
            this.y = this.y + 5;
        } else {
            this.reset();
        }
    }

    reset() {
        this.x = Phaser.Math.Between(0, game.config.width);
        this.y = 0;
        console.log('foot reset')
    }
}