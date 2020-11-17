var wall,bullet;
var speed,weight;
var thickness;
function setup() {
  speed=random(223,321)
  weight=random(30,52)
  thickness=random(22,83)
  createCanvas(1600,400);

  bullet=createSprite(50,200,50,50)
  bullet.velocityX=speed;
  wall=createSprite(1200,200,thickness, height/2)
}

function draw() {
  background(255,255,255);
  if(hasCollided) {
    bullet.velocityx=0
    var damage=0.5*weight*speed*speed/(thickness*thickness*thickness)
    if(damage >10){
      wall.shapeColor="red"
    }
    if(damage<10){
      wall.shapeColor="blue"
    }
  }
  
  drawSprites();
}
function hasCollided(lbullet,lwall){
bulletRightedge=lbullet.x+lbullet.width
wallLeftedge=lwall.x
if(bulletRightedge>=wallLeftedge){
  return true
}
return false
}

