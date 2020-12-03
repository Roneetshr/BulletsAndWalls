var car,wall,thickness;

var speed, weight;


function setup() {
  createCanvas(1600,400);
  
  speed=random(223,321);
  weight=random(30,52);
  thickness=random(22,83)

  car=createSprite(50,200,50,50);
  car.velocityX=speed;
  car.shapeColor="white";

  wall=createSprite(1500,200,60,height/2);
  wall.shapeColor="grey";
 
  
}

function draw() {
background("black");

if(wall.x-car.x < (car.width+wall.width)/2){
car.velocityX=0;
var deformation=0.5 * weight * speed * speed/thickness * thickness * thickness;
if(deformation>180){
car.shapeColor="red";
}
if (defortmation<100){
car.shapeColor="green";

}
}






drawSprites();
}