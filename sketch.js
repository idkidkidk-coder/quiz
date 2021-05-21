var canvas, backgroundImage;

var gameState = 0;
var contestantCount;
var allContestants;
var answer;
var database;

var question, contestant, quiz;


function setup(){
  canvas = createCanvas(840,405);
  database = firebase.database();
  quiz = new Quiz();
  quiz.getState();
  quiz.start();
}


function draw(){

  background(255, 165, 0);

  if(contestantCount === 4){
    quiz.update(1);
  }
  if(gameState === 1){
    //clear();
    quiz.play();
  }

  ///////////////////////////////////////////////

  console.log(mouseX + ":X||Y:" + mouseY)

  for (var i = 5; i < 843; i=i+10){
  
  var dot = createSprite(i, 7, 3, 3); //top
  dot.shapeColor = "white";
  
  }

  for (var i = 5; i < 843; i=i+10){
  
  var dot1 = createSprite(i, 397, 3, 3);//bottom
  dot1.shapeColor = "white";
  
  }

  for (var i = 7; i < 500; i=i+10){
  
  var dot1 = createSprite(5,i, 3, 3);//left
  dot1.shapeColor = "white";
  
  }

  for (var i = 7; i < 500; i=i+10){
  
  var dot1 = createSprite(835 ,i, 3, 3);//right
  dot1.shapeColor = "white";
  
  }

  drawSprites();

}
