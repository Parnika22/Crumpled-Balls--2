
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var trashCan, tcI;

function preload()
{
	tcI = loadImage("dustbingreen.png");
}

function setup() {
	createCanvas(1400, 700);

	engine = Engine.create();
	world = engine.world;

	ball = new Ball (200,200,20);
	
	side1 = new Dustbin (890,510,20,300);	
	side3 = new Dustbin (1060,510,20,300);

	side2 = new Dustbin (975,650,200,20);

	trashCan = createSprite(975,510,200,300);
	trashCan.addImage(tcI);
	trashCan.scale = 0.9

	ground = new Ground (width/2,670,1400,15);  
}


function draw() {
	background("white");
	Engine.update(engine)
	rectMode(CENTER);

	ball.display();

	side1.display();
	side3.display();

	ground.display();

	side2.display();

	drawSprites();
}

function keyPressed(){
	if (keyCode === UP_ARROW){
		Matter.Body.applyForce(ball.body, ball.body.position,{x:85, y :-85})
	}
}



