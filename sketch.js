var car,wall;
var speed,weight;








function setup() {
  createCanvas(1600,400);

  speed=random(55,90);
weight=random(400,1500);
car=createSprite(50, 200, 50 ,50);
car.shapeColor='red';
 wall=createSprite(1500, 200, 60,400);
 wall.shapeColor="blue";

}

function draw() {
    
  background(0,0,0);
  car.velocityX = speed ;
 
 car.debug=true;
 
 
 collide(wall,car);
  drawSprites();
}

function collide(wall,car){
  if (car.x - wall.x < car.width/2 + wall.width/2
    && 
car.x -wall.x <wall .width/2 + car.width/2) {
car.velocityX =0  }
}



