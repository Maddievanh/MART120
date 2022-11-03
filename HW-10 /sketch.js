var x = 100;
var y = 200;

var headX = 300;
var headY = 199;
var headDirection = 4;



var mouthX = 299;
var mouthY = 266;
var mouthDirection = 1; 

var bodyX = 295;
var bodyY = 431;
var bodyDirection = 3; 

var eye1X = 351; 
var eye1Y = 183;
var eye1Direction = 5; 

var eye2X = 0;
var eye2Y = 0;
var eye2DirectionX = 2; 
var eye2DirectionY= 2; 
 


var size = 30;
var count = 0;
var sizeDirection = 2;

function setup() {
  createCanvas(700,700);
  
}

function draw() {
  background(220);
  textSize(size);
    size+= sizeDirection;
    count++;
    if(count > 5)
    {
        sizeDirection *=-1;
        count = 0;
    
    }


  fill(200,200,0);
  text('My Portrait', 250, 30);
  

  
  
  // head
  fill(210,180,140);
  circle(300,headY,200,200);
  headY += headDirection;
  if(headY <= 0 || headY >= 600)
  {
   headDirection *= -1;
  }

  // eyes
  fill(250,250,250);
  circle(eye1X,eye1Y,30);
  eye1X+=eye1Direction;
    if(eye1X >= 600 || eye1X <= 4)
    {
        eye1Direction *= -1;
    }


  
  circle(eye2X,eye2Y,30);
  eye2X=eye2X + eye2DirectionX; 
  eye2Y=eye2Y + eye2DirectionY;
  if (eye2X >= 700 || eye2Y >= 700 ){
    eye2DirectionX*=-1;
    eye2DirectionY*=-1;
  }
 if (eye2X <= 1 || eye2Y <= 1) {
  eye2DirectionX*=-1;
    eye2DirectionY*=-1;
 }


  
   


    strokeWeight(15);
    fill(0);
    point(eye2X,eye2Y);
    point(eye1X,eye1Y);

    strokeWeight(3);
    

  //nose
   strokeWeight(5);
   triangle(290, 200, 280, 225, 330, 225);



   fill(255,255,255);
   circle(300,215,10)

  //mouth
    fill(255,0,0);
    ellipse(mouthX,mouthY,50,20);
    mouthX+=mouthDirection;
    if(mouthX >= 600 || mouthX <= 4)
    {
        mouthDirection *= -1;
    }

    

  //hair
  line(165,330,215,150);
    line(430,340,395,170);

  //body
  fill(230,230,250);
  rect(251,bodyY,90,200);
  bodyY += bodyDirection;
  if(bodyY <= 0 || bodyY >= 600)
  {
   bodyDirection *= -1;
  }


  line(345,345,445,300);
  line(250,345,150,300);
  line(320,500,400,600);
  line(280,500,200,600);

  textSize(10)
  fill(255,0,0);
  text('Madison Van Horn', 200,675);
}

