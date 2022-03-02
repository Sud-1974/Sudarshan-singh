var ground,invisibleGround;
var trex ,trex_running,trex_collided;
var ground_image
var obstacle
var edges
var cloud,cloud_image;
var obstacle1
var obstacle2
var obstacle3
var obstacle4
var obstacle5
var obstacle6
var cloudGroup
var obstacleGroup
var play = 1;
var end = 0;
var gameState = play
var score = 0;

function preload(){
    //Loading the files for preload
    cloud_image = loadImage("cloud.png");
    trex_running = loadAnimation("trex1.png","trex3.png","trex4.png");
    ground_image = loadImage("ground2.png");
    obstacle1 = loadImage("obstacle1.png");
    obstacle2 = loadImage("obstacle2.png");
    obstacle3 = loadImage("obstacle3.png");
    obstacle4 = loadImage("obstacle4.png");
    obstacle5 = loadImage("obstacle5.png");
    obstacle6 = loadImage("obstacle6.png");
    trex_collided = loadAnimation("trex_collided.png");
}

function setup(){
      createCanvas(600,530);
    
      //Creating ground 
      ground = createSprite(300,220,600,10);
      ground.addImage("ground",ground_image);

      //create a trex sprite
      trex = createSprite(100,200,30,30);
      trex.addAnimation("running",trex_running);
      trex.scale = 0.6;


      //obstacle.scale = 0.8;
    
      //Creating edges
      edges=createEdgeSprites();

      invisibleGround = createSprite(300,230,600,10);
      invisibleGround.visible = false;

      //creating Groups
      cloudGroup = new Group()
      obstacleGroup = new Group()

    

}

function draw(){

     //Giving colour to the background
     background("black")

     //Giving ground velocity
     

      //Make the ground infinite
      
      
      //Make trex jump
     
     //Give gravity to the trex
     trex.velocityY = trex.velocityY +0.5;
   
     //Make trex collide with the ground
     trex.collide(invisibleGround);

       if(gameState===play){

        ground.velocityX=-7;

        if(ground.x<0){
          ground.x=ground.width/2
         }

         text("Score:" + score, 500 , 50);
         score = score+
         Math.round(getFrameRate()/60);

         spawnClouds();

         spawnObstacles();



        if(keyDown("SPACE")&&trex.y>=160){
          trex.velocityY = -5;
         }
       if(trex.isTouching(obstacleGroup)){
         gameState = end;
       }
    
        }

       else if(gameState===end){

        ground.velocityX=0;

       cloudGroup.setVelocityXEach(0);
       obstacleGroup.setVelocityXEach(0);

       trex.changeAnimation("collide", trex_collided);
       }


       cloudGroup.setLifetimeEach(-1);
       obstacleGroup.setLifetimeEach(-1);
       
       drawSprites();
}                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      


    function spawnClouds(){

      if(frameCount%60===0){
        
      cloud = createSprite(500,100,50,50);

      cloud.velocityX=-5;
      

      cloud.addImage("moving",cloud_image);

      cloud.y = Math.round(random(10,160))

      console.log(trex.depth);
      console.log(cloud.depth);

      cloud.depth = trex.depth ;
      trex.depth = trex.depth + 1 ;

       cloud.lifetime = 120;   

        cloudGroup.add(cloud);
      }
    }


      function spawnObstacles(){

      if(frameCount%80===0){

        obstacle = createSprite(450,200,50,60);

       obstacle.velocityX = -5 ;

       obstacle.scale = 0.6;

       var r = Math.round(random(1,6))

       switch( r ){
        case 1 :obstacle.addImage(obstacle1);
        break;

        case 2 :obstacle.addImage(obstacle2);
        break;

        case 3 :obstacle.addImage(obstacle3);
        break;

        case 4 :obstacle.addImage(obstacle4);
        break;

        case 5 :obstacle.addImage(obstacle5);
        break;

        case 6 :obstacle.addImage(obstacle6);
        break;

        default : break;

       }

       obstacle.depth = trex.depth
       trex.depth = trex.depth +1 ;

       obstacle.lifetime = 120;  

       obstacleGroup.add(obstacle);
      }


















      }