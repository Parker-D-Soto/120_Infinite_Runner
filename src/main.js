let config = {
    type: Phaser.CANVAS,
    width: 720,
    height: 480,
    physics: {
        default: 'arcade',
        arcade: {
            debug: false
        }
    },
    scene: [Menu, Play]
};

let game = new Phaser.Game(config);
// define game settings
game.settings = {
    startingSpeed: 10   
}

//reserve some keyboard variables
let keyLEFT, keyRIGHT, keyF;