
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
if(screen== 0){
    welcomeScreen()
}
 else if(screen == 1){
  	startGame()
  }else if(screen==2){
  	gameOver()
  }	
}

//WELCOME
function welcomeScreen(){
    background(0);
    fill(204,255,255);
    textSize(35);
    textAlign(CENTER);
    text('Happy Finals! ', width/ 2, height /2)
    textSize(10); 
    text ('click screen to play the game', width/ 2, height /2 + 20)

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
  	setRandom();
  }
}

function setRandom(){
	x= random(20,width-20)
}
//change screen 0-1 
function mousePressed(){
	if(screen==0){
  	screen=1
  }else if(screen==2){
  	screen=0
  }
}
//game over screen 
function gameOver(){
		background(62,12,94); 
        fill(255);
        textSize(25); 
		textAlign(CENTER);
        textStyle(BOLD);
		text('SORRY :( YOU MISSED', width / 2, height / 2)
        textSize(15); 
  	text("GAME OVER",  width / 2, height / 2 + 30)
		
}



