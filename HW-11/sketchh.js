// player 1

var characterX = 100; 
var characterY = 76; 

// this is for the letters 
var a = 65;
var s = 83;
var d = 68;
var f = 70;

// shape / obstacles
var shapeX = 560
var shapeY = 560
var shapeXSpeed; 
var shapeYSpeed; 

var sqX = 42
var sqY = 205
var sqXSpeed;
var sqYSpeed; 

//when mouse is clicked; 

var mouseShapeX; 
var mouseShapeY; 
function setup()
{
    createCanvas(700,700);
   
}

function draw()
{

    background(100, 75,79); 
    textSize(20);
    text("X: " + mouseX,100,200 );
    text("Y: " + mouseY,100,220 );
// obstacles
fill(100,64,0)
rect(9, 10, 50, 600);
fill(230,230,250)
rect(640, 50, 50, 600);
fill(200,30,40)
rect(82, 660, 600, 20);

// exit 
textSize(20);
text("EXIT", width-645,height-70)


//character 
fill(30,50,10)
ellipse(characterX, characterY, 40, 40);

//character movement
if(keyIsDown(a))
{
    characterY -= 10;
}
else if(keyIsDown(s)) {
    characterY += 10;
   
}
if(keyIsDown(d)) {
    characterX -= 10;
}

else if(keyIsDown(f)) {
    characterX += 10; 
}

//obstacle moving

fill(20,200,50)
square(shapeX, shapeY, 55);

//random speed again
shapeXSpeed = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
     shapeYSpeed = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);

//obstacle movement
shapeX += shapeXSpeed;
shapeY+= shapeYSpeed;

if(shapeX > width )
{
    shapeX = 0;
}
if(shapeX <0 )
{
    shapeX= width;
}
if(shapeY > height)
{
    shapeY=0
}
if(shapeY<0)
{
    shapeY= height; 
}

//sqaure obstacle 2
fill(230,230,221)
square(sqX, sqY, 55);

//random speed again
sqXSpeed = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
     sqYSpeed = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);

//obstacle movement
sqX += sqXSpeed;
sqY+= sqYSpeed;

if(sqX > width )
{
    sqX = 0;
}
if(sqX <0 )
{
    sqX= width;
}
if(sqY > height)
{
    sqY=0
}
if(sqY<0)
{
    sqY= height; 
}


//mouse pressed shape
fill(0,0,0);
square(mouseX,mouseY,20 );

function mouseClicked()
{
    mouseShapeX = mouseX
    mouseShapeY = mouseY
}



// character exit
if(characterX <=0  && characterY <= 700)
{
    stroke(2);
    textSize(20);
    text("Winner!", width/2-50, height/2-50);
}
} 