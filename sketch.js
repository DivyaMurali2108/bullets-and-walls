var wall,thivkness;
var bullet,speed ,weight;


function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);
  speed = random(55,90) ;
  thickness = random(22,83);
  weight = random (30,52);
  car.velocityX = speed;
  weight = (400,1500)

  car = createSprite(50,200,50,50);
  wall = createSprite(1200,200,thickness,heighht/2)

}
if (wall.x-car.x<(car.width+wall.width)/2)
{
  car.velocity=0;
  var deformation=0.5 * weight * speed * speed/22509;
  if (deformation>180)
{
car.shpecolor=color(255,0,0);
}
if (deformation<180&&deformation>100)
{
  car.shpecolor=color(230,230,0)
}
if (deformation<100)
{
  car.shapecolor=color(0,255,0);
  }
}

function hascollided(lbullet, lwall)
{
  bulletRightEdge=lbullet.x+ lbullet.width;
  walllestEdge=lwall.x;
  if (bulletRightEdge>=wallleftEdge)
   {
     return true
   }
  return false
}
  

if(hascollided(bullet,wall))
{
  bullet.velocity=0;
  var damage=0.5 *weight * speed* speed/(thickness *thickness *thickness)
}
if(damage>10)
{
  wall.shapecolor=color(255,0,0)
}

if(damage<10)
{
  wall.shpecolor=color(0,255,0)
}
function draw() {
  background(255,255,255);  
  drawSprites();

}
