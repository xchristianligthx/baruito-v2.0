
//junte 3 proyectos, el de los globitos, el del barco, y el de el arco,
// puse las imagenes correctas, elimine lo que debia eliminar, y me deje de complicar la vida :D 
var ground, invisibleGround, groundImage;
var trex, trex_running, trex_collided;

var bow , arrow,  scene;
var bowImage,arrowImage, green_balloonImage, red_balloonImage, pink_balloonImage ,blue_balloonImage,backgroundImage ;
var select_balloon=1
var score=0;



  
function preload(){
  
  backgroundImage = loadImage("sea.png");
 
  bowImage = loadImage("obstacle4.png");

  groundImage = loadImage("sea.png")

  trex_running = loadAnimation("ship-1.png", "ship-2.png", "ship-3.png" ,"ship-4.png");


 trex_collided = loadImage("ship-1.png");

  
}



function setup() {
  createCanvas(400, 400);
  
  //crear fondo
  scene = createSprite(0,0,400,400);
  scene.addImage(backgroundImage);
  scene.scale = 1.5
  
  //crear arco para disparar las flechas
  bow = createSprite(200,220,20,50);
  bow.addImage(bowImage); 
  bow.scale = 0.0;
  
trex = createSprite(200,200,20,50);
trex.addAnimation("running", trex_running);
trex.scale = 0.3;
score = 0  
}

     
//}

function draw() {
 background(0);
  // mover el suelo
    scene.velocityX = -3 
trex.x=World.mouseX;
    if (scene.x < 0){
      scene.x = scene.width/2;
    }
  
  
  bow.x = World.mouseX
  
  
drawSprites(); 
  }
   


 
