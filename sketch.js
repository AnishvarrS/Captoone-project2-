function preload(){
    backgroundImage = loadImage("../Project_Template_C19_Your-Own-Infinite-Runner-Game-main/Purple Monster/bts stadium.png");
    trex_running =   loadImage("../Project_Template_C19_Your-Own-Infinite-Runner-Game-main/Purple Monster/1 image.png", 
    "../Project_Template_C19_Your-Own-Infinite-Runner-Game-main/Purple Monster/2 i.png", 
    "../Project_Template_C19_Your-Own-Infinite-Runner-Game-main/Purple Monster/3 image.png", 
    "../Project_Template_C19_Your-Own-Infinite-Runner-Game-main/Purple Monster/4 image.png", 
    "../Project_Template_C19_Your-Own-Infinite-Runner-Game-main/Purple Monster/5 image.png", 
    "../Project_Template_C19_Your-Own-Infinite-Runner-Game-main/Purple Monster/6 image.png", 
    "../Project_Template_C19_Your-Own-Infinite-Runner-Game-main/Purple Monster/7 image.png", 
    "../Project_Template_C19_Your-Own-Infinite-Runner-Game-main/Purple Monster/8 image.png");
  //trex_collided = loadAnimation();
  
}

function setup() {
    createCanvas(windowWidth,windowHeight)
    ground = createSprite(200,180,400,20);
    ground.addImage("ground",backgroundImage);
    ground.x = ground.width /2;
    ground.velocityX = -6;
    trex = createSprite(50,180,20,50);
   // trex.addImage("running", trex_running);
   // trex.addAnimation("collided", trex_collided);
    trex.scale = 0.5;
    obstacle1 = loadImage("../Project_Template_C19_Your-Own-Infinite-Runner-Game-main/Purple Monster/obstacle1.png");
    obstacle2 = loadImage("../Project_Template_C19_Your-Own-Infinite-Runner-Game-main/Purple Monster/Obstacle2.png");
    obstacle3 = loadImage("../Project_Template_C19_Your-Own-Infinite-Runner-Game-main/Purple Monster/obstacle3.png");
    obstacle4 = loadImage("../Project_Template_C19_Your-Own-Infinite-Runner-Game-main/Purple Monster/obstacle4.png");
    obstacle5 = loadImage("../Project_Template_C19_Your-Own-Infinite-Runner-Game-main/Purple Monster/Obstacle5.png");
    obstacle6 = loadImage("../Project_Template_C19_Your-Own-Infinite-Runner-Game-main/Purple Monster/Obstacle6.png");
    
    
}

function draw() {
 background('white');
 if (ground.x < 0){
    ground.x = ground.width/2;
  }
  if(keyDown("space") && trex.y >= 159) {
    trex.velocityY = -12;
  }

  trex.velocityY = trex.velocityY + 0.8
  
 drawSprites()
}

