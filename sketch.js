var box;

function setup() {
  createCanvas(400,400);
  box = createSprite(200,200,30,30);
  //box.shapeColor = color(230, 230, 250);
  box.shapeColor = color("red");

}

function draw() {

   background("black");
   
   if (keyIsDown(RIGHT_ARROW)){
    //box.position.x = box.position.x +5;
    background("gray");
    box.shapeColor = color("gray");
  }

    if (keyIsDown(LEFT_ARROW)){
    //box.position.x= box.position.x -5;
    background("purple");
    box.shapeColor = color("purple");
  }
 
    if (keyIsDown(UP_ARROW)){
    //box.position.y = box.position.y - 5;
    background("blue");
    box.shapeColor = color("blue");
  }

  if (keyIsDown(DOWN_ARROW)){
    //box.position.y = box.position.y + 5;
    background("green");
    box.shapeColor = color("green");
  }

  drawSprites();
}
