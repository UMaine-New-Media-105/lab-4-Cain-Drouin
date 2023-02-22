function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);

  mySprite(100, 100, 1.5, "aqua", "red", "blue");
}

function mySprite(x, y, size, tColor, eColor, rColor) {
  if (mouseIsPressed === true) {
    push();
    translate(x, y);
    scale(size);
    //Ears
    fill("black");
    ellipse(30, 20, 20, 40);
    ellipse(70, 20, 20, 40);
    fill("chocolate");
    ellipse(70, 20, 10, 30);
    ellipse(30, 20, 10, 30);
    //face
    fill("black");
    ellipse(50, 50, 80);
    push();
    //eyes
    fill("white");
    noStroke();
    ellipse(35, 35, 15);
    ellipse(65, 35, 15);
    pop();
    //nose
    ellipse(35, 35, 5);
    ellipse(65, 35, 5);
    fill("chocolate");
    ellipse(50, 50, 20);
    push();
    fill("black");
    ellipse(53, 54, 5);
    ellipse(47, 54, 5);
    pop();
    pop();
  } else {
    push();
    translate(x, y);
    scale(size);
    fill(tColor);
    triangle(0, 100, 100, 0, 0, 0);
    fill(eColor);
    ellipse(100, 100, 200);
    fill(rColor);
    square(50, 60, 100, 10, 20, 30, 50);
    pop();
  }
}
