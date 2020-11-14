var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground,zombie,zombieIMG;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload(){
	helicopterIMG=loadImage("helicopter.png");
	packageIMG=loadImage("package.png");
    zombieIMG = loadImage("zombie.jpg");
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	
	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2;

	helicopterSprite=createSprite(width/2, 70, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite = createSprite(width/2, height-110, 200,20);
	groundSprite.shapeColor = color("red");
	groundSprite.visible = true;

	groundSprite2 = createSprite(300, height-150, 20,100);
	groundSprite2.shapeColor = color("red");
	groundSprite2.visible = true;

	groundSprite3 = createSprite(500, height-150, 20,100);
	groundSprite3.shapeColor = color("red");
	groundSprite3.visible = true;

	zombie = createSprite(270,350,20,100);
	zombie.scale = 2.3;
	zombie.addImage(zombieIMG);
	zombie.depth = helicopterSprite.depth;
	helicopterSprite.depth = helicopterSprite.depth + 1;

	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 70 , 5 , {isStatic:true});
	World.add(world, packageBody);
	zombie.depth = packageSprite.depth;
	packageSprite.depth = packageSprite.depth + 1;

	//Create a Ground
	ground = Bodies.rectangle(width/2, 570, width, 10 , {isStatic:true} );
 	World.add(world, ground);

	Engine.run(engine);
  
}

function draw() {
  rectMode(CENTER);
  background(0);
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 
  keyPressed();
  drawSprites();
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
	 Matter.Body.setStatic(packageBody,false);
    packageBody.velocityY = -2;
  }
}



