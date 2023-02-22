function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);

  myTriangle(100, 100, 100, 200, 200, 100,"aqua");
  myEllipse(200, 200, 200,"red");
  myRoundSquare(0,0,100,10,20,30,50,"blue")
}

function myTriangle(x1,y1,x2,y2,x3,y3,theColor) {
   push()
  fill(theColor)
  triangle(x1,y1,x2,y2,x3,y3);
  pop()
}

function myEllipse(x,y,d,theColor) {
  push()
  fill(theColor)
  ellipse(x,y,d);
  pop()
}

function myRoundSquare(x,y,size,tl,tr,br,bl,theColor){
  push()
  fill(theColor)
  square(x,y,size,tl,tr,br,bl)
  pop()
  
}
