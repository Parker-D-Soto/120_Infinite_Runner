//Collaborators: Elijah Miller, Parker Soto, Vincente Hernandez
// Title: The Legend of Scarabaeus
// Date Completed: May 5, 2020
// Creative Tilt Justification:

/* In the technical aspect we created an original algorithm,
    that allows the player to be scored relative to the size
    of the dungball over a given amount of time, i.e. if the ball
    is kept bigger for a longer amount of time, the higher the score.
    Also we were able to create a dropping and retracting foot that moves
    around the screen randomly.
    In the art aspect, we created all the assets ourselves. We put significant
    effort in each asset and background, which we created. Also, the music
    used in the game is an original score that we created (except for the drum beat)
*/

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
    scene: [Menu, Instructions, Play]
};

let game = new Phaser.Game(config);
// define game settings
game.settings = {
    startingSpeed: 10   
}

//reserve some keyboard variables
let keyLEFT, keyRIGHT, keyF;