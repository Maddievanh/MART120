function setup() {
  createCanvas(700,700);
}

function draw() {
  background(220);
  textSize(30)
  fill(200,200,0);
  text('My Portrait', 250, 30);
  
  // head
  fill(210,180,140);
  circle(300,200,200);

  // eyes
  fill(250,250,250);
  circle(350,185,30);
  circle(250,185,30);

    strokeWeight(15);
    fill(0);
    point(255,189);
    point(353,190);

    strokeWeight(3);
    

  //nose
   strokeWeight(5);
   triangle(300, 200, 289, 225, 330, 225);

   fill(255,255,255);
   circle(300,215,10)

  //mouth
    fill(255,0,0);
    ellipse(300,265,50,20);
    

  //hair
  line(165,330,215,150);
    line(430,340,395,170);

  //body
  fill(230,230,250);
  triangle(350,300,300,600,245,300);

  line(345,345,445,300);
  line(250,345,150,300);
  line(320,500,400,600);
  line(280,500,200,600);

  textSize(10)
  fill(255,0,0);
  text('Madison Van Horn', 200,675);
}

