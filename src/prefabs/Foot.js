class Foot extends Phaser.GameObjects.Sprite {
    constructor(scene, x, y, texture, frame) {
        super(scene, x, y, texture, frame);

        scene.physics.add.existing(this); //add object to existing scene
        this.falling = 1;

    }
    
    update() {
        if (this.falling != 3) {
            if (this.y < -100) {
                this.y = this.y + 10;
            } else {
                this.falling = 2;
            }
        }
    }

    reset(x) {
        this.x = x;
        this.y = -1000;
        console.log('foot reset')
    }

    check_falling() {
        return this.falling;
    }

    set_falling(f){
        this.falling = f;
    }
}