
//variables
var y=-20;
var x=150;
var screen = 0;
var score= 0;
var speed = 2;


function setup() {
  createCanvas(700, 450);
}

function draw() {
 if(screen == 0){
  	startGame()
  }else if(screen==2){
  	gameOver()
  }	
}

//game screen
function startGame(){
	background(204,255,255);
    fill(0);
    textStyle(BOLD);
    textSize(30);
  text("score : " + score, 300,35)
  fill(0,0,255)
  // ball 
  ellipse(x,y,20,20)
  fill(203,195,227)
  //rect
  rectMode(CENTER)
  rect(mouseX,height-20,50,10)
	y+= speed;
  if(y>height){
  	screen =2
	 }
  if(y>height-10 && x>mouseX-20 && x<mouseX+20){
  	y=-20
    speed+=1
    score+= 1
  }
	if(y==-20){
  	pickRandom();
  }
}

function pickRandom(){
	x= random(20,width-20)
}

//game over screen 
function gameOver(){
		background(62,12,94); 
        fill(255);
		textAlign(CENTER);
        textStyle(BOLD);
		text('SORRY :( YOU MISSED', width / 2, height / 2)
  	text("GAME OVER",  width / 2, height / 2 + 20)
		
}



