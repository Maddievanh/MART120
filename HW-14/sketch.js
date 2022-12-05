

// player 1

var characterX = 100; 
var characterY = 76; 

// this is for the letters 
var a = 65;
var s = 83;
var d = 68;
var w = 70;

// shape / obstacles
var myX = 25;
var myY = 25; 

var myXs = [];
var myYs = []; 
var diameters = []; 

var myXSpeeds = []; 
var myYSpeeds = []; 


//when mouse is clicked; 

var mouseShapeX; 
var mouseShapeY; 

function setup()
{
    createCanvas(700,700);
   
    
    for (var i = 0; i <5; i++){
        myXSpeeds[i]= Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
        myYSpeeds [i] = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
        myXs[i] = getRandomNumber(450)
        myYs[i] = getRandomNumber(500)
        diameters[i]= getRandomNumber (25); 
    }
    createCharacter(100,76); 
}

function draw()
{

    background(100, 75,79); 
    textSize(20);
    

   // function calls
  
    drawCharacter(); 

    characterMovement(); 

    drawText2(); 

    createBorders(); 

    mouseClicked(); 
    


fill(200,300,34); 
    for(var i = 0; i < myXs.length; i++) {
        square(myXs[i], myYs[i], diameters[i]); 
        myXSpeeds[i]= Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
        myYSpeeds[i] = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
    }
   // move the shape
   myXs[i] += myXSpeeds[i];
   myYs[i] += myYSpeeds[i];
   // check to see if the shape has gone out of bounds
   if (myXs[i] > width) {
       myXs[i] = 0;
   }
   if (myXs[i] < 0) {
       myXs[i] = width;
   }
   if (myYs[i] > height) {
       myYs[i] = 0;
   }
   if (myYs[i] < 0) {
       myYs[i] = height;
}

}

function drawText2() 
{
    fill(200,64,0)
    textSize(20);
text("EXIT", width-645,height-70)
}

function createBorders()
{
    fill(100,64,0)
    rect(9, 10, 50, 600);
    fill(230,230,250)
    rect(640, 10, 50, 650);
    fill(200,30,40)
    rect(82, 660, 600, 20);

}
 

// borders 

   

//create function 
function createCharacter(x,y)
{
    characterX = x;
    characterY = y;
}

//draw character function
function drawCharacter()
{
    fill(30,50,10)
ellipse(characterX, characterY, 40, 40);
}

//character movement
function characterMovement()
{

if(keyIsDown(w))
{
    characterY -= 10;
}
else if(keyIsDown(s)) {
    characterY += 10;
   
}
if(keyIsDown(a)) {
    characterX -= 10;
}

else if(keyIsDown(d)) {
    characterX += 10; 
}
}



//mouse pressed shape
function drawShape()
{
    fill(100,0,0);
    square(mouseShapeX,mouseShapeY,20 );
}

function mouseClicked()
{
    mouseShapeX = mouseX
    mouseShapeY = mouseY
    mouseX, mouseY, 25
}


function drawText()
{
if(characterX <=0  && characterY <= 700)
{
    stroke(2);
    textSize(20);
    text("Winner!", width/2-50, height/2-50);
}

}

