//Collaborators: Elijah Miller, Parker Soto, Vincente Hernandez
// Title: The Legend of Scarabaeus
// Date Completed: May 5, 2020
// Creative Tilt Justification:
// Technical aspect we focused on the increasing size of the ball
// as a representation of one's score gained rather than distance traveled
// The music was an original piece taking influence from egyptian style
// music (drums were sample beats)
// Our visual style took a backyard scene and applied an egyptian like feel
// to go along with the music.
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