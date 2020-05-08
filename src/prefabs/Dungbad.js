class Dungbad extends Phaser.GameObjects.Sprite {
    constructor(scene, x, y, texture, frame) {
        super(scene, x, y, texture, frame);

        scene.add.existing(this);
        scene.physics.add.existing(this); //add object to existing scene
        this.alive = false;
        this.setScale(0.7, 0.7);
    }
    
    update() {
        if(this.alive) {
            this.x += 3;
            if(this.x >= game.config.width) {
                this.x = -490;
            }
        }
    }
}