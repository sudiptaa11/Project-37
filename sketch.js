//creating global variables
var canvas, backgroundImage;
var gameState = 0;
var contestantCount;
var allContestants;
var answer;
var database;
var question, contestant, quiz;


function setup(){
  canvas = createCanvas(850,400);
  database = firebase.database();
  //creating a quiz variable as an object of quiz class
  quiz = new Quiz();
  //calling getState function and starting the game by start function
  quiz.getState();
  quiz.start();
}


function draw(){
  background("pink");
  //if the number of contestants are 2, updating state to 1
  if(contestantCount === 2){
    quiz.update(1);
  }
  //if gameState is 1. calling in play function
  if(gameState === 1){
    clear();
    quiz.play();
  }
}
