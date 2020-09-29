const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var drop=[];
var thunder, thunder1,thunder2,thunder3,thunder4,thunderCreatedFrame;
var umbrella;
var engine,world;
function preload(){

 thunder1 = loadImage("images/thunderbolt1.png");
 thunder2 = loadImage("images/thunderbolt2.png"); 
 thunder3 = loadImage("images/thunderbolt3.png");
 thunder4 = loadImage("images/thunderbolt4.jpg");
}

function setup(){
  engine = Engine.create();
  world = engine.world;

  createCanvas(480,600);

thunder1=createSprite(100,100,50,50);
thunder2=createSprite(100,100,50,50);
thunder3=createSprite(100,100,50,50);
thunder4=createSprite(100,100,50,50);
umbrella = new Umbrella(200,400);

  Engine.run(engine);
}

function draw(){
    background("black");

    umbrella.display();
    
    if(frameCount%1===0){
      drop.push(new Drop(random(width/10-30, width/1+30), 1,1));
    }
  
    for (var j = 0; j <drop.length; j++) {
   
     drop[j].display();
     }

     //creating thunder
    rand = Math.round(random(1,4));
    if(frameCount%80===0){
        thunderCreatedFrame=frameCount;
        thunder = createSprite(random(10,370), random(10,30), 10, 10);
        switch(rand){
            case 1: thunder.addImage(thunder1);
            break;
            case 2: thunder.addImage(thunder2);
            break; 
            case 3: thunder.addImage(thunder3);
            break;
            case 4: thunder.addImage(thunder4);
            break;
            default: break;
        }
        thunder.scale = random(0.3,0.6)
    }

    if(thunderCreatedFrame + 10 ===frameCount && thunder){
        thunder.destroy();
    }

     drawSprites();
    
}   


