var fr,mr,ob1,ob2,ob3,ob4;

function setup() {
  createCanvas(800,400);
  fr = createSprite(400, 200, 50, 50);
  mr = createSprite(200,200,80,60);
  ob1 = createSprite(100,100,30,30)  
  ob2 = createSprite(200,100,30,30)  
  ob3 = createSprite(300,100,30,30)  
  ob4 = createSprite(400,100,30,30)  

  ob1.shapeColor = "blue"
  ob2.shapeColor = "blue"
  ob3.shapeColor = "blue"
  ob4.shapeColor = "blue"


  mr.debug = true
  fr.debug = true
}

function draw() {
  background(255,255,255); 
  
  mr.x = World.mouseX
  mr.y = World.mouseY

 if (isTouching(ob1,mr)) {

  mr.shapeColor = "green"
  ob1.shapeColor = "green" 

 }
 else {

  mr.shapeColor = "red"
  ob1.shapeColor = "red"

 }
  drawSprites();
}


