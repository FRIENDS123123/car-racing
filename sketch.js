var form,player,game;
var database;
var gameState = 0;
var position;
var playerCount;


function setup(){
    database = firebase.database()
    canvas = createCanvas(400,400);
    game = new Game();
    game.getState();
    game.start();
    

}

function draw(){
    background("white");
    
}
