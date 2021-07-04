var player; 






function preload(){
  plr =loadImage("Player image.png"); 
}

function setup() {
  createCanvas(displayWidth, displayHeight);
  player = createSprite(50,50,20,20); 
  player.addImage(plr); 
  player.scale = 0.2; 
}

function draw() {
  background("green");  
  line(displayWidth/2,0,displayWidth/2,displayHeight); 
  if(keyDown(UP_ARROW)) {
    player.velocityX = 0;
    player.velocityY = -4;
  }
  
  if (keyDown(DOWN_ARROW)){
  player.velocityX = 0;
  player.velocityY = 4;
    }
  if (keyDown(LEFT_ARROW)){
  player.velocityX = -4;
  player.velocityY = 0;
  }
  if(keyDown("right")){
  player.velocityX = 4;
  player.velocityY = 0;
  }
 
    
  
  drawSprites();
}